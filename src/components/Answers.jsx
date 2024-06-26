import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updateQuizData } from '../store/actions/questionAction';
import { Link } from 'react-router-dom';


const Answers = () => {
  let userQuiz = useSelector(state => state.questionSlice.User);
  const [incr, setincr] = useState(userQuiz.index || 0);
  let answer = (Object.entries(userQuiz.answers[incr].Answer).filter(([key,value]) => JSON.parse(value)));
  if(answer.length != 0) answer = answer[0][0].substring(0,8);
  const [Answer, setAnswer] = useState(answer || null)
  const dispatch = useDispatch();
  
  const loader = useRef(null);
  useGSAP(()=>{
    gsap.to(loader.current, {
      width: `${(incr/9)*100}%`,
    })
  },[incr])
  
  let answerObject = {}
  const answerHandler = (e)=>{
    setAnswer(e.target.value);
    dispatch(updateQuizData(incr,e.target.value))
  }
  useEffect(()=>{
    if(Answer) dispatch(updateQuizData(incr,answer))
  },[incr])

  return (
    userQuiz && <div className="quiz p-7 pb-20">
      <div className="loader flex items-center gap-3 mb-4">
        <img className='h-10 bg-white/[.5]  rounded-full p-1.5' src="https://cdn-icons-png.flaticon.com/128/553/553416.png" alt="" />
        <div className="loading-wrapper border-2 border-black rounded w-full h-4 p-1">
          <div ref={loader} className={`loader h-full w-0 rounded bg-red-500`}></div>
          </div>
      </div>
      <h1 className='text-xl pl-2 font-semibold'>{incr+1}. {userQuiz.questions[incr].question} </h1>
      <div className="answers pl-2">
        {Object.entries(userQuiz.questions[incr].answers).map(([key, value], i) => {
          return value && <div key={key} className="flex items-center mt-4 border-black rounded border-2 py-3 px-2">
            <input onChange={(e)=>answerHandler(e)} id={`default-radio-${i}`} type="radio" checked={answer.length>0 && key === answer} value={key} name="default-radio" className="w-4 aspect-square  " />
            <label  htmlFor={`default-radio-${i}`} className="ms-2 w-full font-medium text-gray-900">{value}</label>
          </div>
        })}
      </div>
      <div className="btns flex justify-between items-center flex-wrap mt-10">
        <button onClick={()=>{incr!=0 && setincr(incr-1)}} className={`${incr === 0 ? 'opacity-0':''} px-5 py-2 text-[#eff3ee] bg-[#52796f] rounded font-semibold`}><i className='ri-arrow-left-line'></i> Previous</button>
        <button onClick={()=>{incr!=9 && setincr(incr+1)}} className={`${incr === 9 ? 'opacity-0':''} px-5 py-2 text-[#eff3ee] bg-[#52796f] rounded font-semibold`}>Next <i className='ri-arrow-right-line'></i></button>
      </div>
        <Link to='/result'><button className='w-[86%] py-3 fixed bottom-3 left-1/2 -translate-x-1/2 text-[#eff3ee] bg-[#52796f] rounded font-semibold'>Submit</button></Link>
    </div>
  )
}

export default Answers