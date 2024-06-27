import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const ResultAnswer = () => {
    const answer = useSelector(state => state.questionSlice.User);
    if (answer.questions) {

    }
    return <div className="pt-10 text-[#283618]">
        <Link to='/result' className='text-md font-semibold -ml-1'><i className='ri-arrow-left-s-line'></i>Close Answer</Link>
        <h1 className='capitalize font-bold text-3xl mt-2 mb-5'>Answers</h1>

        {answer.questions.map((e, i) => {
            return <div key={i} className="mb-6 shadow-inner  shadow-emerald-500/[.3]  bg-emerald-500/[.1]  p-3 rounded">
                <h1 className='font-semibold text-lg'>{i + 1}. {e.question}</h1>
                <h1 className='font-semibold mt-2'>Ans. {e.answers[e.correct_answer]}</h1>
            </div>
        })}
    </div>
}

export default ResultAnswer