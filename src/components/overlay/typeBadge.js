//--dependancies--
import React, { useState, useEffect } from "react"
import styled from "styled-components"

//--components--
import { getTypeColor } from "../helper/functions"
//--styles--

//--styled-components

const StyledBadge = styled.div`
  display: flex;
  background: ${props => props.color};
  justify-content: center;
  align-items: center;
  padding: 2px 10px;
  border-radius: 30px;
  font-size: 0.9em;
  font-weight: 500;
  color: white;
  text-transform: capitalize;
  margin: 0 5px;
  box-shadow: 0 0 4px 1px ${props => props.color};
  img {
    height: 15px;
    margin-right: 5px;
  }
`

const TypeBadge = ({ typeName }) => {
  let typeColor = getTypeColor(typeName)

  return (
    <StyledBadge color={typeColor}>
      <img src={`./images/type/${typeName}.svg`} />
      <p>{typeName}</p>
    </StyledBadge>
  )
}

export default TypeBadge
