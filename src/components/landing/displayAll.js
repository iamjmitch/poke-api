import axios from "axios"
import React, { useState, useEffect } from "react"
import styled from "styled-components"
import SinglePokemon from "../pokemonCard/singlePokemon"
import MobileSinglePokemon from "../pokemonCard/mobileSingle"

const StyledDisplayAll = styled.div`
  background: white;
  min-height: 100vh;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
  grid-gap: 5px;
  padding: 10px;
`

const DisplayAll = () => {
  const [pokeList, updatePokeList] = useState([])

  useEffect(() => {
    // get data from GitHub api
    axios
      .get(`https://pokeapi.co/api/v2/pokemon?limit=151`)
      .then(response => updatePokeList(response.data.results))
  }, [])

  return (
    <StyledDisplayAll>
      {pokeList.map((pokemon, index) => (
        <MobileSinglePokemon
          key={pokemon.name}
          name={pokemon.name}
          url={pokemon.url}
          number={index + 1}
        />
      ))}
    </StyledDisplayAll>
  )
}

export default DisplayAll
