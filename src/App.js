import "./App.css";
import Quizz from "./components/Quizz";
import StartQuizz from "./components/StartQuizz";
import { useState } from "react";

 function App() {
  const [newQuizz,setNewQuizz]=useState(true);
  const startNewQuizz=()=>{
    setNewQuizz(prevQuizz=>!prevQuizz)
  }
  
  return (
    <div className="container">
      {newQuizz ? <StartQuizz handleClick={startNewQuizz} /> : <Quizz />}
      
    </div>
  );
}

export default App;
