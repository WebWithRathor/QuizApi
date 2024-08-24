import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import 'remixicon/fonts/remixicon.css'
import { loadQuestion } from '../store/actions/questionAction'

const Layout = () => {
  let ques = useSelector(state => state.questionSlice)
const dispatch = useDispatch();

  return (
    <div className='h-screen relative flex flex-col justify-center items-center p-7'>
      <img className='mix-blend-darken object-contain w-4/5 md:w-2/5' src="https://www.pngitem.com/pimgs/m/9-90322_quiz-transparent-background-hd-png-download.png" alt="" />
        <h1 className=' text-[#2f3e46] font-bold text-5xl '>CURIO QUIZ</h1>
        <p className=' text-center leading-5 font-semibold w-[90%] md:w-[40%]  text-[#2f3e46] mt-7 mb-5'>Dive into endless fun with dynamic quizzes! Sharpen your mind and challenge your friends today!</p>
       <Link to='/question/random' onClick={()=>dispatch(loadQuestion('random'))} className='w-full md:w-1/3'><button className='w-full px-5 text-lg font-semibold mb-3 py-2 border-2 border-[#283618] text-[#283618] flex items-center justify-center rounded-lg gap-1 flex-row-reverse'><img className='h-10' src="https://cdn-icons-png.flaticon.com/128/2619/2619273.png" alt="" /> Random Quiz</button></Link>
       <Link to='/options' className='w-full'><button className='w-full md:w-1/3 mx-auto px-5 text-lg font-semibold py-3 border-2 border-[#283618] text-[#283618] flex gap-1 items-center justify-center rounded-lg'>All Categories <i className='ri-arrow-right-s-line font-black text-lg'></i></button></Link>
    </div>
  )
}

export default Layout