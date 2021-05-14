//--dependancies--
import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

//--components--
import IndividualStat from "./individualStat"
//--styles--

//--styled-components
const StyledStat = styled.div`
  width: 100%;
  max-width: 500px;
`

const Stats = ({ statsList, typeColor, tabSize }) => {
  const shortener = word => {
    switch (word) {
      case "hp":
        return "HP"
      case "attack":
        return "ATK"
      case "defense":
        return "DEF"
      case "special-attack":
        return "SATK"
      case "special-defense":
        return "SDEF"
      case "speed":
        return "SPD"
      default:
        return "OTH"
    }
  }

  return (
    <StyledStat tabSize={tabSize}>
      {statsList.map(stat => (
        <IndividualStat
          key={stat.stat.name}
          name={shortener(stat.stat.name)}
          base={stat.base_stat}
          typeColor={typeColor}
        />
      ))}
    </StyledStat>
  )
}

export default Stats
