//--dependancies--
import React, { useState, useEffect } from "react"
import styled from "styled-components"

//--components--
import { getTypeColor } from "../helper/functions"

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
    width: 100%;
    height: auto;
  }
`
//--styled-components

const Icon = ({ type }) => {
  const [bg, setBg] = useState("")

  useEffect(() => {
    let typeColor = getTypeColor(type)
    setBg(typeColor)
  }, [type])

  return (
    <StyledIcon bg={bg}>
      <img src={`./images/type/${type}.svg`} />
    </StyledIcon>
  )
}

export default Icon
