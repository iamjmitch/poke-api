//--dependancies--
import React, { useState, useEffect, useContext, useRef } from "react"
import styled from "styled-components"

//--components--

import { PokemonContext } from "../context/pokemonContext"

//--styled-components

const StyledOverlay = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #0000009e;
`
const StyledOverlayContainer = styled.div`
  width: 100%;
  max-width: 600px;
  background: white;
`

const Overlay = ({ toggleOverlay }) => {
  const { selectedPokemon, setSelectedPokemon } = useContext(PokemonContext)

  const handleClick = e => {
    if (e.target.id === "overlay") {
      toggleOverlay(false)
    }
  }
  return (
    <StyledOverlay
      id="overlay"
      onClick={e => {
        handleClick(e)
      }}
    >
      <StyledOverlayContainer>
        <p>{selectedPokemon}</p>
      </StyledOverlayContainer>
    </StyledOverlay>
  )
}

export default Overlay
