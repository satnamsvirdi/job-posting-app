import "./Navbar.css";

const Navbar = () => {
	return (
		<nav className="navbar">
			<div className="brand">JobPosty</div>
			<ul className="nav-list">
				<li className="nav-list-item">
					<a className="nav-link" href="/">
						Link
					</a>
				</li>
				<li className="nav-list-item">
					<a className="nav-link" href="/">
						Link
					</a>
				</li>
				<li className="nav-list-item">
					<a className="nav-link" href="/">
						Link
					</a>
				</li>
			</ul>
			<div className="action-list">
				<a className="action-item" href="/login">
					Login
				</a>
				<a className="action-item" href="/register">
					Register
				</a>
			</div>
		</nav>
	);
};

export default Navbar;
