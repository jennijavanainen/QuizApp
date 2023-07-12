import { Button } from 'react-bootstrap'

const ShowQuestion = ({ question, handleRemoveQuestion, index }) => {
  const deleteQuestion = () => {
    handleRemoveQuestion(index)
  }

  return (
    <div>
      <span>
        <strong>{question.question}</strong>
        <Button variant='outline-danger' size='sm' onClick={deleteQuestion}>
          Delete
        </Button>
      </span>
      <ul>
        {question.answers.map((a, index) => <li key={index}>{a.option}</li> )}
      </ul>
      <p>correct answer: {question.correct.answer}</p>
    </div>
  )
}

export default ShowQuestion