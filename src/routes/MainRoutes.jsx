import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from '../components/Layout'
import Categories from '../components/Categories'
import Result from '../components/Result'
import LoadingQuiz from '../components/LoadingQuiz'

const MainRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Layout />} />
            <Route path="/options" element={<Categories />} />
            <Route path="/question/:id" element={<LoadingQuiz/>} />
            <Route path="/result" element={<Result />} />
        </Routes>
    </div>
  )
}

export default MainRoutes