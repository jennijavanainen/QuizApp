import { useState, useEffect } from 'react'

import { Routes, Route, useMatch } from 'react-router-dom'
import Navigation from './components/Navigation'
import MainPage from './components/MainPage'
import QuizzesPage from './components/QuizzesPage'
import AdminPage from './components/AdminPage'
import Quiz from './components/Quiz'

const initialQuizzes = [
  {
    name: 'Capital City Quiz',
    questions: 10,
    id: 1
  },
  {
    name: 'Animal Quiz',
    questions: 15,
    id: 2
  },
  {
    name: 'Coffee Quiz',
    questions: 20,
    id: 3
  }
]

const App = () => {
  const [quizzes, setQuizzes] = useState([])

  useEffect(() => {
    setQuizzes(initialQuizzes)
  }, [])

  const quizMatch = useMatch('/quizzes/:id')
  const quizToShow = quizMatch
    ? quizzes.find(quiz => quiz.id === Number(quizMatch.params.id))
    : null

  return (
    <div className='container'>
      <Navigation />
      <h1>Quiz App</h1>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/quizzes' element={<QuizzesPage quizzes={quizzes}/>} />
        <Route path='/admin' element={<AdminPage />} />
        <Route path='/quizzes/:id' element={<Quiz quiz={quizToShow} />} />
      </Routes>

    </div>
  )
}

export default App