//--dependancies--
import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

//--components--

//--styles--

//--styled-components

export const getStone = item => {
  const imgLink = "../images/stones/" + item.replace(" ", "") + ".png"
  return <img className="stone" src={imgLink} alt={item} />
}
