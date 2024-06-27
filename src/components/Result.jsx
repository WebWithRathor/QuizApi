import React from 'react'
import { Link, Outlet } from 'react-router-dom';

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
    <div className='flex p-7 w-full min-h-screen flex-col items-center justify-center gap-6'>
      <img className='w-1/2 '  src="https://cdn-icons-png.flaticon.com/512/9436/9436106.png" alt="" />
      <h1 className='text-center font-semibold'><span className='text-4xl mb-2 inline-block'>Hurray,</span><br/>You have completed the quiz.</h1>
      <div className="row flex gap-4 items-center text-center">
        <div className="rounded-full h-24 flex items-center justify-center shrink-0 aspect-square shadow-inner text-[#283618] shadow-emerald-500/[.3]  bg-emerald-500/[.2] p-4 font-semibold">
          <h1 className='font-semibold'>{Correct} <br/> correct</h1>
        </div>
        <div className="rounded-full h-24 flex items-center justify-center shrink-0 aspect-square shadow-inner text-[#283618] shadow-emerald-500/[.3]  bg-emerald-500/[.2] p-4 font-semibold">
          <h1 className='font-semibold'>{Wrong} <br/> Wrong</h1>
        </div>
        <div className="rounded-full h-24 flex items-center justify-center shrink-0 aspect-square shadow-inner text-[#283618] shadow-emerald-500/[.3]  bg-emerald-500/[.2] p-4 font-semibold">
          <h1 className='font-semibold'>{Correct + Wrong} <br/> Attempt</h1>
        </div>
      </div>
      <div className="btn w-full text-center">
      <Link to='/result/answer'><button className='text-lg py-3 w-[70%] rounded text-white font-semibold bg-[#38a3a5] mb-3'>View Answer!</button></Link>
      <Link to="/"><button className='text-lg py-3 w-[70%] rounded text-white font-semibold bg-[#38a3a5]'>Done !</button></Link>
      </div>
      <Outlet/>
    
    </div>
  )
}

export default Result