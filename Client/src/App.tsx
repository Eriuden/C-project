import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { CosplanPage } from './pages/CosplanPage'
import { Header } from './components/Header'

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/profil" element={<CosplanPage/>}/>
      </Routes> 
    </>
  )
}

export default App
