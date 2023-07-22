import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap'

const MainPage = ({ quizzes }) => {
  const [quizzesToShow, setQuizzesToShow] = useState([])
  const [randomQuiz, setRandomQuiz] = useState('')

  useEffect(() => {
    const lodash = require('lodash')
    const shuffledQuizzes = lodash.shuffle(quizzes)
    const selectedQuizzes = shuffledQuizzes.slice(1, 6);
    setQuizzesToShow(selectedQuizzes);

    const selectedRandomQuiz = shuffledQuizzes[0]
    setRandomQuiz(selectedRandomQuiz)
  }, [quizzes])

  return (
    <div>
      <h3>Welcome to Quiz App!</h3>
      <h5>Are you ready to put your knowledge to the ultimate test?</h5>
      <p>Look no further! Quiz App is your one-stop destination for an exhilarating and educational quiz-taking experience.
        Whether you're a trivia enthusiast or simply love learning new things, our platform offers an array of captivating
        quizzes that cover a wide range of topics.</p>
      <p>Challenge yourself with diverse categories, from history and science to pop culture and sports.
        Explore fascinating questions designed to engage your mind and inspire curiosity.
        With each quiz you take, you'll uncover exciting facts and gain a deeper understanding of the world around you.</p>
      <p>But that's not all! Quiz App empowers you to become a quiz master yourself.
        By <Link to='/admin'>signing up</Link>, you gain the ability to create and share your very own quizzes with the world.
        Showcase your expertise, spark debates, and surprise your friends with mind-boggling questions.</p>
      <p>So, what are you waiting for?
        Dive into Quiz App, where knowledge knows no bounds, and every quiz is an opportunity to explore, learn, and shine.
        Happy quizzing!</p>
      <h4>Take a quick quiz or <Link to='/quizzes'>browse through our entire collection</Link></h4>
      {quizzesToShow && <div>
        <ListGroup variant='flush'>{quizzesToShow.map(quiz =>
          <ListGroupItem key={quiz.id}>
            <Link to={`/quizzes/${quiz.id}`} style={{fontSize:"24px"}}>
              {quiz.name}
            </Link><br/>
            <em>{quiz.description}</em><br/>
            {quiz.questions.length} questions
          </ListGroupItem>
        )} </ListGroup>
      </div>}

      {randomQuiz && <Link to={`/quizzes/${randomQuiz.id}`}>Take a random quiz</Link>}<br/>
      <Link to='/admin'>Manage quizzes</Link>
    </div>
  )
}

export default MainPage