//--dependancies--
import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

//--components--

//--styles--

//--styled-components

const StyledButton = styled.button`
  background: ${props => (props.active == true ? props.color : "transparent")};
  border: none;
  padding: 3px 15px;
  margin: 0 10px;
  color: ${props => (props.active == true ? "white" : "black")};
  text-transform: capitalize;
  font-size: 0.9em;
  border-radius: 20px;
  font-weight: 500;
  box-shadow: 0 0 4px 1px ${props => props.color};
  &:hover {
    cursor: pointer;
  }
`

const Button = ({ text, color, action, active }) => {
  let isActive = active == text

  // console.log(isActive)

  return (
    <StyledButton
      onClick={e => {
        e.preventDefault()
        action(text)
      }}
      color={color}
      active={isActive}
    >
      {text}
    </StyledButton>
  )
}

export default Button
