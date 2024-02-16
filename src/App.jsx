import './App.css'
import Navbar from "./components/Navbar"
import MainSection from "./components/MainSection"
import Header from './components/Header'

function App() {

  return (
    <div id="container">
      {<Header />}
      {<Navbar />}
      {<MainSection />}
    </div>
  )
}

export default App