import "../styles/Header.css"
import { Link } from "react-router-dom";

const isActiveRoute = (path) => {
    return location.pathname === path;
};

const showLink = (path) => {
    if (location.pathname === "/register") {
        return path === "/";
    } else if (location.pathname === "/validate-email") {
        return path === "/";
    } else {
        return !isActiveRoute("/login") || path === "/";
    }
};

export function Header() {
    return (
        <header>
            {showLink("/") && (
                <Link to="/">
                    <h1>PhotoDrop</h1>
                </Link>
            )}
        </header>
    )
}


