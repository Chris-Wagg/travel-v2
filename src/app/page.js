export default function Home() {
	return (
		<main className='content-grid'>
			<div className='background-container full-width full-height'></div>
			<header className='header-container header-row breakout'>
				<div className='title'>Title</div>
				<nav className='nav-container'>
					<button>one</button>
					<button>two</button>
					<button>three</button>
					<button>four</button>
					<button>five</button>
				</nav>
				<button className='login-button'>Login</button>
			</header>
			<section className='hero-text breakout hero-text-row'>
				<h1 className='title'>
					The definitive New Zealand travel experience
				</h1>
				<p className='sub-title'>
					With all the best Lord of the Rings filming locations
				</p>
			</section>
			<section className='central-nav-row'>
				<div className='central-nav '>
					<button>one</button>
					<button>two</button>
					<button>three</button>
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
