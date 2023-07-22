import axios from 'axios'
const baseURL = '/api/quizzes'

const getAll = () => {
  const request = axios.get(baseURL)
  return request.then(response => response.data)
}

const saveQuiz = (quiz) => {
  const request = axios.post(baseURL, quiz)
  return request.then(response => response.data)
}

const deleteQuiz = (id) => {
  const request = axios.delete(`${baseURL}/${id}`, id)
  return request.then(response => response.data)
}


const exportedObject = {
  getAll, saveQuiz, deleteQuiz,
};

export default exportedObject