//--dependancies--
import React, { useState, useEffect } from "react"
import styled from "styled-components"

//--components--
import { sortMoves } from "../../helper/functions"
import IndividualMove from "./individualMove"
//--styles--

//--styled-components
const StyledMoveContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  width: 100%;
  max-width: 500px;
  grid-gap: 15px;
  grid-auto-rows: min-content;

  margin-bottom: 15px;

  align-items: center;
  overflow-y: scroll;
  &&::-webkit-scrollbar {
    display: none;
  }
  /* mobile */
  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`

const Moves = ({ moves, tabSize }) => {
  const [movesList, setMovesList] = useState([])
  const [sortedMovesList, setSortedMovesList] = useState([])

  useEffect(() => {
    seperateMoves()
  }, [moves])

  useEffect(() => {
    let temp = movesList.sort(sortMoves)
    setSortedMovesList(temp)
  }, [movesList])

  const seperateMoves = () => {
    let newList = []
    moves.map(move => {
      if (move.version_group_details[0].level_learned_at > 0) {
        let tempNewList = newList.push(move)
      }
    })
    setMovesList(newList)
  }

  return (
    <StyledMoveContainer tabSize={tabSize}>
      {sortedMovesList.map(p => (
        <IndividualMove
          key={p.move.name}
          name={p.move.name}
          url={p.move.url}
          level={p.version_group_details[0].level_learned_at}
        />
      ))}
    </StyledMoveContainer>
  )
}

export default Moves
