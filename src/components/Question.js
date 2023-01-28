import Form from 'react-bootstrap/Form'
import { useState } from 'react'

const Question = ({ q, answer }) => {
  const [selected, setSelected] = useState(null)
  const handleOptionChange = (option) => {
    setSelected(option.target.value)
    answer(option.target.value)
  }
  console.log("selected: ", selected)

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