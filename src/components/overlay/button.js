//--dependancies--
import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

//--components--

//--styles--

//--styled-components

const StyledButton = styled.button`
  background: ${props => props.color};
  border: none;
  padding: 3px 15px;
  margin: 0 10px;
  color: white;
  text-transform: capitalize;
  font-size: 0.9em;
  border-radius: 20px;
  font-weight: 500;
  box-shadow: 0 0 4px 1px ${props => props.color};
  &:hover {
    cursor: pointer;
  }
`

const Button = ({ text, color, action }) => {
  return (
    <StyledButton onClick={() => action(text)} color={color}>
      {text}
    </StyledButton>
  )
}

export default Button
