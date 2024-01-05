import React,{useState,useEffect} from 'react'
import Answers from './Answers'

export default function Questions(props) {
  let  [answer,setAnswer]=useState([])
  useEffect(()=>{
     setAnswer(shuffle([...props.item.incorrect_answers,props.item.correct_answer]))
    
  },[props.item])

  const shuffle = (array) => { 
    for (let i = array.length - 1; i > 0; i--) { 
      const j = Math.floor(Math.random() * (i + 1)); 
      [array[i], array[j]] = [array[j], array[i]]; 
    } 
    return array; 
  }; 
  
  console.log(answer);
  return (
    <div className='questions'>
        <h3>{props.item.question}</h3>
        <div className="answers--container">
        {answer.map((item,index)=>{
          return <Answers 
          key={index}
          answer={item}
          name={props.item.correct_answer}
           />
        })}
        </div>
        <hr/>
    </div>
  )
}
