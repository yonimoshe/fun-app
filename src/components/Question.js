import React, {useState, useRef} from 'react';
import shuffle from '../functions/shuffle';
// import data from '../data.json';
import Answers from './Answers';

import './Question.css';

function Question(props) {
    const  index= useRef(0);
    const [correctAnswerState,setCorrectAnswerState] = useState("מרסל");
    
    const questions_arr = props.data;
    let question = questions_arr[index.current].question;
    let incorrect_arr = questions_arr[index.current ? index.current : 0].incorrect_answers
    let correct = questions_arr[index.current ? index.current : 0].correct_answer
 
    const handleAnswer = (chosen_answer) => {
        if (chosen_answer === correctAnswerState) {
            console.log("correct!");
        }
        if (chosen_answer !== correctAnswerState) {
            console.log("incorrect...");
        }

        index.current = index.current + 1;
        console.log(index.current);
        setTimeout(() => {
            setCorrectAnswerState(questions_arr[index.current].correct_answer)
        }, 3000);
    }

    let array_of_arrays = questions_arr.map( el => {
        let current_answers_arr = []
        let shuffled_answers = []
        let answer_1,answer_2,answer_3,answer_4;

        answer_1 = <button 
        key="1"
        value={el.correct_answer} 
        className={"before-click"}
        onClick={(e) => handleAnswer(e.target.value)}>{correct}</button> 

        answer_2 = <button 
        key="2"
        value={incorrect_arr[0]} 
        className="before-click"
        onClick={(e) => handleAnswer(e.target.value)}>{incorrect_arr[0]}</button>

        answer_3 = <button 
        key="3"
        value={incorrect_arr[1]} 
        className="before-click"
        onClick={(e) => handleAnswer(e.target.value)}>{incorrect_arr[1]}</button>

        answer_4 = <button 
        key="4"
        value={incorrect_arr[2]} 
        className="before-click"
        onClick={(e) => handleAnswer(e.target.value)}>{incorrect_arr[2]}</button>
        
        current_answers_arr.push(answer_1) 
        current_answers_arr.push(answer_2)           
        current_answers_arr.push(answer_3) 
        current_answers_arr.push(answer_4) 

        shuffled_answers = shuffle(current_answers_arr);
        return shuffled_answers;
    });

    let ui = <>
              <img className="photo" src={questions_arr[index.current ? index.current : 0].image} alt="ross" width="80%" height="250px" />
               <h2>{question}</h2>
                <Answers 
                 answers={array_of_arrays[index.current]} 
                 correct={correct}
                        />
             </>

    if (index.current===2) 
        ui = <>
              <div className="end-container">
                <p>"Tanks for playing"</p> 
                <button onClick={() => window.location.reload()}>Play Again</button>
              </div>
             </>
    
    return ui 
}

export default Question;