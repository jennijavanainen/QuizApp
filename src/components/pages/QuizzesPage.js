import { Link } from 'react-router-dom'
import { Button, ListGroup, ListGroupItem } from 'react-bootstrap'


const QuizzesPage = ({ quizzes }) => {
  return (
    <div>
      <h2>Available quizzes</h2>
      <ListGroup variant='flush'>{quizzes.map(quiz =>
        <ListGroupItem key={quiz.id}><Link to={`/quizzes/${quiz.id}`}>{quiz.name}</Link>, {quiz.questions.length} questions</ListGroupItem>
      )} </ListGroup>
      <Button href='/' variant='outline-primary' size='sm'>return to main page</Button>
    </div>
  )
}

export default QuizzesPage