//--dependancies--
import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

//--components--
import { arrow, trade } from "../../../../static/images/evoArrow"
//--styles--

//--styled-components

export const arrowSelector = arrowName => {
  console.log(arrowName)
  switch (arrowName) {
    case "trade":
      return trade
    default:
      return arrow
  }
}
