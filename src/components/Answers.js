import React ,{useState,useEffect,useRef} from 'react';

import './Answers.css';

function Answers(props) {
    const [isChosed, setIsChosed] = useState(false);
    const [ansWithIncorrectState, setAnsWithIncorrectState] = useState();
    const wrong_answers = useRef(0);
    
    useEffect(() => {
            setIsChosed(false)      
            setAnsWithIncorrectState(null)     
    },[props.answers])

    let ans = props.answers.map(el => el);
    let ans2 = props.answers.map(el => el);
    let correct_answer = <button 
                            key="1"
                            value="מרסל"
                            className="correct-click"
                            >{props.correct}</button> 

    let objIndex = props.answers.findIndex((obj => obj.key == 1));       
    ans2[objIndex] = correct_answer   
     
    const handleSolution = (e) => {  
        let chosen_answer = e.value; 
        let chosen_answer_objIndex = props.answers.findIndex((obj => obj.props.value == chosen_answer));
        let wrong_answer = <button 
                                key={props.answers[chosen_answer_objIndex].key}
                                value={chosen_answer}
                                className="incorrect-click"
                                >{chosen_answer}</button>

        if (chosen_answer != props.correct) {
            wrong_answers.current++
            ans2[chosen_answer_objIndex] = wrong_answer
            setAnsWithIncorrectState(ans2) 
            console.log(ans2);
        }                        
        setIsChosed(true);
    }
    
    if (ansWithIncorrectState) {
        ans2 = ansWithIncorrectState; 
    }
    
    console.log('number of mistaks is:', wrong_answers.current);
    return (
        <div onClick={(e)=>handleSolution(e.target)} className="answers-container">
           {isChosed ? ans2 : ans}
        </div>
    );
}

export default Answers;