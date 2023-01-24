import Question from './Question'
const Quiz = ({ quiz }) => {

  if (quiz) {
    return (
      <div>
        <h2>{quiz.name}</h2>
        {quiz.questions.map(q => <Question key={q.id} q={q} />)}
      </div>
    )
  }

}

export default Quiz