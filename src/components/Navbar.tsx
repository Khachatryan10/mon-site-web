import { Link, useLocation } from "react-router-dom"

export default function Navbar() {
    const location  = useLocation()

    return (
        <nav className="nav">
            <ul>
                <Link to={"certifications"}><li className={location.pathname === "/certifications" ? "currentlyOn": ""}>Certifications</li></Link>
                <Link to={"projects"}><li className={location.pathname === "/projects" ? "currentlyOn": ""}>Projects</li></Link>
                <Link to={"contact"}><li className={location.pathname === "/contact" ? "currentlyOn": ""}>Contact</li></Link>
                <Link to={"about"}><li className={location.pathname === "/about" ? "currentlyOn": ""}>About</li></Link>
            </ul>
        </nav>
    )
}