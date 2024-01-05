import React, { useState, useEffect } from "react";
import Questions from "./Questions";

export default function Quizz() {
  const [questions, setQuestions] = useState([]);
  const [allAnswers,setAllAnswers]=useState([])

  useEffect(() => {
    async function getQuestions() {
      const res = await fetch(
        "https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple"
      );
      const data = await res.json();
      setQuestions(data.results)
      console.log(data.results);
    }
    getQuestions();
  }, []);
  return (
    <div className="quizz">
      <div className="questions--container">
        {questions.map((item,index)=>{
          return <Questions key={index}
                  item={item}
          />
        })}
      </div>

      <div className="button--container">
        <h4 className="score">
          {!true && `You scored ${3}/5 correct answers`}
        </h4>
        <button className="button">
          {true ? "Check answers" : "Play again"}
        </button>
      </div>
    </div>
  );
}
