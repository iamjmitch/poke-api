//--dependancies--
import React, { useState, useEffect, useContext } from "react"
import styled from "styled-components"
import axios from "axios"

//--components--
import { PokemonContext } from "../../context/pokemonContext"
import SingleEvo from "./singleEvolution"
//--styles--

const StyledContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 500px;
  flex-direction: column;
  text-align: center;
`

//--styled-components

const Evolutions = ({ url, typeColor, tabSize }) => {
  const [evoChain, setEvoChain] = useState("")
  const { selectedPokemon, setSelectedPokemon } = useContext(PokemonContext)

  // Get unrefined data from api
  const getEvolutionData = async () => {
    try {
      const response = await axios.get(`${url}`)
      generateEvoChain(response.data.chain)
    } catch (err) {
      console.log(err)
    }
  }

  // extract useable data from api return
  const generateEvoChain = evolutionData => {
    var evoChain = []
    var evoData = evolutionData
    let numOfEvos = evoData.evolves_to.length
    do {
      var evoDetails = evoData["evolution_details"][0]

      if (parseInt(evoData.species.url.split("/")[6]) < 151) {
        evoChain.push({
          species_name: evoData.species.name,
          index: parseInt(evoData.species.url.split("/")[6]),
          min_level: !evoDetails ? 1 : evoDetails.min_level,
          trigger_name: !evoDetails ? null : evoDetails.trigger?.name,
          item: !evoDetails ? null : evoDetails.item,
        })
      }

      if (numOfEvos > 1) {
        for (let i = 0; i < numOfEvos; i++) {
          if (parseInt(evoData.evolves_to[i].species.url.split("/")[6]) < 151) {
            evoChain.push({
              fromPokemonNum: evoData.species.url.split("/")[6],
              fromPokemonName: evoData.species.name,
              species_name: evoData.evolves_to[i].species.name,
              index: parseInt(evoData.evolves_to[i].species.url.split("/")[6]),
              min_level: !evoData.evolves_to[i]
                ? 1
                : evoData.evolves_to[i].evolution_details[0].min_level,
              trigger_name: !evoData.evolves_to[i]
                ? null
                : evoData.evolves_to[i].evolution_details[0].trigger?.name,
              item: !evoData.evolves_to[i]
                ? null
                : evoData.evolves_to[i].evolution_details[0].item,
            })
          }
        }
      }

      evoData = evoData["evolves_to"][0]
    } while (!!evoData && evoData.hasOwnProperty("evolves_to") && numOfEvos < 2)
    createSquence(evoChain)
  }

  //convert chain to mapable array
  const createSquence = chain => {
    let sequence = []
    for (var i = 1; i < chain.length; i++) {
      let step = {
        from: !chain[i].fromPokemonName
          ? chain[i - 1].species_name
          : chain[1].fromPokemonName,
        fromNum: !chain[i].fromPokemonNum
          ? chain[i - 1].index
          : chain[i].fromPokemonNum,
        trigger: chain[i].trigger_name,
        item: chain[i].item,
        level: chain[i].min_level,
        to: chain[i].species_name,
        toNum: chain[i].index,
      }
      sequence.push(step)
    }
    setEvoChain(sequence)
  }

  //run once on component mount
  useEffect(() => {
    getEvolutionData()
  }, [selectedPokemon])

  return (
    <StyledContainer tabSize={tabSize}>
      {evoChain !== ""
        ? evoChain.map(evo => <SingleEvo chain={evo} typeColor={typeColor} />)
        : "Loading..."}
      {evoChain !== "" &&
        evoChain.length === 0 &&
        "This Pokemon Has No Evolutions"}
    </StyledContainer>
  )
}

export default Evolutions
