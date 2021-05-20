//--dependancies--
import React, { useContext } from "react"
import styled from "styled-components"
import { Link } from "gatsby"

//--components--
import { arrow } from "../../../../static/images/evoArrow"
import { arrowSelector } from "./arrowSelector"
import { PokemonContext } from "../../context/pokemonContext"
import { getStone } from "./stoneSelector"
//--styles--

//--styled-components
const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 30px;
  justify-content: center;
  line-height: 1.2em;
  :last-of-type {
    margin-bottom: 0px;
  }
`
const PokemonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  text-transform: capitalize;
  text-align: center;
  margin: 0 15px;
  width: 30%;
  cursor: ${props => (props.hover ? "pointer" : "auto")};

  &.info {
    min-width: 100px;
  }
  b {
    font-weight: 500;
    font-size: 0.8em;
    line-height: 1.2em;
  }
  .stone {
    height: 40px;
    width: auto;
    margin-bottom: 20px;
  }
  svg {
    margin-bottom: 20px;
    max-height: 40px;
    max-width: 50px;
    path {
      fill: ${props => props.svgColor};
    }
  }
`
const ToPokemonImg = styled.img`
  height: 100%;
  width: auto;
`
const FromPokemonImg = styled.img`
  height: 100%;
  width: auto;
`

const SingleEvo = ({ chain, typeColor }) => {
  const imgList = JSON.parse(localStorage.getItem("urlList"))
  const { selectedPokemon, setSelectedPokemon } = useContext(PokemonContext)

  const handleClick = number => {
    setSelectedPokemon(number)
  }

  return (
    <StyledContainer>
      <PokemonContainer onClick={() => handleClick(chain.fromNum)} hover={true}>
        <FromPokemonImg src={imgList[`${chain.fromNum}`]} />
        {chain.from}
      </PokemonContainer>
      <PokemonContainer className="info" svgColor={typeColor}>
        {chain.trigger !== null &&
        chain.trigger !== undefined &&
        chain.trigger == "use-item"
          ? getStone(chain.item.name.replace("-", " "))
          : arrowSelector(chain.trigger.replace("-", " "))}

        <b>
          <p>
            {chain.trigger !== null &&
              chain.trigger !== undefined &&
              `${chain.trigger.replace("-", " ")}`}
          </p>
          <p>
            {chain.item !== null &&
              chain.item !== undefined &&
              `${chain.item.name.replace("-", " ")}`}
          </p>
          <p>
            {chain.level !== null &&
              chain.level !== undefined &&
              `Required Level: ${chain.level}`}
          </p>
        </b>
      </PokemonContainer>
      <PokemonContainer onClick={() => handleClick(chain.toNum)} hover={true}>
        <ToPokemonImg src={imgList[`${chain.toNum}`]} />
        {chain.to}
      </PokemonContainer>
    </StyledContainer>
  )
}

export default SingleEvo
