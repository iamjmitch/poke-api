import React from "react"
import styled from "styled-components"

const StyledHeader = styled.div`
  width: 100%;
  position: fixed;
  text-align: center;
  padding-top: 15px;
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
  background: white;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #0000005e;
  img {
    height: 50px;
  }
  input {
    width: 95%;
    max-width: 500px;
    margin-top: 20px;
    text-align: center;
    text-transform: capitalize;
    padding: 5px;
    font-size: 1em;
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
