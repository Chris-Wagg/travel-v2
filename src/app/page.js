export default function Home() {
	return (
		<main className='content-grid'>
			<header className='header-container header-row'>
				<div>Title</div>
				<nav className='nav-container'>
					<button>one</button>
					<button>two</button>
					<button>three</button>
					<button>four</button>
					<button className='white-button'>five</button>
				</nav>
				<button className='login-button'>Login</button>
			</header>
			<section className='hero-text breakout hero-text-row'>
				<h1>this is hero text that will sit in the breakout area</h1>
				<p>
					this is also hero text but smaller taht will also sit in the
					breakout hopefully if it is long enough
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
