import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoginScreen from '../Screens/LoginScreen'
import QuizScreen from "../Screens/QuizScreen"
import ResultScreen from "../Screens/ResultScreen"


const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<LoginScreen />} />
                <Route path='/QuizScreen' element={<QuizScreen />} />
                <Route path='/ResultScreen' element={<ResultScreen />} />
            </Routes>
        </Router>
    )
}

export default AppRouter