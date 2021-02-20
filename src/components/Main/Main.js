import "./Main.css";

const Main = () => {
	return (
		<main>
			<section className="hero">
				<form className="form-control">
					<div className="input-wrapper">
						<label htmlFor="job-title">Job Title</label>
						<input
							type="text"
							name="job-title"
							id="job-title"
							placeholder="Web Developer"
						/>
					</div>
					<div className="input-wrapper">
						<label htmlFor="location">Location</label>
						<input
							type="text"
							name="location"
							id="location"
							placeholder="New York"
						/>
					</div>
					<div className="submit-button">
						<button type="submit">Search</button>
					</div>
				</form>
			</section>
			<section className="popular-jobs">
				<h2>Popular Jobs</h2>
				<div>
					<JobCard />
					<JobCard />
					<JobCard />
				</div>
			</section>
		</main>
	);
};

const JobCard = () => {
	return (
		<>
			<div className="job-card">
				<div>
					<h3 className="job-title">Web Developer</h3>
					<p>India, Inc.</p>
					<p>
						Lorem ipsum dolor sit amet conquerar. Lorem ipsum dolor
						sit amet conquerar. Lorem ipsum dolor sit amet
						conquerar.
					</p>
					<a href="#" className="view-details-button">
						View details
					</a>
				</div>
				<div>
					<button className="apply-button">Apply</button>
				</div>
			</div>
		</>
	);
};

export default Main;
