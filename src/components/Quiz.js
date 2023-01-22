const Quiz = ({ quiz }) => {

  if (quiz) {
    return (
      <div>
        <h2>{quiz.name}</h2>

      </div>
    )
  }

}

export default Quiz