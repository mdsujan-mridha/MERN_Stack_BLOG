import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import './App.css'
import Header from './components/Layout/Header/Header'
import Home from './components/Home/Home'
import Footer from "./components/Layout/Footer/Footer"


function App() {
  return (
    <>
      <Router>
        <Header />

        <Routes>
          <Route path='/' element={<Home />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
