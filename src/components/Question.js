import Form from 'react-bootstrap/Form'

const Question = ({ q, answer, selected }) => {
  const handleOptionChange = (option) => {
    answer(option.target.value)
  }

  return (
    q && <div>
      <h4>{q.question}</h4>
      <Form.Group>
        {q.answers.map(a =>
          <div key={a.id} className='mb-3'>
            <Form.Check type='radio' id={a.id} label={a.option} value={a.option} checked={selected === a.option} onChange={handleOptionChange}/>
          </div> )}
      </Form.Group>
    </div>
  )
}

export default Question