import styled from 'styled-components'
import React from 'react'

const TotalScore = () => {
  return (
      <ScoreContainter>
        <h1>0</h1>
        <p>Total Score</p>
      </ScoreContainter>
  )
}

export default TotalScore

const ScoreContainter = styled.div`
    max-width: 200px;
    text-align: center;
    h1 {
        font-size: 100px;
        line-height: 100px;
    }
    p {
        font-size: 24px;
        font-weight: 500px;
    }`;
