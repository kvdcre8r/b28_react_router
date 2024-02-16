import './App.css'
import Navbar from "./components/Navbar"
import MainSection from "./components/MainSection"
import Header from './components/Header'
import Footer from './components/Footer'

function App() {

  return (
    <div id="container">
      <Header />
      <Navbar />
      <MainSection />
      <Footer />
    </div>
  )
}

export default App