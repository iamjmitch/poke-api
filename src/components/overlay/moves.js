//--dependancies--
import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { Link } from "gatsby"

//--components--

//--styles--

//--styled-components

const Moves = ({ moves }) => {
  const [movesList, setMovesList] = useState([])
  const [sortedMovesList, setSortedMovesList] = useState([])

  useEffect(() => {
    seperateMoves()
  }, [moves])

  useEffect(() => {
    let temp = movesList.sort(compare)
    setSortedMovesList(temp)
  }, [movesList])

  const seperateMoves = () => {
    let newList = []
    moves.map(move => {
      if (move.version_group_details[0].level_learned_at > 0) {
        // console.log(typeof movesList)
        let tempNewList = newList.push(move)
      } else {
        console.log("skipped")
      }
    })
    setMovesList(newList)
  }

  const compare = (a, b) => {
    if (
      a.version_group_details[0].level_learned_at <
      b.version_group_details[0].level_learned_at
    ) {
      return -1
    }
    if (a.last_nom > b.last_nom) {
      return 1
    }
    return 0
  }

  //   console.log(movesList)
  console.log(sortedMovesList)
  //   console.log(moves)
  return (
    <div>
      {/* {console.log(typeof sortedMovesList)} */}
      {sortedMovesList.map(p => (
        <div style={{ display: "flex" }}>
          <p style={{ paddingRight: "5px" }}>{p.move.name}</p>
          <p>{p.version_group_details[0].level_learned_at}</p>
        </div>
      ))}
    </div>
  )
}

export default Moves
