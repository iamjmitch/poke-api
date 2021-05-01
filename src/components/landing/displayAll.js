import axios from "axios"
import React, { useState, useEffect } from "react"
import styled from "styled-components"
import SinglePokemon from "../pokemonCard/desktop/pokemonCard"
import MobileSinglePokemon from "../pokemonCard/mobile/pokemonSingle"

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
  const [windowSize, setWindowSize] = useState(0)

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon?limit=151`)
      .then(response => updatePokeList(response.data.results))
  }, [])

  useEffect(() => {
    typeof window !== `undefined` ? setWindowSize(window.outerWidth) : ""
    setWindowSize(window.outerWidth)
  }, [typeof window])

  return (
    <StyledDisplayAll>
      {pokeList.map((pokemon, index) =>
        windowSize <= 440 ? (
          <MobileSinglePokemon
            key={pokemon.name}
            name={pokemon.name}
            url={pokemon.url}
            number={index + 1}
            windowSize={windowSize}
          />
        ) : (
          <SinglePokemon
            key={pokemon.name}
            name={pokemon.name}
            url={pokemon.url}
            number={index + 1}
          />
        )
      )}
    </StyledDisplayAll>
  )
}

export default DisplayAll
