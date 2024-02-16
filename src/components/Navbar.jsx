import { Link } from "react-router-dom";
import './components.css'

export default function Navbar() {
    return (
        <div className="navbar">
            <Link to="/">Home</Link>
            <Link to="/red">Red</Link>
            <Link to="/orange">Orange</Link>
            <Link to="/yellow">Yellow</Link>
            <Link to="/green">Green</Link>
            <Link to="/blue">Blue</Link>
            <Link to="/purple">Purple</Link>
        </div>
    )
}