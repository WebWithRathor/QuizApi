import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { loadQuestion } from '../store/actions/questionAction'

const Categories = () => {
  const dispatch=useDispatch()
  return (
    <div className=' p-7 text-[#2f3e46]'>
      <Link to='/' className='text-md font-semibold -ml-1'><i className='ri-arrow-left-s-line'></i>Back</Link>
      <h1 className='capitalize font-bold text-3xl mt-2 mb-5'>Select the Optimal Quiz to Evaluate Your Knowledge !</h1>
      <div className="majors flex overflow-x-auto gap-5 pr-3 pb-1 h-[16vh] sm:h-[23vh]">
        <Link to='/question/code' onClick={()=>dispatch(loadQuestion('code'))} className='h-full'><div className="h-full category1 w-[30vw] sm:w-[15vw]  shrink-0 rounded-lg  flex items-center justify-center flex-col gap-1 shadow-[inset_2px_2px_3px,0px_0px_2px] shadow-[#38a3a5] ">
          <img className='object-contain w-1/3' src="https://cdn-icons-png.flaticon.com/128/6062/6062646.png" alt="" />
          <h1 className='font-semibold text-lg'>Code</h1>
        </div></Link>
      </div>
      <div className="Recommended">
        <h1 className='font-semibold mt-4 text-lg mb-3'>Suggestions -</h1>
        <div className="suggested flex-col flex gap-4">
          <div className="w-full py-4  shadow-[inset_1px_1px_4px] shadow-[#38a3a5] transition-shadow hover:shadow-md hover:shadow-[#38a3a5ac] flex justify-between items-center px-3 rounded-lg">
            <h1 className='font-semibold'>Javascript</h1>
            <i className="ri-arrow-right-s-line"></i>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Categories