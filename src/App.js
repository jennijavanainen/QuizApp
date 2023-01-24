import { useState, useEffect } from 'react'

import { Routes, Route, useMatch } from 'react-router-dom'
import Navigation from './components/Navigation'
import MainPage from './components/MainPage'
import QuizzesPage from './components/QuizzesPage'
import AdminPage from './components/AdminPage'
import Quiz from './components/Quiz'

const initialQuizzes = [
  {
    name: "Capital City Quiz",
    id: 1,
    description: "A quiz for testing your knowledge in capital cities",
    questions: [
      {
        question: "What is the capital city of Indonesia?",
        id: 1,
        answers: [
          {
            option: "Jakarta",
            id: 1,
          },
          {
            option: "Surabaya",
            id: 2,
          },
          {
            option: "Kuala Lumpur",
            id: 3,
          },
          {
            option: "Denpasar",
            id: 4,
          }
        ],
        correct: {
          answer: "Jakarta"
        }
      },
      {
        question: "What is the capital city of Bolivia?",
        id: 2,
        answers: [
          {
            option: "La Paz",
            id: 1,
          },
          {
            option: "Quito",
            id: 2,
          },
          {
            option: "Bogota",
            id: 3,
          },
          {
            option: "Santa Cruz de la Sierra",
            id: 4,
          }
        ],
        correct: {
          answer: "La Paz"
        }
      },
      {
        question: "What is the capital city of Kenya?",
        id: 3,
        answers: [
          {
            option: "Nairobi",
            id: 1,
          },
          {
            option: "Mombasa",
            id: 2,
          },
          {
            option: "Dar es Salaam",
            id: 3,
          },
          {
            option: "Kampala",
            id: 4,
          }
        ],
        correct: {
          answer: "Nairobi"
        }
      },
      {
        question: "What is the capital city of Oman?",
        id: 4,
        answers: [
          {
            option: "Muscat",
            id: 1,
          },
          {
            option: "Sana'a",
            id: 2,
          },
          {
            option: "Doha",
            id: 3,
          },
          {
            option: "Al Ain",
            id: 4,
          }
        ],
        correct: {
          answer: "Muscat"
        }
      },
      {
        question: "What is the capital city of Japan?",
        id: 5,
        answers: [
          {
            option: "Tokyo",
            id: 1,
          },
          {
            option: "Osaka",
            id: 2,
          },
          {
            option: "Sapporo",
            id: 3,
          },
          {
            option: "Seoul",
            id: 4,
          }
        ],
        correct: {
          answer: "Tokyo"
        }
      },
      {
        question: "What is the capital city of Serbia?",
        id: 6,
        answers: [
          {
            option: "Belgrade",
            id: 1,
          },
          {
            option: "Sarajevo",
            id: 2,
          },
          {
            option: "Deva",
            id: 3,
          },
          {
            option: "Tirana",
            id: 4,
          }
        ],
        correct: {
          answer: "Belgrade"
        }
      },
      {
        question: "What is the capital city of Turkmenistan?",
        id: 7,
        answers: [
          {
            option: "Ashgabat",
            id: 1,
          },
          {
            option: "Dushanbe",
            id: 2,
          },
          {
            option: "Khiva",
            id: 3,
          },
          {
            option: "Baku",
            id: 4,
          }
        ],
        correct: {
          answer: "Ashgabat"
        }
      }
    ]
  },
  {
    name: "Coffee Quiz",
    id: 2,
    description: "A quiz about coffee",
    questions: [
      {
        question: "What is the most common coffee variety in the world?",
        id: 1,
        answers: [
          {
            option: "Robusta",
            id: 1,
          },
          {
            option: "Arabica",
            id: 2,
          },
          {
            option: "Liberica",
            id: 3,
          }
        ],
        correct: {
          answer: "Arabica",
        }
      },
      {
        question: "How many 60-kg bags of coffee is produced in the world annually?",
        id: 2,
        answers: [
          {
            option: "175 million",
            id: 1,
          },
          {
            option: "5 million",
            id: 2,
          },
          {
            option: "2.2 billion",
            id: 3,
          },
          {
            option: "405 million",
            id: 4,
          }
        ],
        correct: {
          answer: "175 million",
        }
      },
      {
        question: "What country is the biggest coffee consumer (per capita) in the world?",
        id: 3,
        answers: [
          {
            option: "Finland",
            id: 1,
          },
          {
            option: "Kenya",
            id: 2,
          },
          {
            option: "Turkey",
            id: 3,
          },
          {
            option: "Canada",
            id: 4,
          },
          {
            option: "Vietnam",
            id: 5,
          }
        ],
        correct: {
          answer: "Finland",
        }
      },
      {
        question: "What country is the biggest coffee producer in the world?",
        id: 4,
        answers: [
          {
            option: "Brazil",
            id: 1,
          },
          {
            option: "Kenya",
            id: 2,
          },
          {
            option: "Indonesia",
            id: 3,
          },
          {
            option: "Costa Rica",
            id: 4,
          },
          {
            option: "Ethiopia",
            id: 5,
          },
          {
            option: "France",
            id: 6,
          }
        ],
        correct: {
          answer: "Brazil",
        }
      }
    ]
  },
  {
    name: "Animal Quiz",
    id: 3,
    description: "Test your knowledge with this fun animal-themed quiz",
    questions: [
      {
        question: "What animals did the ancient Egyptians worship as gods?",
        id: 1,
        answers: [
          {
            option: "Cats",
            id: 1,
          },
          {
            option: "Camels",
            id: 2,
          },
          {
            option: "Locusts",
            id: 3,
          }
        ],
        correct: {
          answer: "Cats",
        }
      },
      {
        question: "Which of these animals is now extinct?",
        id: 2,
        answers: [
          {
            option: "Black Bear",
            id: 1,
          },
          {
            option: "Dodo",
            id: 2,
          },
          {
            option: "Snow Leopard",
            id: 3,
          },
          {
            option: "Pink Flamingo",
            id: 4,
          }
        ],
        correct: {
          answer: "Dodo",
        }
      },
      {
        question: "Do polar bears live in thr North or South pole?",
        id: 3,
        answers: [
          {
            option: "North",
            id: 1,
          },
          {
            option: "South",
            id: 2,
          }
        ],
        correct: {
          answer: "North",
        }
      }
    ]
  }
]

const App = () => {
  const [quizzes, setQuizzes] = useState([])

  useEffect(() => {
    setQuizzes(initialQuizzes)
  }, [])

  const quizMatch = useMatch('/quizzes/:id')
  const quizToShow = quizMatch
    ? quizzes.find(quiz => quiz.id === Number(quizMatch.params.id))
    : null

  return (
    <div className='container'>
      <Navigation />
      <h1>Quiz App</h1>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/quizzes' element={<QuizzesPage quizzes={quizzes}/>} />
        <Route path='/admin' element={<AdminPage />} />
        <Route path='/quizzes/:id' element={<Quiz quiz={quizToShow} />} />
      </Routes>

    </div>
  )
}

export default App