//--dependancies--
import React, { useState, useEffect, useContext, useRef } from "react"
import styled from "styled-components"
import axios from "axios"

//--components--

import { PokemonContext } from "../context/pokemonContext"
import Description from "./pokemonDesc"
import Stats from "./stats/stats"
import Evolutions from "./evolutions/evolutions"
import Moves from "./moves/moves"
import Button from "./button"
import { getTypeColor } from "../helper/functions"
import { arrow } from "../../../static/images/arrow"

//--styled-components

const StyledOverlay = styled.div`
  position: relative;
  opacity: ${props => (props.showOverlay === true ? 1 : 0)};
  pointer-events: ${props => (props.showOverlay === true ? "auto" : "none")};
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: ${props =>
    props.dataLoaded === true ? "flex-start" : "center"};
  align-items: ${props =>
    props.dataLoaded === true ? "flex-start" : "center"};
  background: ${props => (props.dataLoaded ? props.BG : "#ffffff")};
  transition: opacity ${props => (props.showOverlay === true ? "0s" : "1s")}
    ease-in;
  overflow-y: scroll;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    display: none;
  }
  .loading {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      height: 50px;
      width: 50px;
    }
  }
`
const StyledOverlayContainer = styled.div`
  margin-top: 276px;
  width: 100%;
  min-height: calc(100% - 276px);
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

const TabContainer = styled.div`
  display: inline-block;
  padding-bottom: 30px;
  width: 100%;
  max-width: 500px;
  max-height: 500px;
  overflow-y: scroll;
  /* mobile */
  @media (max-width: 480px) {
    max-height: unset;
  }

  &::-webkit-scrollbar {
    display: none;
  }
  /* mobile */
  @media (min-width: 500px) {
    max-height: unset;
    height: unset;
  }
`
const TabContainerInner = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: ${props => props.tabSize * 3}px;
  margin-left: ${props => (props.tab == "stats" ? "0px" : "")};
  margin-left: ${props =>
    props.tab == "evolutions" ? props => "-" + props.tabSize + "px" : ""};
  margin-left: ${props =>
    props.tab == "moves" ? props => "-" + props.tabSize * 2 + "px" : ""};
  transition: margin 0.3s ease-in-out;
  overflow-x: hidden;
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
    height: 10vw;
    max-height: 100px;
    display: block;
    width: auto;
    fill-opacity: 0.3;
    transition: 0.5s;
  }

  /* mobile */
  @media (max-width: 480px) {
    left: 15px;
    top: 15px;
  }
`

const Overlay = ({ toggleOverlay, showOverlay }) => {
  const { selectedPokemon, setSelectedPokemon } = useContext(PokemonContext)
  const [pokemonData, setPokemonData] = useState([])
  const [currentTab, setCurrentTab] = useState("stats")
  const [typeColor, setTypeColor] = useState(null)
  const [dataLoaded, setDataLoaded] = useState(false)
  const [tabSize, setTabSize] = useState(0)
  const tabContainer = useRef()

  const getData = async () => {
    try {
      axios
        .all([
          axios.get(`https://pokeapi.co/api/v2/pokemon/${selectedPokemon}`),
          axios.get(
            `https://pokeapi.co/api/v2/pokemon-species/${selectedPokemon}`
          ),
        ])
        .then(
          axios.spread((...responses) => {
            const combinedData = { ...responses[0].data, ...responses[1].data }
            setPokemonData(combinedData)
            let color = getTypeColor(responses[0].data.types[0].type.name)
            setTypeColor(color)
            setDataLoaded(true)
            setTabSize(tabContainer.current.offsetWidth)
          })
        )
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getData()
  }, [selectedPokemon])

  useEffect(() => {
    if (tabContainer.current != undefined) {
      setTabSize(tabContainer.current.offsetWidth)
    }
  }, [tabContainer.current])

  const handleButtonClick = tab => {
    setCurrentTab(tab)
  }

  const handleArrowClick = () => {
    toggleOverlay(false)
    setDataLoaded(false)
  }

  return (
    <StyledOverlay
      BG={typeColor}
      dataLoaded={dataLoaded}
      showOverlay={showOverlay}
    >
      {dataLoaded === false && showOverlay === true && (
        <div className="loading">
          <img src="./images/pokeball.png" alt="loading" />
          <p>Loading....</p>
        </div>
      )}
      <StyledArrow onClick={handleArrowClick}>{arrow}</StyledArrow>
      {dataLoaded === true ? (
        <StyledOverlayContainer>
          <Description
            key={pokemonData.name}
            name={pokemonData.name}
            descList={pokemonData.flavor_text_entries}
            pokemonImage={
              pokemonData.sprites.other["official-artwork"]["front_default"]
            }
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
          <TabContainer ref={tabContainer}>
            {tabSize !== 0 ? (
              <TabContainerInner tab={currentTab} tabSize={tabSize}>
                <Stats
                  key="stats"
                  statsList={pokemonData.stats}
                  typeColor={typeColor}
                  tabSize={tabSize}
                />

                <Evolutions
                  key="evos"
                  url={pokemonData.evolution_chain.url}
                  typeColor={typeColor}
                  tabSize={tabSize}
                />
                <Moves
                  key="moves"
                  moves={pokemonData.moves}
                  tabSize={tabSize}
                />
              </TabContainerInner>
            ) : (
              ""
            )}
          </TabContainer>
        </StyledOverlayContainer>
      ) : (
        ""
      )}
    </StyledOverlay>
  )
}

export default Overlay
