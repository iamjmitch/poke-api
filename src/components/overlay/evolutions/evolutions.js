//--dependancies--
import React, { useState, useEffect, useContext } from "react"
import styled from "styled-components"
import axios from "axios"

//--components--
import { PokemonContext } from "../../context/pokemonContext"
import SingleEvo from "./singleEvolution"
//--styles--

//--styled-components

const Evolutions = ({ url, typeColor }) => {
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

    do {
      var evoDetails = evoData["evolution_details"][0]
      if (parseInt(evoData.species.url.split("/")[6]) < 151) {
        evoChain.push({
          species_name: evoData.species.name,
          index: parseInt(evoData.species.url.split("/")[6]),
          min_level: !evoDetails ? 1 : evoDetails.min_level,
          trigger_name: !evoDetails ? null : evoDetails.trigger.name,
          item: !evoDetails ? null : evoDetails.item,
        })
      }

      evoData = evoData["evolves_to"][0]
    } while (!!evoData && evoData.hasOwnProperty("evolves_to"))
    createSquence(evoChain)
  }

  //convert chain to mapable array
  const createSquence = chain => {
    let sequence = []
    for (var i = 1; i < chain.length; i++) {
      let step = {
        from: chain[i - 1].species_name,
        fromNum: chain[i - 1].index,
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
    <div>
      {evoChain !== ""
        ? evoChain.map(evo => <SingleEvo chain={evo} typeColor={typeColor} />)
        : ""}
      {evoChain.length === 0 && "This Pokemon Has No Evolutions"}
    </div>
  )
}

export default Evolutions
