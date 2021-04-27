import axios from "axios"
import React, { useState, useEffect } from "react"
import styled from "styled-components"

//--components--
import NumberIcon from "./numberIcon"
//--styled-components

const StyledSinglePokemon = styled.div`
  background: #ece8e826;
  border: 1px solid #00000033;
  border-radius: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;
  height: 260px;
`

const StyledInnerDiv = styled.div`
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  .sprite {
    height: 150px;
  }
  p {
    font-size: 20px;
    font-weight: 500;
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

const SinglePokemon = ({ name, url, number }) => {
  const [pokemon, updatePokemon] = useState([])
  const [isLoading, updateIsLoading] = useState(true)
  const [imageLoaded, updateimageLoaded] = useState(false)

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

  return (
    <StyledSinglePokemon>
      {console.log(pokemon)}
      {isLoading === false ? (
        <StyledInnerDiv>
          <NumberIcon number={number} types={pokemon.types} />
          <img
            className="sprite"
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
          />
          <p>{`${pokemon.name.toProperCase()}`}</p>
        </StyledInnerDiv>
      ) : (
        <StyledLoading>
          <p>Loading...</p>
        </StyledLoading>
      )}
    </StyledSinglePokemon>
  )
}

export default SinglePokemon
