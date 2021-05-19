import React from "react"
import styled from "styled-components"

const StyledHeader = styled.div`
  width: 100%;
  position: fixed;
  text-align: center;
  padding-top: 15px;
  display: flex;
  flex-direction: row;
  padding-bottom: 20px;
  background: rgb(173, 53, 41);
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #0000005e;
  img {
    height: 50px;
    margin-right: 50px;
  }
  /* mobile */
  @media (max-width: 500px) {
    flex-direction: row;
    background: #ad3529;
    padding-bottom: 15px;
    img {
      height: unset;
      width: 30%;
      margin-right: 10%;
    }
  }

  input {
    width: 94%;
    max-width: 500px;

    text-align: center;
    text-transform: capitalize;
    padding: 5px;
    font-size: 1em;
    border: none;
    border-radius: 23px;
    color: white;
    background: #ffffff6e;
    ::placeholder {
      color: white;
      @media (max-width: 500px) {
        width: 50%;
      }
    }
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
        placeholder="Search Pokedex"
      />
    </StyledHeader>
  )
}

export default Header
