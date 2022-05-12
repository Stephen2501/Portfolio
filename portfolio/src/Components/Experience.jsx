import "../Styles/Experience.css";

export default function About() {
	return (
		<div className="experience">
			<h1>Experience</h1>
            <br/>
			<div class="experience-card">
				<div class="experience-card-company">Northcoders</div>
				<div class="experience-card-role">Software development bootcamp</div>
				<div class="experience-card-date">Jan 2022 - April 2022</div>
                <br/>
				<div class="experience-card-description">
					In January of 2022 i began my official education in software
					development to become a full stack developer. Over the 13 weeks i
					spent at Northcoders, i learnt the fundamentals of Javascript, as well
					as learning how to code a back-end database and API and the front-end
					website on React that would utilise the API. I also learnt the how to
					tackle a full project process, from the initial planning of an MVP,
					right the way through to presenting the completed application.
				</div>
			</div>
			<br />
			<div class="experience-card">
				<div class="experience-card-company">Turning Point</div>
				<div class="experience-card-role">Recruitment Coordinator</div>
				<div class="experience-card-date">Nov 2018 - Jan 2022</div>
                <br/>
				<div class="experience-card-description">
					This role had me managing both the implementation and overseeing of
					various recruitment based projects including: ATS (applicant tracking
					system), including making necessary changes to help to the system to
					streamline the recruitment process and pull data from it for reports.
					Automated job advertising platform, for managing the recruitment
					budget and allocating it where needed. All job boards used by the
					recruitment team, including Indeed and NHS jobs. This involved
					liaising with company reps to help strategise the best plan of action
					for recruiting in a post-covid environment in the health and social
					care sector. A big aspect of my role included being adaptable to any
					small or large issues and requests that might come up, including
					pulling reports, and assisting in recruitment needs when vacancy
					numbers rapidly rose.
				</div>
			</div>
		</div>
	);
}
