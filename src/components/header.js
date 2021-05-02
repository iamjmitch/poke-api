import React from "react"
import styled from "styled-components"

const StyledHeader = styled.div`
  width: 100%;
  text-align: center;
  padding-top: 15px;
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
  background: white;
  img {
    height: 100px;
  }
`

const Header = () => {
  return (
    <StyledHeader>
      <img src="./images/pokelogo.svg" />
    </StyledHeader>
  )
}

export default Header
