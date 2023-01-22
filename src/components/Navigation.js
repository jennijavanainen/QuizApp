import { Link } from 'react-router-dom'
import { Nav, Navbar } from 'react-bootstrap'

const Navigation = () => {

  return (
    <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
      <Navbar.Toggle aria-controls='responsive-navbar-nav' />
      <Navbar.Collapse id='responsive-navbar-nav'>
        <Nav className='mr-auto'>
          <Nav.Link href='#' as='span'>
            <Link to='/' >main</Link>
          </Nav.Link>
          <Nav.Link href='#' as='span'>
            <Link to='/quizzes' >quizzes</Link>
          </Nav.Link>
          <Nav.Link href='#' as='span'>
            <Link to='/admin' >admin</Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navigation