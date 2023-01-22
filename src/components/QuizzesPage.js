import { Link } from 'react-router-dom'


const QuizzesPage = ({ quizzes }) => {
  return (
    <div>
      <h2>Available quizzes</h2>
      <ul>{quizzes.map(quiz =>
        <li key={quiz.id}><Link to={`/quizzes/${quiz.id}`}>{quiz.name}</Link>, {quiz.questions} questions</li>
      )} </ul>
    </div>
  )
}

export default QuizzesPage