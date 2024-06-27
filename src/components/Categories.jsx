import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { loadQuestion } from '../store/actions/questionAction'

const Categories = () => {
  const dispatch = useDispatch();

  const initialCategories = [
    { category: 'devops', image: "https://cdn-icons-png.flaticon.com/512/5680/5680036.png" },
    { category: 'sql', image: "https://cdn-icons-png.flaticon.com/512/4248/4248443.png" },
    { category: 'code', tag: 'javascript', image: "https://cdn-icons-png.flaticon.com/512/541/541509.png " },
    { category: 'cms', image: "https://cdn-icons-png.flaticon.com/512/6578/6578914.png" },
    { category: 'bash', image: "https://cdn-icons-png.flaticon.com/512/919/919837.png" },
    { category: 'docker', image: "https://cdn-icons-png.flaticon.com/512/919/919853.png" },
    { category: 'linux', image: "https://cdn-icons-png.flaticon.com/512/518/518713.png" },
    { category: 'code', tag: 'html', image: "https://cdn-icons-png.flaticon.com/128/919/919827.png" },
    { category: 'code', tag: 'php', image: "https://cdn-icons-png.flaticon.com/512/15457/15457933.png" },
  ];

  return (
    <div className=' p-7 text-[#2f3e46]'>
      <Link to='/' className='text-md font-semibold -ml-1'><i className='ri-arrow-left-s-line'></i>Back</Link>
      <h1 className='capitalize font-bold text-3xl mt-2 mb-5'>Select the Optimal Quiz to Evaluate Your Knowledge !</h1>
      <div className="Recommended">
        <div className="suggested flex-col flex gap-6">
          {initialCategories.map((e,i) => {
            return <Link onClick={()=>dispatch(loadQuestion(e.category,e.tag))} key={i} to={`/question/${e.category}`}><div  className="w-full py-4  shadow-[inset_1px_1px_4px] bg-emerald-600/[.1] shadow-[#38a3a5] transition-shadow hover:shadow-md hover:shadow-[#38a3a5ac] flex justify-center gap-5 items-center px-3 rounded-lg">
            <img className='h-16 ' src={e.image} alt="" />
            <div className="logo items-center flex gap-3">
            <h1 className='capitalize font-semibold text-xl'>{e.category}</h1>
            <i className="ri-arrow-right-s-line text-xl"></i>
            </div>
          </div></Link>
          })}
        </div>
      </div>
    </div>
  )
}

export default Categories