/* eslint-disable no-undef */
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './Components/Login/Login'
import SignUp from './Components/SignUp/SignUp'
import Dashboard from './Components/Dashboard/Dashboard'
import Course from './Components/Course/Course'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import { Sidebar } from 'react-pro-sidebar'
import Desk_of_director from './Components/Desk Of Director/Desk_of_director'
import Desk_of_principal from './Components/Desk Of  Principal/Desk_of_principal'

function App() {
  return (
    <>
      <Header />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/course' element={<Course />} />
        <Route path='/desk_of_director' element={<Desk_of_director />} />
        <Route path='/desk_of_principal' element={<Desk_of_principal />} />
        
      </Routes>
      <Footer
        phoneNumberfirst="" 
        phoneNumbersec="" 
        phoneNumberthird="" 
        emailAddress=""
        footerBg={{ 
          backgroundImage: 'url(/public/image/footer.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      

      />


    </>
  )
}

export default App
