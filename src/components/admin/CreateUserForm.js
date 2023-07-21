import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'

const CreateUserForm = ({ createUser, showLogin, onSuccess, notifyWith }) => {
  const [username, setUsername] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [passwordValidation, setPasswordValidation] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    password === passwordValidation ? createUser(username, name, password, onSuccess) : notifyWith(`passwords don't match`,'error')
  }

  const handleClick = () => {
    showLogin()
  }

  return (
    <Form onSubmit={handleSubmit}>
      <h2>Create new user</h2>
      <Form.Group controlId="username">
        <Form.Label>username:</Form.Label>
        <Form.Control
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          required
        />
      </Form.Group>
      <Form.Group controlId="name">
        <Form.Label>name:</Form.Label>
        <Form.Control
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />
      </Form.Group>
      <Form.Group controlId="password">
        <Form.Label>password:</Form.Label>
        <Form.Control
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />
      </Form.Group>
      <Form.Group controlId="passwordValidation">
        <Form.Label>password again:</Form.Label>
        <Form.Control
          type="password"
          value={passwordValidation}
          onChange={(event) => setPasswordValidation(event.target.value)}
          required
        />
      </Form.Group>
      <Button style={{marginTop:"16px", marginBottom:"16px"}} variant="primary" type="submit">
        Create User
      </Button>
      <h6><em>already have an account?{'   '}
        <span onClick={handleClick} style={{ cursor:'pointer', color: 'blue', textDecoration: 'underline'}}>
          login
        </span>
      </em></h6>
    </Form>
  )
}

export default CreateUserForm;