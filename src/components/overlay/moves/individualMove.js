//--dependancies--
import React, { useState, useEffect } from "react"
import styled from "styled-components"

import axios from "axios"

//--components--
import Icon from "../../pokemonCard/icon"
//--styles--

//--styled-components
const StyledMove = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #8080804d;
  width: 100%;

  padding: 10px;
  font-weight: 500;
  text-transform: capitalize;
  &:hover {
    background: #80808010;
  }
`
const StyledTextContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  .smaller {
    font-size: 0.8em;
    color: grey;
  }
`

const IndividualMove = ({ name, level, url }) => {
  const [moveData, setMoveData] = useState("")

  const getMoveData = async () => {
    try {
      const response = await axios.get(`${url}`)
      setMoveData(response.data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getMoveData()
  }, [url])

  return (
    <StyledMove>
      <StyledTextContainer>
        <p>{name.replace(/-/, " ")}</p>
        <p className="smaller">level {level}</p>
      </StyledTextContainer>
      {moveData !== "" && <Icon type={moveData.type.name} />}
    </StyledMove>
  )
}

export default IndividualMove
