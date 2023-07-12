import { Button, Form } from 'react-bootstrap'
import React, { useState } from 'react'
import "./questionStyle.css";

const QuestionForm = ({ questions, setQuestions }) => {
  const [question, setQuestion] = useState('')
  const [answers, setAnswers] = useState([])
  const [correct, setCorrect] = useState('')
  const [answerOption, setAnswerOption] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    const newQuestion = {
      question: question,
      answers: answers.map((a) => ({ option: a })),
      correct: { answer: correct }
    }
    console.log(newQuestion)
    setQuestions(questions.concat(newQuestion))
    setQuestion('')
    setAnswers([])
    setCorrect('')
  }

  const saveAnswer = (event) => {
    event.preventDefault()
    setAnswers([...answers, answerOption])
    setAnswerOption('')
  }

  const deleteAnswerOption = (index) => {
    const updatedAnswers = [...answers];
    updatedAnswers.splice(index, 1);
    setAnswers(updatedAnswers);
  }

  return (
    <div className={'question'}>
      <h4>Add a question to your quiz:</h4>
      <div>
        <Form.Group controlId="question">
          <Form.Label>Question:</Form.Label>
          <Form.Control
            type="text"
            value={question}
            onChange={(event) => setQuestion(event.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="answers">
          <Form.Label>Add answer option:</Form.Label>
          <Form.Control
            type="text"
            value={answerOption}
            onChange={(event) => setAnswerOption(event.target.value)}
          />
          <Button variant="primary" onClick={saveAnswer}>
            Add Option
          </Button>
        </Form.Group>
        {answers && <div>
          <p>Answer options added:</p>
          <ul>{answers.map((a, index) =>
            <li key={index}>
              {a}
              <span style={{ marginLeft: '32px' }}>
                <label>
                  <input
                    style={{ marginRight: '8px' }}
                    type='radio'
                    name='correctAnswer'
                    value={a}
                    onChange={(event) => setCorrect(event.target.value)}
                  />
                  correct
                </label>
                <Button variant='outline-danger' size='sm' onClick={() => deleteAnswerOption(index)}>
                  Delete
                </Button>
              </span>
            </li>)}
          </ul>
        </div>}
        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Save Question
        </Button>
      </div>
    </div>
  )
}

export default QuestionForm