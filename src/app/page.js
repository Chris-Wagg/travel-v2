export default function Home() {
	return (
		<main className='content-grid'>
			<div className='background-container full-width full-height'></div>
			<header className='header-container header-row breakout'>
				<div className='title'>M.E. Travel</div>
				<nav className='nav-container smoke-background'>
					<button>About</button>
					<button>Services</button>
					<button>Tours</button>
					<button>Contact</button>
					<button>About</button>
				</nav>
				<div>
					<button className='login-button'>Login</button>
				</div>
			</header>
			<section className='hero-text breakout hero-text-row'>
				<h1 className='title'>
					The definitive New Zealand travel experience
				</h1>
				<p className='sub-title'>
					With all the best Lord of the Rings filming locations
				</p>
				<div className='central-nav smoke-background'>
					<div className='central-nav-buttons'>
						<button>Dates</button>
						<button>Guests</button>
						<button>Locations</button>
						<button>Guides</button>
					</div>
					<button className='white-button'>Search</button>
				</div>
			</section>
			<section className='stat-cards stat-card-row breakout'>
				<div className='single-card'>
					<p>100,000+</p>
					<p>Total customers</p>
				</div>
				<div className='single-card'>
					<p>08+</p>
					<p>Years of experience</p>
				</div>
				<div className='single-card'>
					<p>5,000+</p>
					<p>Tours run</p>
				</div>
				<div className='single-card'>
					<p>4.8</p>
					<p>Average rating</p>
				</div>
			</section>
		</main>
	)
}
