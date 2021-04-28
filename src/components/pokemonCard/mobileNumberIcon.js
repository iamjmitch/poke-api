//--dependancies--
import React, { useState } from "react"
import styled from "styled-components"

//--components--
import Icon from "./icon"
//--styles--

//--styled-components
const StyledNumberIcon = styled.div`
  display: flex;
  flex-direction: row;
  padding: 5px;
`

const StyledNumber = styled.div`
  width: auto;
  font-size: 1.7em;
  font-weight: 700;
  font-family: "Fugaz One";
  padding-right: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledIcon = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
`
const StyledSprite = styled.img`
  width: 80px;
  margin-right: 5px;
`
const StyledName = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 500;
`

const MobileNumberIcon = ({ number, types, img, name }) => {
  String.prototype.toProperCase = function () {
    return this.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    })
  }

  return (
    <StyledNumberIcon>
      <StyledSprite src={img} alt={name} />
      <StyledNumber>#{number}</StyledNumber>
      <StyledName>{name.toProperCase()}</StyledName>
      <StyledIcon>
        {types.map(pokemon => (
          <Icon type={pokemon.type.name} key={pokemon.type.name} />
        ))}
      </StyledIcon>
    </StyledNumberIcon>
  )
}

export default MobileNumberIcon
