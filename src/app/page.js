export default function Home() {
	return (
		<main className='content-grid'>
			<div className='background-container full-width full-height'></div>
			<header className='header-container header-row breakout'>
				<div className='title'>M.E. Travel</div>
				<nav className='nav-container smoke-background'>
					<button>one</button>
					<button>two</button>
					<button>three</button>
					<button>four</button>
					<button>five</button>
					<button className='login-button'>Login</button>
				</nav>
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
						<button>one</button>
						<button>two</button>
						<button>three</button>
					</div>
					<button className='white-button'>search</button>
				</div>
			</section>
			<section className='stat-cards stat-card-row'>
				<div className='single-card'>
					<p>number</p>
					<p>text under number</p>
				</div>
				<div className='single-card'>
					<p>number</p>
					<p>text under number</p>
				</div>
				<div className='single-card'>
					<p>number</p>
					<p>text under number</p>
				</div>
				<div className='single-card'>
					<p>number</p>
					<p>text under number</p>
				</div>
			</section>
		</main>
	)
}
