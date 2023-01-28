import Question from './Question'
import { Form, Button } from 'react-bootstrap'
import { useState } from 'react'

const Quiz = ({ quiz }) => {

  const [score, setScore] = useState(0)

  const onSubmit = (event) => {
    event.preventDefault()
    console.log('score: ', score)
  }

  const checkAnswer = (answer, correctAnswer) => {
    if (answer === correctAnswer) {
      setScore(score + 1)
    }
  }


  if (quiz) {
    return (
      <div>
        <h2>{quiz.name}</h2>
        <Form onSubmit={onSubmit}>
          {quiz.questions.map(q => <Question key={q.id} q={q} answer={a => checkAnswer(a, q.correct.answer)} />)}
          <Button variant='primary' type='submit'>
            save
          </Button>
        </Form>
      </div>
    )
  }

}

export default Quiz