import React from "react"
import styled from "styled-components"

import Header from "./header"
import DisplayAll from "./displayAll"

const StyledLayout = styled.div`
  background: #f9f0f0;
  min-height: 100vh;
`

const Layout = () => (
  <StyledLayout>
    <Header />
    <DisplayAll />
  </StyledLayout>
)

export default Layout
