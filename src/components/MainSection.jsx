import { Routes, Route } from "react-router-dom"
import { Home, Blue, Red, Yellow } from "./NavLinks"
import './components.css'

export default function MainSection() {
    return (
        <div class="main-section">
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/blue' element={<Blue />} />
                <Route path='/red' element={<Red />} />
                <Route path='/yellow' element={<Yellow />} />
           </Routes>
        </div>
    )
}