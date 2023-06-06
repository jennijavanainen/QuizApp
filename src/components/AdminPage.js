import LoginForm from './LoginForm'
import CreateUserForm from './CreateUserForm'
import { useState } from 'react'

const AdminPage = ({login, createUser, currentUser}) => {
  const [showCreateUserForm, setShowCreateUserForm] = useState(false)

  const handleClick = () => {
    setShowCreateUserForm(!showCreateUserForm)
  }

  return (
    <div>
      {!currentUser && <div>
        {!showCreateUserForm && <h4><em>log in to manage quizzes or{' '}
          <span onClick={handleClick} style={{cursor: 'pointer', color: 'blue', textDecoration: 'underline'}}>
          sign up
        </span>
        </em></h4>}
        {showCreateUserForm ?
          (<CreateUserForm createUser={createUser} showLogin={handleClick}/>) :
          (<LoginForm login={login}/>)}
      </div>}

      {currentUser &&
        <div>
          <h4>Welcome {currentUser.name}!</h4>
          
        </div>
      }
    </div>
  )
}

export default AdminPage