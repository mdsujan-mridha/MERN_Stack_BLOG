import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import './App.css'
import Header from './components/Layout/Header/Header'
import Home from './components/Home/Home'


function App() {
  return (
    <>
      <Router>
        <Header />

        <Routes>
          <Route path='/' element={<Home />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
