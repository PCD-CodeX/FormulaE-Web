import Nav from './components/nav/Nav'
import Footer from './components/footer/Footer'
import { Outlet } from 'react-router-dom'
import './css/reset.css'

function App() {

  return (
    <>
      <Nav/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
