//--dependancies--
import React, { useState, useEffect } from "react"
import styled from "styled-components"

//--components--
import { sortMoves } from "../../helper/functions"
import IndividualMove from "./individualMove"
//--styles--

//--styled-components
const StyledMoveContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  align-items: center;
  overflow-y: scroll;
  &&::-webkit-scrollbar {
    display: none;
  }
`

const Moves = ({ moves }) => {
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
        // console.log(typeof movesList)
        let tempNewList = newList.push(move)
      }
    })
    setMovesList(newList)
  }

  return (
    <StyledMoveContainer>
      {sortedMovesList.map(p => (
        <IndividualMove
          name={p.move.name}
          url={p.move.url}
          level={p.version_group_details[0].level_learned_at}
        />
      ))}
    </StyledMoveContainer>
  )
}

export default Moves