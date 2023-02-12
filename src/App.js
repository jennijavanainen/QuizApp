import { useState, useEffect } from 'react'

import { Routes, Route, useMatch } from 'react-router-dom'
import Navigation from './components/Navigation'
import MainPage from './components/MainPage'
import QuizzesPage from './components/QuizzesPage'
import AdminPage from './components/AdminPage'
import QuizPage from './components/QuizPage'
import quizService from './services/quizzes'

const App = () => {
  const [quizzes, setQuizzes] = useState([])

  useEffect(() => {
    quizService
      .getAll()
      .then(initialQuizzes => {
        setQuizzes(initialQuizzes)
      })
      .catch(error => {
        console.log("error", error)
      })
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
        {quizToShow && <Route path='/quizzes/:id' element={<QuizPage quiz={quizToShow} />} />}
      </Routes>

    </div>
  )
}

export default App