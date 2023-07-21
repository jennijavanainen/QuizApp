import { Link } from 'react-router-dom'
import { Container, Nav, Navbar } from 'react-bootstrap'
import React from 'react'

const Navigation = ({username, logout}) => {
  const handleLogout = () => {
    logout()
  }

  return (
    <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
      <Container>
        <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='mr-auto'>
            <Nav.Link href='#' as='span'>
              <Link to='/'>main</Link>
            </Nav.Link>
            <Nav.Link href='#' as='span'>
              <Link to='/quizzes'>quizzes</Link>
            </Nav.Link>
            <Nav.Link href='#' as='span'>
              <Link to='/admin'>admin</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className='justify-content-end'>
          {username && (
            <Nav>
              <Navbar.Text>
                <em>logged in as {username}</em>
              </Navbar.Text>
              <Nav.Link onClick={handleLogout}>
                logout
              </Nav.Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation