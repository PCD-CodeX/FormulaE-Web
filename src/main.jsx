import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Home from './routes/Home.jsx'
import Races from './routes/Races.jsx'
import Teams from './routes/Teams.jsx'
import Circuits from './routes/Circuits.jsx'
import Error from './routes/Error.jsx'
import Pilots from './routes/Pilots.jsx'

const router = createBrowserRouter([
  {

  path:'/',element:<App/>,
  errorElement:<Error/>,

    children:[
      {path:'/',element:<Home/>},
      {path:'/Teams',element:<Teams/>},
      {path:'/Circuits',element:<Circuits/>},
      {path:'/Races',element:<Races/>},
      {path:'/Pilots',element:<Pilots/>},
    ]

}
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)