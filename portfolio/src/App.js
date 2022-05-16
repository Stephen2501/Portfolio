import "./App.css";
import Projects from "./Components/Projects";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Experience from "./Components/Experience";

function App() {
	return (
		<div class="container">
			<nav class="navbar">
				<ul>
					<li>
						<a href="#home">Home</a>
					</li>
					<li>
						<a href="#about">About</a>
					</li>
					<li>
						<a href="#experience">Experience</a>
					</li>
					<li>
						<a href="#projects">Projects</a>
					</li>
					<li>
						<a href="#contact">Contact</a>
					</li>
				</ul>
			</nav>
			<section id="home">
				<Home />
			</section>
			<section id="about">
				<About />
			</section>
			<section id="experience">
				<Experience />
			</section>
			<section id="projects">
				<Projects />
			</section>
			<section id="contact">
				<Contact />
			</section>
		</div>
	);
}

export default App;
