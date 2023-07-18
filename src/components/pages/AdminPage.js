import LoginForm from '../LoginForm'
import CreateUserForm from '../CreateUserForm'
import { useEffect, useState } from 'react'
import CreateNewQuizForm from '../newQuizCreation/CreateNewQuizForm'
import { Button } from 'react-bootstrap'
import jwt_decode from 'jwt-decode'

const AdminPage = ({login, createUser, currentUser, createQuiz, quizzes}) => {
  const [showCreateUserForm, setShowCreateUserForm] = useState(false)
  const [showQuizzes, setShowQuizzes] = useState(false)
  const [showQuizCreationForm, setShowQuizCreationForm] = useState(false)
  const [showMainAdmin, setShowMainAdmin] = useState(true)
  const [quizzesByUser, setQuizzesByUser] = useState([])

  useEffect(() => {
    if (currentUser.token) {
      const decodedToken = jwt_decode(currentUser.token);
      const filteredQuizzes = quizzes.filter(quiz => quiz.creator === decodedToken.id);
      setQuizzesByUser(filteredQuizzes);
    }
  },[quizzes, currentUser])


  const handleCreateUserForm = () => {
    setShowCreateUserForm(!showCreateUserForm)
  }

  const handleQuizzesVisibility = () => {
    setShowQuizzes(true)
    setShowMainAdmin(false)
  }

  const handleNewQuizVisibility = () => {
    setShowQuizCreationForm(true)
    setShowMainAdmin(false)
  }

  const handleBackToAdminPage = () => {
    setShowQuizCreationForm(false)
    setShowQuizzes(false)
    setShowMainAdmin(true)
  }

  return (
    <div>
      {!currentUser && <div>
        {!showCreateUserForm && <h4><em>log in to manage quizzes or{' '}
          <span onClick={handleCreateUserForm} style={{cursor: 'pointer', color: 'blue', textDecoration: 'underline'}}>
          sign up
        </span>
        </em></h4>}
        {showCreateUserForm ?
          (<CreateUserForm createUser={createUser} showLogin={handleCreateUserForm}/>) :
          (<LoginForm login={login}/>)}
      </div>}

      {currentUser &&
        <div>
          {showMainAdmin && <div>
            <h4 style={{marginTop:"16px"}}>Welcome {currentUser.name}!</h4>
            <Button onClick={handleQuizzesVisibility} variant='primary' style={{marginTop:"16px", marginBottom:"32px"}}>
              Manage your quizzes
            </Button>{'  '}
            <Button onClick={handleNewQuizVisibility} variant='primary' style={{marginTop:"16px", marginBottom:"32px"}}>
              Create new quiz
            </Button>
          </div>
          }
          {!showMainAdmin &&
            <Button onClick={handleBackToAdminPage} variant='primary' style={{marginTop:"16px", marginBottom:"32px"}}>
              Back to admin page
            </Button>
          }
          {showQuizCreationForm && <div>
            <CreateNewQuizForm createQuiz={createQuiz} currentUser={currentUser} />
          </div>
          }
          {showQuizzes && <div>
            <h3>Manage your quizzes</h3>
            {quizzesByUser.map((q) => <p key={q.id}>{q.name}</p> )}
          </div>
          }
        </div>
      }
    </div>
  )
}

export default AdminPage