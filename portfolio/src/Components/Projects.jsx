import "../Styles/Projects.css"

export default function Projects() {
	return (
		<div>
		<h1>Projects</h1>
		<div className="projects">
			<br/>
			<div className="project-card">
				<h2>NC News Back-end</h2>
				<p>
					Using a provided SQL database, i created an API using Express to
					provide pathways to retrieve data from the database; There are various
					methods to manipulate the data in GET, POST, PATCH or DELETE requests;
					there is also a complete account for errors. Each request was built up
					using full Test drvien development to verify that each function worked
					completely as expected before the code was formally reviewed. This
					project was created over the course of a week and was my introduction
					to solo project work.{" "}
				</p>
				<a
					href="https://github.com/Stephen2501/back-end-project"
					target="_blank"
					rel="noreferrer"
				>
					<h3>NC News Back-end Repo</h3>
				</a>
			</div>
			<br />
			<div className="project-card">
				<h2>NC News Front-end</h2>
				<p>
					NC News is a news website that can displays articles and comments on
					those articles. Having built the API for the database, the next step
					was to build the front-end for a user to be able to interact with it.
					The site was built as a React app and linked to the back-end API.
					Using React gave me great insight into how to code when needing to
					consider the customer experience with using optimistic rendering, as
					well as how to manage state throughout the app to constantly be
					providing and keeping necessary information for the user. Some
					features include, filtering and sorting articles; adding and deleting
					comments on articles and voting on articles.{" "}
				</p>
				<a
					href="https://github.com/Stephen2501/nc-news"
					target="_blank"
					rel="noreferrer"
				>
					<h3>NC News Front-end Repo</h3>
				</a>
			</div>
			<br />
			<div className="project-card">
				<h2>Tremolo</h2>
				<p>
					Tremolo is a social music app for helping musicians to connect with
					eachother for creating bands or just getting the chance to play music
					together. It was designed over a period of 3 weeks with myself and 4
					other students at Northcoders. The project was to help encourage the
					learning of and then usage of unfamiliar/new technologies, we
					therefore built the app using Svelte for the front-end coding and
					created our back-end using Google's firestore database. This project
					was done completely as an independent venture that saw us take the
					idea from a start MVP on a planning board, initial spiking of new
					technologies, making the user stories on a Canban board and then
					actually creating the application. For the application, we implemented
					new features that we had not used before, including a google sign-in
					option, instant messaging and embedded video. The app was created as a
					PWA as we wanted the ability to have it downloaded onto a phone for a
					more native, real world application feel to it.
				</p>
				<a
					href="https://github.com/Mrs-DJ/tremolo"
					target="_blank"
					rel="noreferrer"
				>
					<h3>Tremolo Repo</h3>
				</a>
			</div>
			<br />
			<h2>More Projects in progress!</h2>
		</div>
		</div>
	);
}
