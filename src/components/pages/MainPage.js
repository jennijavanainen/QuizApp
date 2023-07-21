import { Link } from 'react-router-dom'

const MainPage = () => {
  return (
    <div>
      <h3>Welcome to Quiz App!</h3>
      <p>Blaa blaa blaa</p>
      <Link to='/quizzes'>Take a quiz</Link><br/>
      <Link to='/admin'>Manage quizzes</Link>
    </div>
  )
}

export default MainPage