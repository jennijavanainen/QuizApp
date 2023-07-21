import { Button, Form } from 'react-bootstrap'
import React, { useState } from 'react'
import QuestionForm from './QuestionForm'
import ShowQuestion from './ShowQuestion'

const CreateNewQuizForm = ({ createQuiz, currentUser, notifyWith }) => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [showCorrectAnswers, setShowCorrectAnswers] = useState(false)
  const [questions, setQuestions] = useState([])

  const handleSubmit = (event) => {
    event.preventDefault()

    if (questions.length < 2) {
      notifyWith('minimum two questions are required for a quiz', 'error')
    } else {
      createQuiz({ name, description, showCorrectAnswers, creator:currentUser, questions })

      setName('')
      setDescription('')
      setShowCorrectAnswers(false)
      setQuestions([])
    }
  }

  const handleRemoveQuestion = (index) => {
    const updatedQuestions = [...questions];
    updatedQuestions.splice(index, 1);
    setQuestions(updatedQuestions);
  };

  const handleShowCorrectAnswersOptionChange = (event) => {
    setShowCorrectAnswers(event.target.value === "yes")
  }

    return (
    <Form onSubmit={handleSubmit}>
      <h2>Create new Quiz</h2>
      <Form.Group controlId="name">
        <Form.Label>Quiz name:</Form.Label>
        <Form.Control
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />
      </Form.Group>
      <Form.Group controlId="description">
        <Form.Label>Description:</Form.Label>
        <Form.Control
          type="text"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          required
        />
      </Form.Group>
      <Form.Group>
          <Form.Label>Show correct answers after submitting quiz</Form.Label>
          <Form.Check type='radio' id={"yes"} label={"yes"} value={"yes"} checked={showCorrectAnswers} onChange={handleShowCorrectAnswersOptionChange}/>
          <Form.Check type='radio' id={"no"} label={"no"} value={"no"} checked={!showCorrectAnswers} onChange={handleShowCorrectAnswersOptionChange}/>
      </Form.Group>
      {questions && <div>
        {questions.map((q, index) =>
          <ShowQuestion key={index} question={q} handleRemoveQuestion={handleRemoveQuestion} index={index}/>
        )}
      </div>}
      <QuestionForm questions={questions} setQuestions={setQuestions} notifyWith={notifyWith} />
      <Button variant="primary" type="submit">
        Save Quiz
      </Button>
    </Form>
  )
}


export default CreateNewQuizForm