import { Link } from "react-router-dom";
import './components.css'

export default function Navbar() {
    return (
        <div className="navbar">
            <Link to="/" style={{color: "white"}}>Home</Link>
            <Link to="/red" style={{color: "red"}}>Red</Link>
            <Link to="/orange" style={{color: "darkorange"}} >Orange</Link>
            <Link to="/yellow" style={{color: "yellow"}} >Yellow</Link>
            <Link to="/green" style={{color: "green"}} >Green</Link>
            <Link to="/blue" style={{color: "blue"}} >Blue</Link>
            <Link to="/purple" style={{color: "purple"}} >Purple</Link>
        </div>
    )
}