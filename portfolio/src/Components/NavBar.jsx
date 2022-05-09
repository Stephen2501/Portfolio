import { NavLink } from "react-router-dom";
import { useState } from "react";
import "../Styles/Navbar.css";
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";

export default function Navbar() {
	const [navbarOpen, setNavbarOpen] = useState(false);

	const handleToggle = () => {
		setNavbarOpen((prev) => !prev);
	};

	const closeMenu = () => {
		setNavbarOpen(false);
	};

	return (
		<nav className="navBar">
			<button onClick={handleToggle}>
				{navbarOpen ? (
					<MdClose style={{ color: "#fff", width: "40px", height: "40px" }} />
				) : (
					<FiMenu style={{ color: "#7b7b7b", width: "40px", height: "40px" }} />
				)}
			</button>
			<ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
				<NavLink
					to="/"
					activeClassName="active-link"
					onClick={() => closeMenu()}
					exact
				>
					Home
				</NavLink>
				<NavLink
					to="/projects"
					activeClassName="active-link"
					onClick={() => closeMenu()}
					exact
				>
					Projects
				</NavLink>
				<NavLink
					to="/about"
					activeClassName="active-link"
					onClick={() => closeMenu()}
					exact
				>
					About
				</NavLink>
				<NavLink
					to="/contact"
					activeClassName="active-link"
					onClick={() => closeMenu()}
					exact
				>
					Contact
				</NavLink>
			</ul>
		</nav>
	);
}
