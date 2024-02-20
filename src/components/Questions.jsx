import React, { useState, useEffect } from "react";
import Answers from "./Answers";
import he from "he";

export default function Questions(props) {
  let [answer, setAnswer] = useState([]);
  const [select, setSelect] = useState("");
  useEffect(() => {
    setAnswer(
      shuffle([...props.item.incorrect_answers, props.item.correct_answer])
    );
  }, [props.item]);

  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  return (
    <div className="questions">
      <h3>{he.decode(props.item.question)}</h3>
      <div className="answers--container">
        {answer.map((item, index) => {
          return (
            <Answers
              key={index}
              answer={he.decode(item)}
              name={he.decode(props.item.correct_answer)}
              select={select}
              setSelect={setSelect}
              setAllAnswers ={props.setAllAnswers}
              allAnswers ={props.allAnswers} showScore = {props.showScore}
            />
          );
        })}
      </div>
      <hr />
    </div>
  );
}
