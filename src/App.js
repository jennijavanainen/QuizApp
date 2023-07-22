import { useState, useEffect } from 'react'

import { Routes, Route, useMatch } from 'react-router-dom'
import Navigation from './components/Navigation'
import MainPage from './components/pages/MainPage'
import QuizzesPage from './components/pages/QuizzesPage'
import AdminPage from './components/pages/AdminPage'
import QuizPage from './components/pages/QuizPage'
import Notification from './components/Notification'

import quizService from './services/quizzes'
import loginService from './services/login'
import userService from './services/user'

const App = () => {
  const [quizzes, setQuizzes] = useState([])
  const [users, setUsers] = useState([])
  const [currentUser, setCurrentUser] = useState(null)
  const [info, setInfo] = useState({ message: null })

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
        notifyWith(`Connection error`, 'error')
      })
  }, [])

  const createUser = (username, name, password, onSuccess) => {
    userService.createUser({
      username, name, password
    }).then(newUser => {
      setUsers(users.concat(newUser))
      notifyWith(`New user ${newUser.username} created`)
      onSuccess()
    }).catch(error=> {
      if (error.response && error.response.status === 400) {
        notifyWith(error.response.data.error, 'error')
      } else {
        notifyWith(`Error creating new user: ${error.message}`, 'error')
      }
    })
  }

  const login = (username, password) => {
    loginService.login({
      username, password,
    }).then(user => {
      setCurrentUser(user)
      userService.setUser(user)
      notifyWith(`logged in as ${username}`)
    }).catch(() => {
      notifyWith('wrong username or password', 'error')
    })
  }

  const createQuiz = (quiz) => {
    console.log('saving quiz', quiz)
    quizService.saveQuiz(quiz).then(newQuiz => {
      setQuizzes(quizzes.concat(newQuiz))
      notifyWith(`New quiz ${newQuiz.name} added`)
    }).catch(() => {
      notifyWith('error saving quiz', 'error')
    })
  }

  const deleteQuiz = (quiz) => {
    quizService.deleteQuiz(quiz.id).then(() => {
      setQuizzes(quizzes.filter(q => q.id !== quiz.id))
      notifyWith(`${quiz.name} deleted`)
    }).catch(() => {
      notifyWith('quiz could not be deleted', 'error')
    })

  }

  const notifyWith = (message, type='info') => {
    setInfo({
      message, type
    })

    setTimeout(() => {
      setInfo({ message: null } )
    }, 3000)
  }

  const logout = () => {
    setCurrentUser(null)
    userService.clearUser()
    notifyWith('logged out')
  }

  const quizMatch = useMatch('/quizzes/:id')
  const quizToShow = quizMatch
    ? quizzes.find(quiz => quiz.id === quizMatch.params.id)
    : null

  return (
    <div className='container'>
      <Navigation username={currentUser? currentUser.name : null} logout={logout} />
      <h1 style={{marginBottom:"24px"}}>Quiz App</h1>
      <Notification info={info} />
      <Routes>
        <Route path='/' element={
          <MainPage quizzes={quizzes} />
        }/>
        <Route path='/quizzes' element={
          <QuizzesPage
            quizzes={quizzes}
          />
        }/>
        <Route path='/admin' element={
          <AdminPage
            login={login}
            currentUser={currentUser}
            createUser={createUser}
            createQuiz={createQuiz}
            quizzes={quizzes}
            deleteQuiz={deleteQuiz}
            notifyWith={notifyWith}
          />
        }/>
        {quizToShow && <Route path='/quizzes/:id' element={
          <QuizPage
            quiz={quizToShow}
            notifyWith={notifyWith}
          />}
        />}
      </Routes>

    </div>
  )
}

export default App