import "../Styles/Contact.css";
import logo from "../Images/linkedin.png";
import glogo from "../Images/github-logo.png";
import elogo from "../Images/email.jpeg"

export default function Contact() {
	return (
		<div class="contact-section">
			<div class="contact-list">
			<h1>Contact</h1>
			<div class="contact-details">
			<div className="contact-me">Please reach out to me on any of the below!</div>
			<br />
			<div className="github">
				<h2>Github</h2>
				<a
					href="https://github.com/Stephen2501"
					target="_blank"
					rel="noreferrer"
				>
					<img src={glogo} alt=" " height="50vw" width="50vw" />
				</a>
			</div>
			<br />
			<div className="email">
				<h2>Email Address</h2>
				<a href="mailto:steve_cocks28@hotmail.com"><img src={elogo} alt=" " height="50vw" width="50vw"/></a>
			</div>
			<br />
			<div className="linkedin">
				<h2>LinkedIn</h2>
				<a
					href="https://www.linkedin.com/in/stephen-cocks-1641a4238/"
					target="_blank"
					rel="noreferrer"
				>
					<img src={logo} alt=" " height="50vw" width="50vw" />
				</a>
			</div>
		</div>
		</div>
		</div>
	);
}
