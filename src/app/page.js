export default function Home() {
	return (
		<main className='content-grid'>
			<header className='header-container'>
				<p>M.E. Travel</p>
				<nav className='top-nav-controls'>
					<button>About</button>
					<button>Services</button>
					<button>Tours</button>
					<button>Contact</button>
					<button>Contact</button>
				</nav>
				<button className='login-button'>Login</button>
			</header>
			<h1 className='title breakout'>
				Middle Earth Travel, the truely authentic New Zealand Experience
			</h1>
			<p className='sub-title'>For all the Lord of the Rings nerds</p>
			<nav className='central-nav-controls'>
				<div>
					<button>date</button>
				</div>
				<div>
					<button>Guests</button>
				</div>
				<div>
					<button>Guests</button>
				</div>
				<div>
					<button className='search-button'>Search</button>
				</div>
			</nav>
			<section className='stat-cards'>
				<div>
					<p>number</p>
					<p>text</p>
				</div>
				<div>
					<p>number</p>
					<p>text</p>
				</div>
				<div>
					<p>number</p>
					<p>text</p>
				</div>
				<div>
					<p>number</p>
					<p>text</p>
				</div>
			</section>
		</main>
	)
}
