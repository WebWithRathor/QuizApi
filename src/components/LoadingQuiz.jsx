import React from 'react'
import { useSelector } from 'react-redux';
import Answers from './Answers';

const LoadingQuiz = () => {
    let ques = useSelector(state => state.questionSlice.User.questions);
    return (
      !ques ? <h1>Loadingggggg...............</h1> : <Answers/>
    )
}

export default LoadingQuiz