import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './routes/Home.jsx'
import Races from './routes/Races.jsx'
import Teams from './routes/Teams.jsx'
import Circuits from './routes/Circuits.jsx'
import Error from './routes/Error.jsx'
import App from './App.jsx'

const router = createBrowserRouter([{

  path:'/',element:<App/>,
  errorElement:<Error/>,

    children:[
      {path:'/',element:<Home/>},
      {path:'/Teams',element:<Teams/>},
      {path:'/Circuits',element:<Circuits/>},
      {path:'/Races',element:<Races/>},
    ]

}])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
