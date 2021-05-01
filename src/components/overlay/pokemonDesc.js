//--dependancies--
import axios from "axios"
import React, { useState, useContext, useEffect } from "react"
import styled from "styled-components"

//--components--
import { PokemonContext } from "../context/pokemonContext"
import TypeBadge from "./typeBadge"
//--styles--

//--styled-components
const StyledDescContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top-left-radius: 20px;
`
const StyledImgContainer = styled.div`
  margin-top: -275px;
  img {
    height: 350px;
  }
`
const StyledName = styled.div`
  text-transform: capitalize;
  font-size: 3em;
  font-weight: normal;
  padding-bottom: 20px;
  line-height: 1em;
`
const StyledTypeContainer = styled.div`
  padding-bottom: 20px;
  display: flex;
`
const StyledDesc = styled.div`
  width: 50%;
  text-align: center;

  padding-bottom: 30px;
`
String.prototype.toProperCase = function () {
  return this.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  })
}

const Description = ({ pokemonImage, pokemonType, typeColor }) => {
  const { selectedPokemon, setSelectedPokemon } = useContext(PokemonContext)
  const [name, setName] = useState(null)
  const [desc, setDesc] = useState(null)
  const [data, setData] = useState(null)

  const getPokemonData = async () => {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon-species/${selectedPokemon}`
      )
      setData(response.data)
      setName(response.data.name)
      let descNumber = Math.floor(Math.random() * 10)
      setDesc(
        response.data.flavor_text_entries[descNumber]["flavor_text"]
          .replace(/\f/g, " ")
          .toProperCase()
      )
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getPokemonData()
  }, [selectedPokemon])

  return (
    <StyledDescContainer>
      <StyledImgContainer>
        <img src={pokemonImage} />
      </StyledImgContainer>
      <StyledName>{name}</StyledName>
      <StyledTypeContainer>
        {typeof pokemonType !== []
          ? pokemonType.map(pokemon => (
              <TypeBadge typeName={pokemon.type.name} typeColor={typeColor} />
            ))
          : ""}
      </StyledTypeContainer>
      <StyledDesc>{desc}</StyledDesc>
    </StyledDescContainer>
  )
}

export default Description
