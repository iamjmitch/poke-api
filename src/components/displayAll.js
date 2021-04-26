import axios from "axios"
import React, { useState, useEffect } from "react"
import styled from "styled-components"
import SinglePokemon from "./singlePokemon.js"

const StyledDisplayAll = styled.div`
  background: #3a3939;
  min-height: 100vh;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 5px;
  padding: 10px;
`

const DisplayAll = () => {
  const [pokeList, updatePokeList] = useState([])

  useEffect(() => {
    // get data from GitHub api
    axios
      .get(`https://pokeapi.co/api/v2/pokemon?limit=500`)
      .then(response => updatePokeList(response.data.results))
  }, [])

  return (
    <StyledDisplayAll>
      {pokeList.map(pokemon => (
        <SinglePokemon
          key={pokemon.name}
          name={pokemon.name}
          url={pokemon.url}
        />
      ))}
    </StyledDisplayAll>
  )
}

export default DisplayAll
