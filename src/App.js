import { useState, useEffect } from 'react'

import { Routes, Route, useMatch } from 'react-router-dom'
import Navigation from './components/Navigation'
import MainPage from './components/MainPage'
import QuizzesPage from './components/QuizzesPage'
import AdminPage from './components/AdminPage'
import QuizPage from './components/QuizPage'

import quizService from './services/quizzes'
import loginService from './services/login'
import userService from './services/user'

const App = () => {
  const [quizzes, setQuizzes] = useState([])
  const [users, setUsers] = useState([])
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    userService.getAll().then(allUsers =>
      setUsers(allUsers)
    )
  }, [])

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

  const createUser = (username, name, password) => {
    userService.createUser({
      username, name, password
    }).then(newUser => {
      setUsers(users.concat(newUser))
      console.log(`${newUser.name} created`)
    }).catch(() => {
      console.log('username already exists')
    })
  }

  const login = (username, password) => {
    loginService.login({
      username, password,
    }).then(user => {
      setCurrentUser(user)
      userService.setUser(user)
      console.log(`${user.name} logged in`)
    }).catch(() => {
      console.log('wrong username/password')
    })
  }

  const logout = () => {
    setCurrentUser(null)
    userService.clearUser()
  }

  const quizMatch = useMatch('/quizzes/:id')
  const quizToShow = quizMatch
    ? quizzes.find(quiz => quiz.id === quizMatch.params.id)
    : null

  return (
    <div className='container'>
      <Navigation username={currentUser? currentUser.name : null} logout={logout} />
      <h1>Quiz App</h1>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/quizzes' element={<QuizzesPage quizzes={quizzes}/>} />
        <Route path='/admin' element={<AdminPage login={login} currentUser={currentUser} createUser={createUser} />} />
        {quizToShow && <Route path='/quizzes/:id' element={<QuizPage quiz={quizToShow} />} />}
      </Routes>

    </div>
  )
}

export default App