//--dependancies--
import React, { useState, useEffect, useContext } from "react"
import styled from "styled-components"
import axios from "axios"

//--components--
import { PokemonContext } from "../../context/pokemonContext"
//--styles--

//--styled-components

const Evolutions = ({ url }) => {
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
      evoChain.push({
        species_name: evoData.species.name,
        index: parseInt(evoData.species.url.split("/")[6]),
        min_level: !evoDetails ? 1 : evoDetails.min_level,
        trigger_name: !evoDetails ? null : evoDetails.trigger.name,
        item: !evoDetails ? null : evoDetails.item,
      })

      evoData = evoData["evolves_to"][0]
    } while (!!evoData && evoData.hasOwnProperty("evolves_to"))
    firstGenOnly(evoChain)
  }

  // only include gen 1 pokemon
  const firstGenOnly = evoChain => {
    const newList = []
    evoChain.map(species => {
      if (species.index <= 151) {
        newList.push(species)
      }
    })
    createSquence(newList)
  }

  //convert chain to mapable array
  const createSquence = chain => {
    let sequence = []
    for (var i = 0; i < chain.length - 1; i++) {
      let step = {
        from: chain[i].species_name,
        tigger: chain[i + 1].trigger_name,
        item: chain[i + 1].item?.name,
        level: chain[i + 1].min_level,
        to: chain[i + 1].species_name,
      }
      sequence.push(step)
    }
    setEvoChain(sequence)
  }

  //run once on component mount
  useEffect(() => {
    getEvolutionData()
  }, [selectedPokemon])
  console.log(evoChain)
  return (
    <div>
      {evoChain !== ""
        ? evoChain.map(evo => <p key={evo.species_name}>{evo.from}</p>)
        : ""}
    </div>
  )
}

export default Evolutions
