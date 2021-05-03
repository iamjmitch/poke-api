//--dependancies--
import React, { useState, useEffect, useContext } from "react"
import styled from "styled-components"
import axios from "axios"

//--components--
import { PokemonContext } from "../../context/pokemonContext"
//--styles--

//--styled-components

const Evolutions = ({ url }) => {
  const [evolutionData, setEvolutionData] = useState("")
  const [evolutionChain, setEvolutionChain] = useState("")
  const { selectedPokemon, setSelectedPokemon } = useContext(PokemonContext)

  const getEvolutionData = async () => {
    // console.log(data)
    try {
      const response = await axios.get(`${url}`)
      setEvolutionData(response.data.chain)
    } catch (err) {
      console.log(err)
    }
  }

  const getEvolutionChain = () => {
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
    setEvolutionChain(evoChain)
  }

  useEffect(() => {
    getEvolutionData()
  }, [selectedPokemon])
  useEffect(() => {
    evolutionData !== "" ? getEvolutionChain() : ""
  }, [evolutionData])

  console.log(evolutionChain)
  console.log(evolutionData)

  return (
    <div>
      {evolutionChain !== ""
        ? evolutionChain.map(
            species => species.index <= 151 && <p>{species.species_name}</p>
          )
        : "Loading Data..."}
    </div>
  )
}

export default Evolutions

// https://pokeapi.co/api/v2/evolution-chain/2/
