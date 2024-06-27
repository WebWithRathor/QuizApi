import React from 'react'
import { useSelector } from 'react-redux';
import Answers from './Answers';

const LoadingQuiz = () => {
    let ques = useSelector(state => state.questionSlice.User.questions);
    return (
      !ques ?
      <div className="loading p-7">
        <div className="h-40 mb-10 animate-pulse w-full bg-gray-500"></div>
        <div className="h-8 mt-4 animate-pulse w-full bg-gray-500"></div>
        <div className="h-8 mt-4 animate-pulse w-full bg-gray-500"></div>
        <div className="h-8 mt-4 animate-pulse w-full bg-gray-500"></div>
        <div className="h-8 mt-4 animate-pulse w-full bg-gray-500"></div>
        <div className="h-8 mt-4 animate-pulse w-full bg-gray-500"></div>
      </div> : <Answers/>
    )
}

export default LoadingQuiz