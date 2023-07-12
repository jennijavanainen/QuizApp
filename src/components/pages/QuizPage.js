import Quiz from '../Quiz'
import { useMemo } from 'react'

const QuizPage = ({ quiz }) => {

  const shuffledQuiz = useMemo(() => {
    const lodash = require('lodash')
    return {...quiz, questions: lodash.shuffle(quiz.questions.map(question => ({...question, answers: lodash.shuffle(question.answers)})))}
  },[])

  return (
    <Quiz quiz={shuffledQuiz}/>
  )
}

export default QuizPage