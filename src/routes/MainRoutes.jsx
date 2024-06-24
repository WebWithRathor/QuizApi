import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from '../components/Layout'
import Categories from '../components/Categories'
import Questions from '../components/Questions'

const MainRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Layout />} />
            <Route path="/options" element={<Categories />} />
            <Route path="/question/:id" element={<Questions />} />
        </Routes>
    </div>
  )
}

export default MainRoutes