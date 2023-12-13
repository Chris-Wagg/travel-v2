export default function Home() {
	return (
		<>
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
				<section className='hero-text content hero-text-row'>
					<h1 className='title'>
						Middle Earth Travel : The definitive New Zealand travel
						experience
					</h1>
					<h2 className='sub-title'>
						With all the best Lord of the Rings filming locations
					</h2>
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
				<section className='stat-cards-container stat-card-row content'>
					<div className='single-card box-shadow'>
						<p>100,000+</p>
						<p>Total customers</p>
					</div>
					<div className='single-card box-shadow'>
						<p>08+</p>
						<p>Years of experience</p>
					</div>
					<div className='single-card box-shadow'>
						<p>5,000+</p>
						<p>Tours run</p>
					</div>
					<div className='single-card box-shadow'>
						<p>4.8</p>
						<p>Average rating</p>
					</div>
				</section>
			</main>
			<div className='locations-text-container'>
				<div>
					<p>Middle Earth Tourism</p>
					<h2>Best Locations</h2>
				</div>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Vestibulum viverra, elit sit.
				</p>
			</div>
			<section className='location-cards-container'>
				<div className='card background-1 box-shadow'>
					<p>The Shire</p>
					<p>Hobbit tours package</p>
				</div>
				<div className='card box-shadow'>
					<p>Location name</p>
					<p>tour name here</p>
				</div>
				<div className='card box-shadow'>
					<p>Location name</p>
					<p>tour name here</p>
				</div>
				<div className='card box-shadow'>
					<p>Location name</p>
					<p>tour name here</p>
				</div>
			</section>
		</>
	)
}
