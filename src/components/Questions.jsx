import React, { useEffect, useState } from 'react'
import Axios from '../utils/axios'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import {questionSlice} from '../store/reducers/questionSlice'


const Questions = () => {
  let ques = useSelector(state=>state.questionSlice.Questions)
  const [incr,setincr] = useState(0)
  if(ques.length === 0){
    ques = JSON.parse(localStorage.getItem('Quiz')).questions;
    console.log(ques[0].answers.answer_a);
  }

  return (
     ques.length === 0 ? <h1>Loadingggggg...............</h1> : ques.map((question,i)=> {
      return <div key={i}>
        <h1>{i+1} ---{question.question}</h1>
        <h1>{question.question.answers}</h1>
      </div>
     })
      
  )
}

export default Questions