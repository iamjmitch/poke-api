import axios from "axios"
import React, { useState, useEffect } from "react"
import styled from "styled-components"

const StyledSinglePokemon = styled.div`
  background: white;
  width: 100%
  border: 1px solid black;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;
`

const StyledInnerDiv = styled.div`
  background: ${props => props.bg};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 30px 0;
  img {
    height: 150px;
  }
  p {
    font-size: 20px;
    font-weight: 800;
  }
`

const StyledLoading = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const SinglePokemon = ({ name, url }) => {
  const [pokemon, updatePokemon] = useState([])
  const [isLoading, updateIsLoading] = useState(true)

  useEffect(() => {
    axios.get(`${url}`).then(response => {
      updatePokemon(response.data), updateIsLoading(false)
    })
  }, [])

  String.prototype.toProperCase = function () {
    return this.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    })
  }

  const colorPicker = type => {
    switch (type) {
      case "fire":
        return "red"
      case "water":
        return "blue"
      case "grass":
        return "green"
      case "normal":
        return "brown"
      case "bug":
        return "lightgreen"
      case "electric":
        return "yellow"
      case "posion":
        return "darkgreen"
      case "ground":
        return "lightbrown"
      case "fairy":
        return "pink"
      case "fighting":
        return "orange"
      case "rock":
        return "grey"
      case "ghost":
        return "purple"
      default:
        return "white"
    }
  }

  return (
    <StyledSinglePokemon>
      {console.log(pokemon)}
      {isLoading === false ? (
        <StyledInnerDiv bg={colorPicker(pokemon.types[0].type.name)}>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          <p>{`${pokemon.name.toProperCase()}`}</p>
          <p>{`Type. ${pokemon.types[0].type.name.toProperCase()}`}</p>
        </StyledInnerDiv>
      ) : (
        <StyledLoading>
          <img src="./images/pokeball.png" width="50px" />
          <p>Loading...</p>
        </StyledLoading>
      )}
    </StyledSinglePokemon>
  )
}

export default SinglePokemon
