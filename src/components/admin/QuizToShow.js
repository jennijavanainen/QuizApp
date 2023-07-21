import { Button } from 'react-bootstrap'

const QuizToShow = ({ quiz, deleteQuiz, setQuizToShow }) => {
  const removeQuiz = () => {
    const confirmation = window.confirm(`Permanently delete quiz ${quiz.name} ?`)
    if (confirmation) {
      deleteQuiz(quiz)
      setQuizToShow(null)
    }
  }

  return (
    <div>
      <h2>{quiz.name}</h2>
      <em>{quiz.description}</em>
      <p>Show correct answers? {quiz.showCorrectAnswers ? 'yes' : 'no'}</p>
      <h5>Questions:</h5>
      {quiz.questions.map(q =>
        <QuestionToShow key={q.id} q={q} />)}
      <Button variant='danger' size='sm' onClick={removeQuiz}>
        Delete quiz
      </Button>
    </div>
  )
}

export default QuizToShow

const QuestionToShow = ({ q }) => {
  return (
    <div>
      <h4>{q.question}</h4>
      <ul>
        {q.answers.map((a, index) => <li key={index}>{a.option}</li> )}
      </ul>
      <p>correct: {q.correct.answer}</p>
    </div>
  )
}
