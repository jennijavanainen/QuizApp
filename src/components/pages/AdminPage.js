import LoginForm from '../admin/LoginForm'
import CreateUserForm from '../admin/CreateUserForm'
import { useEffect, useState } from 'react'
import CreateNewQuizForm from '../newQuizCreation/CreateNewQuizForm'
import { Button } from 'react-bootstrap'
import jwt_decode from 'jwt-decode'
import QuizToShow from '../admin/QuizToShow'

const AdminPage = ({ login, createUser, currentUser, createQuiz, quizzes, deleteQuiz, notifyWith }) => {
  const [showCreateUserForm, setShowCreateUserForm] = useState(false)
  const [showQuizzes, setShowQuizzes] = useState(false)
  const [showQuizCreationForm, setShowQuizCreationForm] = useState(false)
  const [showMainAdmin, setShowMainAdmin] = useState(true)
  const [quizzesByUser, setQuizzesByUser] = useState([])
  const [quizToShow, setQuizToShow] = useState(null)
  const [userCreationSuccessful, setUserCreationSuccessful] = useState(false)

  useEffect(() => {
    if (currentUser) {
      const decodedToken = jwt_decode(currentUser.token);
      const filteredQuizzes = quizzes.filter(quiz => quiz.creator === decodedToken.id);
      setQuizzesByUser(filteredQuizzes);
    }
  },[quizzes, currentUser])

  useEffect(() => {
    if (userCreationSuccessful) {
      setShowCreateUserForm(false);
    }
  }, [userCreationSuccessful]);

  const handleCreateUserForm = () => {
    setShowCreateUserForm(!showCreateUserForm)
    setUserCreationSuccessful(false)
  }

  const handleCreateUserSuccess = () => {
    setUserCreationSuccessful(true);
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
    setQuizToShow(null)
  }

  const openQuiz = (quiz) => {
    setQuizToShow(quiz)
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
          (<CreateUserForm createUser={createUser} showLogin={handleCreateUserForm} onSuccess={handleCreateUserSuccess} notifyWith={notifyWith}/>) :
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
            <CreateNewQuizForm createQuiz={createQuiz} currentUser={currentUser} notifyWith={notifyWith} />
          </div>
          }
          {showQuizzes && <div>
            <h3>Manage your quizzes</h3>
            {quizzesByUser.map((q) => <div key={q.id}>
              <span onClick={() => openQuiz(q)} style={{cursor: 'pointer', color: 'blue', textDecoration: 'underline'}}>
                {q.name}
              </span>
            </div>)}
          </div>
          }
          {quizToShow && <div>
            <QuizToShow quiz={quizToShow} deleteQuiz={deleteQuiz} setQuizToShow={setQuizToShow}/>
          </div>
          }
        </div>
      }
      <Button style={{marginTop:"16px"}} href='/' variant='outline-primary' size='sm'>return to main page</Button>
    </div>
  )
}

export default AdminPage