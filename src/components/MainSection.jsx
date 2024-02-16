import { Routes, Route } from "react-router-dom"
import { Orange, Yellow, Green, Blue, Purple } from "./NavLinks"
import { Red } from "./color_links/red.jsx"
import { Home } from "./home.jsx"
import './components.css'

export default function MainSection() {
    return (
        <div className="main-section">
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/red' element={<Red />} />
                <Route path='/orange' element={<Orange />} />
                <Route path='/yellow' element={<Yellow />} />
                <Route path='/green' element={<Green />} />
                <Route path='/blue' element={<Blue />} />
                <Route path='/purple' element={<Purple />} />
            </Routes>
        </div>
    )
}