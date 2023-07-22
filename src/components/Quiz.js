import Question from './Question'
import { Form, Button } from 'react-bootstrap'
import { useState } from 'react'
import update from 'react-addons-update'

const Quiz = ({ quiz, notifyWith }) => {
  const [results, setResults] = useState([])
  const [showResults, setShowResults] = useState(false)
  const [selected, setSelected] = useState([])

  const onSubmit = (event) => {
    event.preventDefault()
    if (selected.length === 0) {
      notifyWith('answer at least one question', 'error')
    } else {
      checkResults()
      setShowResults(true)
    }
  }

  const checkResults = () => {
    console.log(selected.map((a, i) => (a === quiz.questions[i].correct.answer ? 1 : 0)))
    setResults(selected.map((a, i) =>
      a === quiz.questions[i].correct.answer ? 1 : 0
    ))
  }

  if (quiz) {
    if (!showResults) {
      return (
        <div>
          <h2>{quiz.name}</h2>
          <Form onSubmit={onSubmit}>
            {quiz.questions.map((q, i) =>
              <Question
                key={q.id}
                q={q}
                selected={selected[i]}
                answer={a => setSelected(update(selected, {[i]: {$set: a}}))}
                freeze={false}
              />)}
            <Button variant='primary' type='submit'>save</Button>
            <Button href='/quizzes' variant='secondary'>cancel</Button>
          </Form>
        </div>
      )
    } else if (showResults) {
      if (!quiz.showCorrectAnswers) {
        return (
          <Result results={results} questions={quiz.questions}/>
        )
      } else {
        return (
          <div>
            {quiz.questions.map((q, i) =>
              <div key={q.id}>
                <Question
                  q={q}
                  selected={selected[i]}
                  answer={a => setSelected(update(selected, {[i]: {$set: a}}))}
                  freeze={true}
                />
                <Message answer={selected[i]} correct={q.correct.answer} />
              </div>
            )}
            <Result results={results} questions={quiz.questions}/>
          </div>
        )
      }
    }
  }
}

export default Quiz

const Result = ({ results, questions }) => {
  return (
    <div>
      <h3>Your result: {results.reduce((a, b) => a + b)}/{questions.length}</h3>
      <Button variant='primary' href='/quizzes'>
        try more quizzes
      </Button>
    </div>
  )
}

const Message = ({ answer, correct }) => {
  return (
    <div>
      {answer === correct ?
        <p style={{color:'green'}}>Your answer is correct!</p> :
        <p style={{color:'red'}}>Correct answer: {correct}</p>
      }
    </div>
  )

}