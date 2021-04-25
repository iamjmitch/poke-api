import axios from "axios"
import React, { useState, useEffect } from "react"
import styled from "styled-components"

const StyledDisplayAll = styled.div`
  background: #f9f0f0;
  min-height: 100vh;
`

const DisplayAll = () => {
  const [pokeList, updatePokeList] = useState([])

  useEffect(() => {
    // get data from GitHub api
    axios
      .get(`https://pokeapi.co/api/v2/pokemon?limit=151`)
      .then(response => updatePokeList(response.data.results))
  }, [])

  return (
    <StyledDisplayAll>
      {pokeList.map(pokemon => (
        <p>{pokemon.name}</p>
      ))}
    </StyledDisplayAll>
  )
}

export default DisplayAll
