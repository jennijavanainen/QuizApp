const Question = ({ q }) => {

  if (q) {
    return (
      <div>
        <h4>{q.question}</h4>
        <ul>{q.answers.map(a => <li key={a.id}>{a.option}</li> )}</ul>
      </div>
    )
  }
}

export default Question