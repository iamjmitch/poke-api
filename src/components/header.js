import React from "react"
import styled from "styled-components"

const StyledHeader = styled.div`
  width: 100%;
  text-align: center;
  padding-top: 15px;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid black;
  background: white;
  img {
    height: 100px;
  }
`

const Header = () => {
  return (
    <StyledHeader>
      <img src="./images/pokelogo.svg" />
      <h2>The OGs</h2>
    </StyledHeader>
  )
}

export default Header
