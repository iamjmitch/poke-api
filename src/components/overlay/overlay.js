//--dependancies--
import React, { useState, useEffect, useContext, useRef } from "react"
import styled from "styled-components"
import axios from "axios"

//--components--

import { PokemonContext } from "../context/pokemonContext"
import Description from "./pokemonDesc"
import Stats from "./stats"
import Evolutions from "./evolutions"
import Moves from "./moves"
import Button from "./button"
import { getTypeColor } from "../helper/colorSelector"

//--styled-components

const StyledOverlay = styled.div`
  opacity: ${props => (props.dataLoaded === true ? 1 : 0)};
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => props.BG};
  padding-top: 300px;
  transition: 0.3s;
`
const StyledOverlayContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  border-top-left-radius: 60px;
  border-top-right-radius: 60px;
`

const ButtonContainer = styled.div`
  display: flex;
  padding-bottom: 30px;
`

const Overlay = ({ toggleOverlay }) => {
  const { selectedPokemon, setSelectedPokemon } = useContext(PokemonContext)
  const [pokemonData, setPokemonData] = useState([])
  const [currentTab, setCurrentTab] = useState("stats")
  const [typeColor, setTypeColor] = useState(null)
  const [dataLoaded, setDataLoaded] = useState(false)

  const getPokemonData = async () => {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${selectedPokemon}`
      )
      setPokemonData(response.data)
      let color = getTypeColor(response.data.types[0].type.name)
      setTypeColor(color)
      setDataLoaded(true)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getPokemonData()
  }, [selectedPokemon])

  const handleButtonClick = tab => {
    setCurrentTab(tab)
  }

  return (
    <StyledOverlay BG={typeColor} dataLoaded={dataLoaded}>
      {console.log(dataLoaded)}
      {dataLoaded === true ? (
        <StyledOverlayContainer>
          <Description
            pokemon={selectedPokemon}
            //prettier-ignore
            pokemonImage={pokemonData.sprites.other["official-artwork"]["front_default"]}
            pokemonType={pokemonData.types}
            typeColor={typeColor}
          />

          <ButtonContainer>
            <Button color={typeColor} text="stats" action={handleButtonClick} />
            <Button
              color={typeColor}
              text="evolutions"
              action={handleButtonClick}
            />
            <Button color={typeColor} text="moves" action={handleButtonClick} />
          </ButtonContainer>
          {currentTab === "stats" && <Stats />}
          {currentTab === "evolutions" && <Evolutions />}
          {currentTab === "moves" && <Moves />}
        </StyledOverlayContainer>
      ) : (
        ""
      )}
    </StyledOverlay>
  )
}

export default Overlay
