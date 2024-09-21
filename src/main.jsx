import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

//imports dos routes
import App from './App.jsx'
import Home from './routes/Home.jsx'
import Races from './routes/Races.jsx'
import Teams from './routes/Teams.jsx'
import Circuits from './routes/Circuits.jsx'
import Error from './routes/Error.jsx'
import Pilots from './routes/Pilots.jsx'
import Login from './routes/Login.jsx'
import Cadastro from './routes/Cadastro.jsx'
import Quiz from './routes/Quiz.jsx'
import News from './routes/News.jsx'
import Live from './routes/Live.jsx'

const router = createBrowserRouter([
  {
    path: '/', element: <App />,
    errorElement: <Error />,

    children: [
      { path: '/', element: <Home /> },
      { path: '/Teams', element: <Teams /> },
      { path: '/Circuits', element: <Circuits /> },
      { path: '/Races', element: <Races /> },
      { path: '/Pilots', element: <Pilots /> },
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