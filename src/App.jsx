import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from '../src/pages/home/Home'
import VisonMison from './pages/vision-mision/visionMison'

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/nosotros' element={<VisonMison />}/>
      </Routes>
    </>
  )
}

export default App
