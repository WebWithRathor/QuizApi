import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from '../components/Layout'
import Categories from '../components/Categories'
import Result from '../components/Result'
import LoadingQuiz from '../components/LoadingQuiz'
import ResultAnswer from '../components/ResultAnswer'


const MainRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Layout />} />
            <Route path="/options" element={<Categories />} />
            <Route path="/question/:id" element={<LoadingQuiz/>} />
            <Route path="/result" element={<Result />} >
              <Route path='answer' element={<ResultAnswer/>} />
            </Route>
            <Route path="/answer" element={<ResultAnswer/>} />
        </Routes>
    </div>
  )
}

export default MainRoutes