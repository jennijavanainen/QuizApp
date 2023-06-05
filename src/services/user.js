import axios from 'axios'

const baseUrl = 'http://localhost:3001/api/users'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

let token = null

const STORAGE_KEY = 'loggedQuizAppUser'

const setUser = (user) => {
  window.localStorage.setItem(
    STORAGE_KEY, JSON.stringify(user)
  )
  token = user.token
}

const getUser = () => {
  const loggedUserJSON = window.localStorage.getItem(STORAGE_KEY)
  if (loggedUserJSON) {
    const user = JSON.parse(loggedUserJSON)
    token = user.token
    return user
  }

  return null
}

const clearUser = () => {
  localStorage.clear()
  token = null
}

const createUser = (username, name, password) => {
  const user = {
    username: username,
    name: name,
    password: password
  }
    const request = axios.post(baseUrl, user)
    return request.then(response => response.data)
}

const getToken = () => token

export default {
  setUser, getUser, clearUser, getToken, getAll, createUser
}