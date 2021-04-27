//--dependancies--
import React, { useState, useEffect } from "react"
import styled from "styled-components"

//--components--

//--styles--
const StyledIcon = styled.div`
  background: ${props => props.bg};
  border: 1px solid #ffffff99;
  box-shadow: 0 0 7px 1px ${props => props.bg};
  border-radius: 50%;
  width: 30px;
  height: 30px;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 4px;
  img {
    width: 80%;
    height: auto;
  }
`
//--styled-components

const Icon = ({ type }) => {
  const [bg, SetBg] = useState("")

  useEffect(() => {
    switch (type) {
      case "water":
        SetBg("#6890F0")
        break
      case "steel":
        SetBg("#B8B8D0")
        break
      case "rock":
        SetBg("#B8A038")
        break
      case "psychic":
        SetBg("#F85888")
        break
      case "poison":
        SetBg("#A040A0")
        break
      case "normal":
        SetBg("#A8A878")
        break
      case "ice":
        SetBg("#98D8D8")
        break
      case "ground":
        SetBg("#E0C068")
        break
      case "grass":
        SetBg("#78C850")
        break
      case "ghost":
        SetBg("#705898")
        break
      case "flying":
        SetBg("#A890F0")
        break
      case "fire":
        SetBg("#F08030")
        break
      case "fighting":
        SetBg("#C03028")
        break
      case "fairy":
        SetBg("#EE99AC")
        break
      case "electric":
        SetBg("#F8D030")
        break
      case "dragon":
        SetBg("#7038F8")
        break
      case "dark":
        SetBg("#705848")
        break
      case "bug":
        SetBg("#A8B820")
        break
      default:
        SetBg("#000000")
        break
    }
  }, [type])

  return (
    <StyledIcon bg={bg}>
      <img src={`./images/type/${type}.svg`} />
    </StyledIcon>
  )
}

export default Icon
