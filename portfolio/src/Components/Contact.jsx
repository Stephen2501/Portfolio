import "../Styles/Contact.css";
import logo from "../Images/linkedin.png"
import ContactForm from "./ContactFrom";

export default function Contact() {
	return (
		<div class="contact-section">
			<h1>Contact</h1>
		<div class="contact">
			<div className="contact-form-message">
			Feel free to email me directly and ask any questions!
			</div>
			<div className="contact-form">
				<ContactForm />
			</div>
			<div class="contact-details"></div>
			<div className="contact-me">You can take my details and reach out to me on any of the below!</div>
			<br />
			<div className="number">
				<h2>Phone number</h2>
				<p>078737 14915</p>
			</div>
			<br />
			<div className="email">
				<h3>Email Address</h3>
				<p>steve_cocks28@hotmail.com</p>
			</div>
			<br />
			<div className="linkedin">
				<h3>LinkedIn</h3>
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
