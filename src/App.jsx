// import libraries
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// import stylesheet
import './App.css'

// import components
import Mainpage from './Components/Mainpage'
import Camera from './Components/Camera'

export default function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Mainpage />}></Route>
          <Route path='/camera' element={<Camera />}></Route>
        </Routes>
      </BrowserRouter>


    </>
  )
}