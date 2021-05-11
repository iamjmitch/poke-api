import React from "react"
import styled from "styled-components"

import Header from "./header"
import DisplayAll from "./landing/displayAll"
import GlobalStyle from "../styles/global"

const StyledLayout = styled.div`
  background: #f9f0f0;
  min-height: 100vh;
`

const Layout = () => (
  <StyledLayout>
    <GlobalStyle />
    <Header />
    <DisplayAll />
    <div
      style={{
        width: "100%",
        textAlign: "center",
        padding: "25px 0",
        fontSize: "0.8em",
      }}
    >
      <a
        style={{ textDecoration: "none", textAlign: "center", color: "black" }}
        href="https://dribbble.com/DanielMots"
        rel="noreferrer"
        target="_blank"
      >
        Design By Daniel Motta
      </a>
    </div>
  </StyledLayout>
)

export default Layout
