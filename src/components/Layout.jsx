import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import 'remixicon/fonts/remixicon.css'
import { loadQuestion } from '../store/actions/questionAction'
import { Load } from '../store/reducers/questionSlice'

const Layout = () => {
const dispatch = useDispatch();

  return (
    <div className='h-screen relative flex flex-col justify-center items-center p-7'>
      <img className='mix-blend-darken object-contain w-4/5' src="https://www.pngitem.com/pimgs/m/9-90322_quiz-transparent-background-hd-png-download.png" alt="" />
        <h1 className=' text-[#2f3e46] font-bold text-5xl '>CURIO QUIZ</h1>
        <p className=' text-center leading-5 font-semibold w-[90%]  text-[#2f3e46] mt-7 mb-5'>Dive into endless fun with dynamic quizzes! Sharpen your mind and challenge your friends today!</p>
       <Link to='/question/random' onClick={()=>dispatch(loadQuestion('random'))} className='w-full'><button className='w-full px-5 text-lg font-semibold mb-3 py-3 border-2 border-[#283618] text-[#283618]  rounded-lg'>Random Quiz</button></Link>
       <Link to='/options' className='w-full'><button className='w-full px-5 text-lg font-semibold py-3 border-2 border-[#283618] text-[#283618] flex gap-1 items-center justify-center rounded-lg'>All Categories <i className='ri-arrow-right-s-line font-black text-lg'></i></button></Link>
    </div>
  )
}

export default Layout