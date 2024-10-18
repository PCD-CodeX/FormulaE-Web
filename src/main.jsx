import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

//imports dos routes
import App from './App.jsx'
import Home from './routes/home/Home.jsx'
import Races from './routes/races/Races.jsx'
import Teams from './routes/teams/Teams.jsx'
import Circuits from './routes/circuits/Circuits.jsx'
import Error from './routes/error/Error.jsx'
import Login from './routes/login/Login.jsx'
import Cadastro from './routes/cadastro/Cadastro.jsx'
import Quiz from './routes/quiz/Quiz.jsx'
import News from './routes/news/News.jsx'
import Live from './routes/live/Live.jsx'

const router = createBrowserRouter([
  {
    path: '/', element: <App />,
    errorElement: <Error />,

    children: [
      { path: '/', element: <Home /> },
      { path: '/Teams', element: <Teams /> },
      { path: '/Circuits', element: <Circuits /> },
      { path: '/Races', element: <Races /> },
      { path: '/Login', element: <Login /> },
      { path: '/Cadastro', element: <Cadastro /> },
      { path: '/News', element: <News /> },
      { path: '/Live', element: <Live /> },
      { path: '/Quiz', element: <Quiz /> },
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)