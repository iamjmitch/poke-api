//--dependancies--
import React, { useState, useEffect, useContext, useRef } from "react"
import styled from "styled-components"
import axios from "axios"

//--components--

import { PokemonContext } from "../context/pokemonContext"
import Description from "./pokemonDesc"
import Stats from "./stats/stats"
import Evolutions from "./evolutions"
import Moves from "./moves/moves"
import Button from "./button"
import { getTypeColor } from "../helper/functions"
import { arrow } from "../../../static/images/arrow"

//--styled-components

const StyledOverlay = styled.div`
  position: relative;
  opacity: ${props => (props.dataLoaded === true ? 1 : 0)};
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  background: ${props => props.BG};
  transition: opacity 0.3s;
  overflow-y: scroll;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    display: none;
  }
`
const StyledOverlayContainer = styled.div`
  margin-top: 276px;
  width: 100%;
  height: calc(100% - 276px);
  flex: 2;

  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  padding: 0 15px 50px 15px;
`

const ButtonContainer = styled.div`
  display: flex;
  padding-bottom: 30px;
`

const StyledArrow = styled.div`
  position: absolute;
  left: 50px;
  top: 70px;
  &:hover {
    cursor: pointer;
    svg {
      path {
        fill-opacity: 0.6;
      }
    }
  }
  svg {
    display: block;
    width:auto;
      fill-opacity: 0.3;
      transition: 0.5s;
    }
  }
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

  //   console.log(pokemonData)

  return (
    <StyledOverlay BG={typeColor} dataLoaded={dataLoaded}>
      <StyledArrow
        onClick={() => {
          toggleOverlay(false)
        }}
      >
        {arrow}
      </StyledArrow>
      {/* {console.log(pokemonData)} */}
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
            <Button
              color={typeColor}
              active={currentTab}
              text="stats"
              action={handleButtonClick}
            />
            <Button
              color={typeColor}
              text="evolutions"
              action={handleButtonClick}
              active={currentTab}
            />
            <Button
              color={typeColor}
              active={currentTab}
              text="moves"
              action={handleButtonClick}
            />
          </ButtonContainer>
          {currentTab === "stats" && (
            <Stats statsList={pokemonData.stats} typeColor={typeColor} />
          )}
          {currentTab === "evolutions" && <Evolutions />}
          {currentTab === "moves" && <Moves moves={pokemonData.moves} />}
        </StyledOverlayContainer>
      ) : (
        ""
      )}
    </StyledOverlay>
  )
}

export default Overlay
