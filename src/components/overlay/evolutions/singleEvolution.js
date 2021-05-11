//--dependancies--
import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

//--components--
import { arrow } from "../../../../static/images/evoArrow"
//--styles--

//--styled-components
const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 50px;
`
const PokemonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  text-transform: capitalize;
  text-align: center;
  margin: 0 15px;
  &.info {
    min-width: 100px;
  }
  b {
    font-weight: 500;
    font-size: 0.8em;
  }
  img {
    height: 120px;
    width: auto;
  }
  svg {
    margin-bottom: 20px;
    height: 50px;
    width: auto;
    path {
      fill: ${props => props.svgColor};
    }
  }
`
const ToPokemonImg = styled.img``
const FromPokemonImg = styled.img``

const SingleEvo = ({ chain, typeColor }) => {
  const imgList = JSON.parse(localStorage.getItem("urlList"))

  return (
    <StyledContainer>
      <PokemonContainer>
        <FromPokemonImg src={imgList[`${chain.fromNum}`]} />
        {chain.from}
      </PokemonContainer>
      <PokemonContainer className="info" svgColor={typeColor}>
        {arrow}
        <b>
          <p>
            {chain.trigger !== null && `${chain.trigger.replace("-", " ")}`}
          </p>
          <p>{chain.item !== null && `${chain.item.name.replace("-", " ")}`}</p>
          <p>{chain.level !== null && `Required Level: ${chain.level}`}</p>
        </b>
      </PokemonContainer>
      <PokemonContainer>
        <ToPokemonImg src={imgList[`${chain.toNum}`]} />
        {chain.to}
      </PokemonContainer>
    </StyledContainer>
  )
}

export default SingleEvo
