import Quiz from '../Quiz'
import { useMemo } from 'react'

const QuizPage = ({ quiz, notifyWith }) => {

  const shuffledQuiz = useMemo(() => {
    const lodash = require('lodash')
    return {...quiz, questions: lodash.shuffle(quiz.questions.map(question => ({...question, answers: lodash.shuffle(question.answers)})))}
  },[quiz])

  return (
    <Quiz quiz={shuffledQuiz} notifyWith={notifyWith}/>
  )
}

export default QuizPage