import React,{useState} from 'react'

export default function Answers(props) {
  
  const obj={
    backgroundColor:props.select === props.answer? '#D6DBF5' :'#fff',
    borderColor:props.select === props.answer?'#D6DBF5':'#4D5B9E'
  }
  if(props.showScore){
    const [ansObj] = props.allAnswers.filter((item)=>{
      if(item.correctAnswer === props.name){
        return item
      }
    })
    obj.opacity=".8";
    if(ansObj.selectedAnswer === props.answer){
      obj.backgroundColor="#F8BCBC";
      obj.opacity="1";
      obj.borderColor="#F8BCBC"
    }
    if(ansObj.correctAnswer === props.answer){
      obj.backgroundColor="#94D7A2";
      obj.opacity="1";
      obj.borderColor="#94D7A2"
    }
    
  }
  function handleAnswerSelect(){
    props.setSelect(props.answer)
    props.setAllAnswers((a)=>{
      const newAnswer = a.map((item)=>{
        if(item.correctAnswer == props.name){
          item.selectedAnswer = props.answer
        }
        return item;
      })
      return newAnswer
    })
  }
  
  return (
    <>
    <input type="radio" name={props.name} id="radio" /> 
    <div className='answers' onClick={handleAnswerSelect} style={obj}>
    <label htmlFor="radio">{props.answer}</label> 
    </div>
    </>
  )
}
