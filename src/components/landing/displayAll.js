import axios from "axios"
import React, { useState, useEffect } from "react"
import styled from "styled-components"
import SinglePokemon from "../pokemonCard/desktop/pokemonCard"

import Overlay from "../overlay/overlay"
import { PokemonContext } from "../context/pokemonContext"

const StyledDisplayAll = styled.div`
  background: white;
  width: 100%;
  justify-content: center;
  align-items: center;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
  grid-gap: 5px;
  padding: 10px;
  /* mobile */
  @media (max-width: 480px) {
    grid-template-columns: repeat(auto-fill, minmax(40%, 1fr));
  }
`

const DisplayAll = ({ showOverlay, toggleOverlay, searchQuery }) => {
  const [pokeList, updatePokeList] = useState([])
  const [windowSize, setWindowSize] = useState(0)
  const [selectedPokemon, setSelectedPokemon] = useState(null)

  const getPokeList = () => {
    axios.get(`https://pokeapi.co/api/v2/pokemon?limit=151`).then(response => {
      updatePokeList(response.data.results)
      localStorage.setItem("pokeList", JSON.stringify(response.data.results))
    })
  }

  useEffect(() => {
    if (localStorage.getItem("pokeList")) {
      updatePokeList(JSON.parse(localStorage.getItem("pokeList")))
    } else {
      getPokeList()
    }
  }, [])

  useEffect(() => {
    typeof window !== `undefined` ? setWindowSize(window.outerWidth) : ""
    setWindowSize(window.outerWidth)
  }, [typeof window])

  return (
    <PokemonContext.Provider
      value={{
        selectedPokemon,
        setSelectedPokemon,
      }}
    >
      <StyledDisplayAll
        toggled={showOverlay}
        showOverlay={showOverlay}
        toggleOverlay={toggleOverlay}
      >
        <Overlay toggleOverlay={toggleOverlay} showOverlay={showOverlay} />
        {pokeList.map((pokemon, index) => (
          <SinglePokemon
            searchQuery={searchQuery}
            key={pokemon.name}
            name={pokemon.name}
            url={pokemon.url}
            number={index + 1}
            toggleOverlay={toggleOverlay}
          />
        ))}
      </StyledDisplayAll>
    </PokemonContext.Provider>
  )
}

export default DisplayAll
