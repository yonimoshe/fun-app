import React, {useEffect, useState} from 'react';
import { Route,Routes } from 'react-router';
import Question from './components/Question';
import * as api from './api/index';
import Admin from './admin/Admin';
import {useNavigate} from 'react-router-dom';


import './App.css';

function App() {
  const [data, setData] = useState([{
    image: "https://images.hellogiggles.com/uploads/2016/03/25094608/RossDur_Featured.jpg",
    type: "multiple",
    difficulty: "easy",
    question: "?מה היה שמו של הקוף של רוס",
    correct_answer: "מרסל",
    incorrect_answers: ["אסטל","מייקל","קלנקרס"]
  }]);

  const [errors, setErrors] = useState('');

  useEffect(()=> {
    getQuestionsFromServer();
  },[])

  const navigate = useNavigate();

  async function getQuestionsFromServer() {
    try {
      const response = await api.fetchQuestions();
      setData(response.data); 
      } catch (error) {
        console.error(error);
      }  
    }

  const changePathToAdminHandler = () => {
    navigate('/admin')
  }

  return (
    <div className="App">
        <h1 onClick={changePathToAdminHandler}>A</h1>
        <Routes>
          <Route path="/" element={<Question data={data}/>} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
        
    </div>
  );
}

export default App;
