import React, { useState, useEffect } from "react";
import Questions from "./Questions";
import he from 'he';
import Loading from "./Loading";

export default function Quizz() {
  const [questions, setQuestions] = useState([]);
  const [allAnswers, setAllAnswers] = useState([]);
  const [showScore,setShowScore] = useState(false);
  const [score,setScore] = useState(0)
  const [newGame,setNewGame] = useState(false)
  const [loading,setLoading] = useState(false)
  useEffect(() => {
    async function getQuestions() {
      setLoading(true)
      const res = await fetch(
        "https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple"
      );
      const data = await res.json();
      setQuestions(data.results);
      (() => {
        const allAnswers = data.results.map((item) => ({
          correctAnswer: he.decode(item.correct_answer),
          selectedAnswer: null,
        }));
        setAllAnswers(allAnswers);
        setLoading(false)
      })();
    }
    getQuestions();
  }, [newGame]);
  function handleShowScore(){
    if(showScore){
      setNewGame(n=>!n)
    }
    setShowScore(ss=>!ss)
    const gainedScore = allAnswers.reduce((acc,item)=>{
      if(item.correctAnswer === item.selectedAnswer){
        acc++;
      }
      return acc;
    },0)
    setScore(gainedScore);
  }
  return (
    <div className="quizz">
     { loading? <Loading></Loading> : <> <div className="questions--container">
        {questions.map((item, index) => {
          return (
            <Questions key={index} item={item} setAllAnswers={setAllAnswers} allAnswers ={allAnswers} showScore = {showScore}/>
          );
        })}
      </div>

      <div className="button--container">
        <h4 className="score">{showScore && `You scored ${score}/5 correct answers`}</h4>
        <button className="button" onClick={handleShowScore}>
          {!showScore ? "Check answers" : "Play again"}
        </button>
      </div> </>}
    </div>
  );
}
