//--dependancies--
import React, { useState } from "react"
import styled from "styled-components"

//--components--
import Icon from "./icon"
//--styles--

//--styled-components
const StyledMobileCard = styled.div`
  display: flex;
  flex-direction: row;
  padding: 5px;
  .seperator {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    margin-left: 10px;
  }
`

const StyledNumber = styled.div`
  width: auto;
  font-size: 1.4em;
  font-weight: 500;
  font-family: "Fugaz One";
  display: flex;
  justify-content: flex-start;
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
  justify-content: flex-start;
  align-items: center;
  font-size: 1em;
  font-weight: 500;
`

const MobileCard = ({ number, types, img, name }) => {
  String.prototype.toProperCase = function () {
    return this.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    })
  }

  return (
    <StyledMobileCard>
      <StyledSprite src={img} alt={name} />
      <div className="seperator">
        <StyledNumber>#{number}</StyledNumber>
        <StyledName>{name.toProperCase()}</StyledName>
      </div>
      <StyledIcon>
        {types.map(pokemon => (
          <Icon type={pokemon.type.name} key={pokemon.type.name} />
        ))}
      </StyledIcon>
    </StyledMobileCard>
  )
}

export default MobileCard
