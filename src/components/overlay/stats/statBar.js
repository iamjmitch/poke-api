//--dependancies--
import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { Link } from "gatsby"

//--components--

//--styles--

//--styled-components
const StyledOuter = styled.div`
  height: 10px;
  width: 100%;
  background: #4e4b4b;
  border-radius: 50px;
  overflow: hidden;
`
const StyledInner = styled.div`
  width: ${props => props.percent}%;
  height: 100%;
  background: ${props => props.color};

  /* background: orange; */
`

const StatBar = ({ base, typeColor }) => {
  const [percent, setPercent] = useState(0)

  useEffect(() => {
    let perc = base * 0.4
    setPercent(perc)
  }, [base])

  return (
    <StyledOuter>
      <StyledInner percent={percent} color={typeColor} />
    </StyledOuter>
  )
}

export default StatBar
