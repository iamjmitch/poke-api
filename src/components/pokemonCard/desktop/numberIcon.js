//--dependancies--
import React, { useState } from "react"
import styled from "styled-components"

//--components--
import Icon from "../icon"
//--styles--

//--styled-components
const StyledNumberIcon = styled.div`
  display: flex;
  flex-direction: row;
  padding: 5px;
  width: 100%;
`

const StyledNumber = styled.div`
  width: auto;
  font-size: 1.7em;
  font-weight: 700;
  font-family: "Fugaz One";
  padding-left: 5px;
`

const StyledIcon = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
`

const NumberIcon = ({ number, types }) => {
  return (
    <StyledNumberIcon>
      <StyledNumber>#{number}</StyledNumber>
      <StyledIcon>
        {types.map(pokemon => (
          <Icon type={pokemon.type.name} key={pokemon.type.name} />
        ))}
      </StyledIcon>
    </StyledNumberIcon>
  )
}

export default NumberIcon
