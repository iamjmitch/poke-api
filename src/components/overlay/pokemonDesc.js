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
  /* mobile */
  @media (max-width: 480px) {
    img {
      height: 200px;
    }
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
  width: 100%;
  text-align: center;
  max-width: 500px;

  padding-bottom: 30px;
`
String.prototype.toProperCase = function () {
  return this.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  })
}

const Description = ({
  name,
  descList,
  pokemonImage,
  pokemonType,
  typeColor,
}) => {
  const { selectedPokemon, setSelectedPokemon } = useContext(PokemonContext)
  const [desc, setDesc] = useState(null)

  useEffect(() => {
    //make sure only pokemon descriptions written in english are returned
    do {
      let descNumber = Math.floor(Math.random() * descList.length)
      if (descList[descNumber]["language"].name == "en") {
        setDesc(
          descList[descNumber]["flavor_text"].replace(/\f/g, " ").toProperCase()
        )
        break
      }
    } while (desc == null)
  }, [descList])

  return (
    <StyledDescContainer>
      <StyledImgContainer>
        <img src={pokemonImage} />
      </StyledImgContainer>
      <StyledName>{name}</StyledName>
      <StyledTypeContainer>
        {typeof pokemonType !== []
          ? pokemonType.map(pokemon => (
              <TypeBadge
                key={pokemon.type.name}
                typeName={pokemon.type.name}
                typeColor={typeColor}
              />
            ))
          : ""}
      </StyledTypeContainer>
      <StyledDesc>{desc}</StyledDesc>
    </StyledDescContainer>
  )
}

export default Description
