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
  justify-content: center;
  align-items: center;
  img {
    height: 100px;
  }
  input {
    width: 95%;
    max-width: 500px;
    margin-top: 20px;

    padding: 5px;
  }
`

const Header = ({ setSearch }) => {
  const handleChange = e => {
    setSearch(e.target.value)
  }
  return (
    <StyledHeader>
      <img src="./images/pokelogo.svg" />
      <input
        type="text"
        name="search"
        onChange={e => handleChange(e)}
        placeholder="Search By Name Or Pokedex Number"
      />
    </StyledHeader>
  )
}

export default Header
