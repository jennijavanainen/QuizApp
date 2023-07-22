import { Link } from 'react-router-dom'
import { Button, ListGroup, ListGroupItem } from 'react-bootstrap'


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
      <Button style={{marginTop:"16px"}} href='/' variant='outline-primary' size='sm'>return to main page</Button>
    </div>
  )
}

export default QuizzesPage