import React,{useState} from 'react'

export default function Answers(props) {
  const [select,setSelect]=useState(false);
  const obj={
    backgroundColor:select? '#D6DBF5' :'#fff'
  }
  return (
    <>
    <input type="radio" name={props.name} id="radio" /> 
    <div className='answers' onClick={()=>{setSelect(prevSelect=>!prevSelect)}} style={obj}>
    <label htmlFor="radio">{props.answer}</label> 
    </div>
    </>
  )
}
