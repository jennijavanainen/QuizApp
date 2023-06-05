import LoginForm from './LoginForm'
import CreateUserForm from './CreateUserForm'
import { useState } from 'react'

const AdminPage = ({ login, createUser }) => {
  const [showCreateUserForm, setShowCreateUserForm] = useState(false)

  const handleClick = () => {
    setShowCreateUserForm(!showCreateUserForm)
  }

  return (
    <div>
      {!showCreateUserForm && <h4><em>sign in to manage quizzes or{' '}
        <span onClick={handleClick} style={{ cursor:'pointer', color: 'blue', textDecoration: 'underline'}}>
          create new user
        </span>
      </em></h4>}
      {showCreateUserForm ? (<CreateUserForm createUser={createUser} showLogin={handleClick}/>) : (<LoginForm login={login}/>)}
    </div>
  )
}

export default AdminPage