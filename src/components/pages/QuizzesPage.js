import { Link } from 'react-router-dom'
import { ListGroup, ListGroupItem } from 'react-bootstrap'


const QuizzesPage = ({ quizzes }) => {
  return (
    <div>
      <h2>Available quizzes</h2>
      <ListGroup variant='flush'>{quizzes.map(quiz =>
        <ListGroupItem key={quiz.id}>
          <Link to={`/quizzes/${quiz.id}`} style={{fontSize:"24px"}}>
            {quiz.name}
          </Link><br/>
          <em>{quiz.description}</em><br/>
          {quiz.questions.length} questions
        </ListGroupItem>
      )} </ListGroup>
      <Link style={{marginTop:"32px"}} to='/'>return to main page</Link>
    </div>
  )
}

export default QuizzesPage