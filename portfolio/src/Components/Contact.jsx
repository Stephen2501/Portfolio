import "../Styles/Contact.css";
import logo from "../Images/linkedin.png"

export default function Contact() {
	return (
		<div class="contact-section">
			<h1>Contact</h1>
			<div class="contact-details">
			<div className="contact-me">Please reach out to me on any of the below!</div>
			<br />
			<div className="number">
				<h2>Phone Number</h2>
				<p>07873 714 915</p>
			</div>
			<br />
			<div className="email">
				<h2>Email Address</h2>
				<p>steve_cocks28@hotmail.com</p>
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
	);
}
