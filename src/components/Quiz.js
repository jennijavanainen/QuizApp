import Question from './Question'
import { Form, Button } from 'react-bootstrap'
import { useState } from 'react'
import update from 'react-addons-update'

const Quiz = ({ quiz }) => {
  const [results, setResults] = useState([])
  const [showResults, setShowResults] = useState(false)
  const [selected, setSelected] = useState([])

  const onSubmit = (event) => {
    event.preventDefault()
    checkResults()
    console.log(selected)
    setShowResults(true)
  }

  const checkResults = () => {
    console.log(selected.map((a, i) => (a === quiz.questions[i].correct.answer ? 1 : 0)))
    setResults(selected.map((a, i) =>
      a === quiz.questions[i].correct.answer ? 1 : 0
    ))
  }
  const handleCancel = ()=> {

  }

  if (quiz) {
    if (!showResults) {
      return (
        <div>
          <h2>{quiz.name}</h2>
          <Form onSubmit={onSubmit}>
            {quiz.questions.map((q, i) => <Question key={q.id} q={q} selected={selected[i]} answer={a => setSelected(update(selected, {[i]: {$set: a}}))} />)}
            <Button variant='primary' type='submit'>save</Button>
            <Button variant='secondary' onClick={handleCancel}>cancel</Button>
          </Form>
        </div>
      )
    } else if (showResults) {
      return (
        <Result results={results}/>
      )
    }
}

}

export default Quiz

const Result = ({ results}) => {
  return (
    <div>
      <h4>your result: {results.reduce((a, b) => a + b)}</h4>
      <Button variant='primary' href='/quizzes'>
        try more quizzes
      </Button>
    </div>
  )
}