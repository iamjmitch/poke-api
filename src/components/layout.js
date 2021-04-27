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
  </StyledLayout>
)

export default Layout
