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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;
  padding-bottom: 20px;
  min-height: 226px;
`

const StyledInnerDiv = styled.div`
  width: 100%;

  text-align: center;
  display: ${props => (props.loaded == true ? "block" : "none")};
  .sprite {
    height: 120px;
  }
  p {
    font-size: 20px;
    font-weight: 500;
    text-transform: capitalize;
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

const LoadingImage = styled.img`
  width: 30px;
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

  const handleLoad = () => {
    updateimageLoaded(true)
  }

  return (
    <StyledSinglePokemon>
      {imageLoaded == false && (
        <div style={{ textAlign: "center" }}>
          <LoadingImage src="./images/pokeball.png" />
          <p>Releasing...</p>
        </div>
      )}
      {isLoading === false ? (
        <div style={{ width: "100%", textAlign: "center" }}>
          <StyledInnerDiv loaded={imageLoaded}>
            <NumberIcon number={number} types={pokemon.types} />
            <img
              className="sprite"
              src={pokemon.sprites.front_default}
              alt={pokemon.name}
              onLoad={handleLoad}
            />
            <p>{`${pokemon.name}`}</p>
          </StyledInnerDiv>{" "}
        </div>
      ) : (
        ""
      )}
    </StyledSinglePokemon>
  )
}

export default SinglePokemon
