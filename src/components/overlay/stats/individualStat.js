//--dependancies--
import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

//--components--
import StatBar from "./statBar"
//--styles--

//--styled-components
const StyledStat = styled.div`
  display: grid;
  grid-template-columns: 50px 50px 1fr min-content;
  justify-content: center;
  align-items: center;
`
const StatName = styled.div`
  font-weight: 700;
  color: ${props => props.color};
  text-align: right;
`
const Statnumber = styled.div`
  font-weight: 600;
  text-align: center;
`

const IndividualStat = ({ name, base, typeColor }) => {
  return (
    <StyledStat>
      <StatName color={typeColor}>{name}</StatName>
      <Statnumber>{base}</Statnumber>
      <StatBar typeColor={typeColor} base={base} />
    </StyledStat>
  )
}

export default IndividualStat
