import { useState } from 'react'
import { Button, Form } from 'react-bootstrap'

const LoginForm = ({login}) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    login(username, password)
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>username</Form.Label>
        <Form.Control
          value={username}
          onChange={({target}) => setUsername(target.value)}
          id='username'
        />
        <Form.Label>password</Form.Label>
        <Form.Control
          type="password"
          value={password}
          onChange={({target}) => setPassword(target.value)}
          id="password"
        />
        <Button id="login-button" type="submit">
          login
        </Button>
      </Form.Group>
    </Form>
  )
}

export default LoginForm