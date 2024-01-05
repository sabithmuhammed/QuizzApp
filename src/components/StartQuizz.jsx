import React from 'react'

export default function StartQuizz(props) {
  return (
    <div className='start--quizz'>
        <h1>Quizz App</h1>
        <button onClick={props.handleClick}>Start quizz</button>
    </div>
  )
}
