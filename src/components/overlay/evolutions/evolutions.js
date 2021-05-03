//--dependancies--
import React, { useState, useEffect, useContext } from "react"
import styled from "styled-components"
import axios from "axios"

//--components--
import { PokemonContext } from "../../context/pokemonContext"
//--styles--

//--styled-components

const Evolutions = () => {
  const [evoData, setEvoData] = useState("")
  const { selectedPokemon, setSelectedPokemon } = useContext(PokemonContext)

  const getEvolutionData = async () => {
    // console.log(data)
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/evolution-chain/${selectedPokemon}`
      )
      setEvoData(response.data)
    } catch (err) {
      console.log(err)
    }
  }

  console.log(evoData)

  useEffect(() => {
    getEvolutionData()
  }, [selectedPokemon])

  return <p>evolutions</p>
}

export default Evolutions

// https://pokeapi.co/api/v2/evolution-chain/2/
