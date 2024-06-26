import React from 'react'

const Result = () => {
    let Correct =0  , Wrong = 0;
    const result =JSON.parse( localStorage.getItem('Quiz'))
    for(let i = 0 ; i<result.questions.length;i++){
            if(result.answers[i].Answer){
                
                if(JSON.stringify(result.answers[i].Answer) === JSON.stringify(result.questions[i].correct_answers)  )Correct++;
                else Wrong++;
            }
    }
 
  return (
    <div>Result correct : {Correct} and Wrong :{Wrong} , Attempted : {Correct+Wrong}</div>
  )
}

export default Result