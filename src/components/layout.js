import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { Helmet } from "react-helmet"
import Header from "./header"
import DisplayAll from "./landing/displayAll"
import GlobalStyle from "../styles/global"

const StyledLayout = styled.div`
  background: #f9f0f0;
  height: 100vh;
  background: white;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: ${props => (props.toggled == true ? "fixed" : "unset")};
  padding-right: ${props => (props.toggled == true ? "17px" : "0px")};
  top: ${props =>
    props.toggled == true ? "-" + props.saveScroll + "px" : "unset"};
  .footer {
    width: 100%;
    text-align: center;
    padding: 25px 0;
    font-size: 0.8em;
    background: white;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
`

const Layout = () => {
  const [showOverlay, toggleOverlay] = useState(false)
  const [windowScroll, setWindowScroll] = useState(0)
  const [saveScroll, setSaveScroll] = useState(0)
  const [searchQuery, setSearch] = useState("")

  useEffect(() => {
    if (typeof window !== `undefined`) {
      window.onscroll = () => {
        setWindowScroll(window.scrollY)
      }
    }
  }, [])

  const handleOverlay = () => {
    if (showOverlay == false) {
      setSaveScroll(windowScroll)
      toggleOverlay(true)
    } else {
      if (typeof window !== `undefined`) {
        toggleOverlay(false)
      }
    }
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (showOverlay === false) {
        window.scrollTo(0, saveScroll)
      }
    }
  }, [showOverlay])

  return (
    <StyledLayout toggled={showOverlay} saveScroll={saveScroll}>
      <Helmet title="Pokedex" defer={false} />
      <GlobalStyle />
      <Header setSearch={setSearch} />
      <DisplayAll
        showOverlay={showOverlay}
        toggleOverlay={handleOverlay}
        searchQuery={searchQuery}
      />
      <div className="footer">
        <a href="https://iamjmitch.com" target="_blank">
          <svg
            width="171"
            height="10"
            viewBox="0 0 171 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.368 9H3.788C6.476 9 8.288 7.272 8.288 4.8C8.288 2.328 6.476 0.599999 3.788 0.599999H0.368V9ZM1.256 8.232V1.368H3.74C5.972 1.368 7.412 2.784 7.412 4.8C7.412 6.816 5.972 8.232 3.74 8.232H1.256ZM11.1701 8.232V5.112H15.5141V4.356H11.1701V1.368H16.0421V0.599999H10.2821V9H16.2221V8.232H11.1701ZM24.2762 0.599999L21.0362 7.896L17.8202 0.599999H16.8602L20.5802 9H21.4562L25.1762 0.599999H24.2762ZM27.2833 8.232V5.112H31.6273V4.356H27.2833V1.368H32.1553V0.599999H26.3953V9H32.3353V8.232H27.2833ZM34.4227 9H40.0147V8.232H35.3107V0.599999H34.4227V9ZM44.997 9.072C47.517 9.072 49.401 7.26 49.401 4.8C49.401 2.34 47.517 0.528 44.997 0.528C42.453 0.528 40.581 2.352 40.581 4.8C40.581 7.248 42.453 9.072 44.997 9.072ZM44.997 8.28C42.969 8.28 41.457 6.804 41.457 4.8C41.457 2.796 42.969 1.32 44.997 1.32C47.013 1.32 48.513 2.796 48.513 4.8C48.513 6.804 47.013 8.28 44.997 8.28ZM54.5354 0.599999H51.3914V9H52.2794V6.348H54.5354C56.6714 6.348 57.9674 5.268 57.9674 3.48C57.9674 1.68 56.6714 0.599999 54.5354 0.599999ZM54.5114 5.568H52.2794V1.368H54.5114C56.1914 1.368 57.0794 2.136 57.0794 3.48C57.0794 4.8 56.1914 5.568 54.5114 5.568ZM60.7755 8.232V5.112H65.1195V4.356H60.7755V1.368H65.6475V0.599999H59.8875V9H65.8275V8.232H60.7755ZM67.9149 9H71.3349C74.0229 9 75.8349 7.272 75.8349 4.8C75.8349 2.328 74.0229 0.599999 71.3349 0.599999H67.9149V9ZM68.8029 8.232V1.368H71.2869C73.5189 1.368 74.9589 2.784 74.9589 4.8C74.9589 6.816 73.5189 8.232 71.2869 8.232H68.8029ZM86.2616 4.668C87.0296 4.356 87.5456 3.72 87.5456 2.76C87.5456 1.392 86.4656 0.599999 84.5936 0.599999H80.9696V9H84.8336C86.9336 9 87.9896 8.184 87.9896 6.756C87.9896 5.616 87.3416 4.908 86.2616 4.668ZM84.5336 1.332C85.8776 1.332 86.6576 1.848 86.6576 2.856C86.6576 3.864 85.8776 4.38 84.5336 4.38H81.8576V1.332H84.5336ZM84.8216 8.268H81.8576V5.112H84.8216C86.2976 5.112 87.1016 5.592 87.1016 6.684C87.1016 7.788 86.2976 8.268 84.8216 8.268ZM96.0807 0.599999H95.1927L92.3127 5.316L89.4327 0.599999H88.4847L91.8447 6.096V9H92.7207V6.096L96.0807 0.599999ZM100.598 9H101.486V0.599999H100.598V9ZM110.496 9H111.432L107.592 0.599999H106.716L102.876 9H103.8L104.808 6.756H109.488L110.496 9ZM105.132 6.036L107.148 1.524L109.164 6.036H105.132ZM120.813 0.599999L117.201 6.828L113.553 0.599999H112.821V9H113.673V2.316L116.973 7.932H117.393L120.693 2.28V9H121.545V0.599999H120.813Z"
              fill="black"
            />
            <path
              d="M125.676 9.168C127.788 9.168 128.916 8.088 128.916 5.904V0.599999H123.66V2.436H126.564V6.048C126.564 6.852 126.192 7.272 125.508 7.272C124.968 7.272 124.5 6.972 124.056 6.396L122.76 7.932C123.408 8.736 124.452 9.168 125.676 9.168ZM140.288 9L140.264 0.599999H138.308L135.428 5.448L132.476 0.599999H130.52V9H132.716V4.668L134.864 8.172H135.92L138.08 4.548L138.104 9H140.288ZM141.969 9H144.345V0.599999H141.969V9ZM147.823 9H150.199V2.484H152.767V0.599999H145.243V2.484H147.823V9ZM157.723 9.168C159.271 9.168 160.519 8.604 161.335 7.584L159.823 6.216C159.295 6.852 158.647 7.2 157.843 7.2C156.463 7.2 155.503 6.24 155.503 4.8C155.503 3.36 156.463 2.4 157.843 2.4C158.647 2.4 159.295 2.748 159.823 3.384L161.335 2.016C160.519 0.995999 159.271 0.431999 157.723 0.431999C155.059 0.431999 153.103 2.244 153.103 4.8C153.103 7.356 155.059 9.168 157.723 9.168ZM168.011 0.599999V3.756H164.771V0.599999H162.395V9H164.771V5.724H168.011V9H170.387V0.599999H168.011Z"
              fill="black"
            />
          </svg>
        </a>

        <br></br>
        <a
          style={{
            textDecoration: "none",
            textAlign: "center",
            color: "black",
            background: "white",
          }}
          href="https://dribbble.com/DanielMots"
          rel="noreferrer"
          target="_blank"
        >
          UI Designed Inspired From Daniel Motta
        </a>
      </div>
    </StyledLayout>
  )
}

export default Layout
