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
					<p className='sub-title'>
						With all the best Lord of the Rings filming locations
					</p>
					<div className='central-nav smoke-background'>
						<div className='central-nav-buttons'>
							<button>Dates</button>
							<button>Guests</button>
							<button>Locations</button>
							<button>Guides</button>
							<button className='white-button'>Search</button>
						</div>
					</div>
				</section>
				<section className='stat-cards-container stat-card-row content'>
					{/* TO DO : fix these so they wrap */}
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
				{/* TO DO : fix the wrapping so it wraps 2 at a time so you dont end up with a row of 1 and 3 */}
				<div className='card card-background-1 box-shadow'>
					<p>The Shire</p>
					<p>Hobbit tours package</p>
				</div>
				<div className='card box-shadow card-background-2'>
					<p>Mount Doom</p>
					<p>North Island tours</p>
				</div>
				<div className='card box-shadow card-background-3'>
					<p>River Anduin</p>
					<p>River tours package</p>
				</div>
				<div className='card box-shadow card-background-4'>
					<p>Mordor</p>
					<p>Hobbit walking tours</p>
				</div>
			</section>
			<section className='how-to-container'>
				{/* TO DO : fix the image scaling to minmax */}
				<div className='how-to-image image-container'>
					<div className='central-nav smoke-background'>
						<div className='central-nav-buttons'>
							<button>Dates</button>
							<button>Guests</button>
							<button>Locations</button>
							<button>Guides</button>
							<button className='white-button'>Search</button>
						</div>
					</div>
					<p className='image-overlay-text'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Nunc ultrices dolor nisi. Etiam efficitur ultrices
						ornare.
					</p>
				</div>
				<section className='how-to-text-container'>
					<div>
						<h2>How it works</h2>
						<p>One click and done!</p>
					</div>
					<div className='how-to-card-container'>
						<div className='how-to-card box-shadow'>
							<div className='icon'>
								<svg
									width='24'
									height='24'
									viewBox='0 0 24 24'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'>
									<path
										fill-rule='evenodd'
										clip-rule='evenodd'
										d='M18.319 14.4326C20.7628 11.2941 20.542 6.75347 17.6569 3.86829C14.5327 0.744098 9.46734 0.744098 6.34315 3.86829C3.21895 6.99249 3.21895 12.0578 6.34315 15.182C9.22833 18.0672 13.769 18.2879 16.9075 15.8442C16.921 15.8595 16.9351 15.8745 16.9497 15.8891L21.1924 20.1317C21.5829 20.5223 22.2161 20.5223 22.6066 20.1317C22.9971 19.7412 22.9971 19.1081 22.6066 18.7175L18.364 14.4749C18.3493 14.4603 18.3343 14.4462 18.319 14.4326ZM16.2426 5.28251C18.5858 7.62565 18.5858 11.4246 16.2426 13.7678C13.8995 16.1109 10.1005 16.1109 7.75736 13.7678C5.41421 11.4246 5.41421 7.62565 7.75736 5.28251C10.1005 2.93936 13.8995 2.93936 16.2426 5.28251Z'
										fill='currentColor'
									/>
								</svg>
							</div>
							<div className='how-to-card-text'>
								<h3>Find your destination</h3>
								<p>
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit.
								</p>
							</div>
						</div>
						<div className='how-to-card box-shadow'>
							<div className='icon'>
								<svg
									width='24'
									height='24'
									viewBox='0 0 24 24'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'>
									<path
										fill-rule='evenodd'
										clip-rule='evenodd'
										d='M18.319 14.4326C20.7628 11.2941 20.542 6.75347 17.6569 3.86829C14.5327 0.744098 9.46734 0.744098 6.34315 3.86829C3.21895 6.99249 3.21895 12.0578 6.34315 15.182C9.22833 18.0672 13.769 18.2879 16.9075 15.8442C16.921 15.8595 16.9351 15.8745 16.9497 15.8891L21.1924 20.1317C21.5829 20.5223 22.2161 20.5223 22.6066 20.1317C22.9971 19.7412 22.9971 19.1081 22.6066 18.7175L18.364 14.4749C18.3493 14.4603 18.3343 14.4462 18.319 14.4326ZM16.2426 5.28251C18.5858 7.62565 18.5858 11.4246 16.2426 13.7678C13.8995 16.1109 10.1005 16.1109 7.75736 13.7678C5.41421 11.4246 5.41421 7.62565 7.75736 5.28251C10.1005 2.93936 13.8995 2.93936 16.2426 5.28251Z'
										fill='currentColor'
									/>
								</svg>
							</div>
							<div className='how-to-card-text'>
								<h3>Book a ticket</h3>
								<p>
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit.
								</p>
							</div>
						</div>
						<div className='how-to-card box-shadow'>
							<div className='icon'>
								<svg
									width='24'
									height='24'
									viewBox='0 0 24 24'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'>
									<path
										fill-rule='evenodd'
										clip-rule='evenodd'
										d='M18.319 14.4326C20.7628 11.2941 20.542 6.75347 17.6569 3.86829C14.5327 0.744098 9.46734 0.744098 6.34315 3.86829C3.21895 6.99249 3.21895 12.0578 6.34315 15.182C9.22833 18.0672 13.769 18.2879 16.9075 15.8442C16.921 15.8595 16.9351 15.8745 16.9497 15.8891L21.1924 20.1317C21.5829 20.5223 22.2161 20.5223 22.6066 20.1317C22.9971 19.7412 22.9971 19.1081 22.6066 18.7175L18.364 14.4749C18.3493 14.4603 18.3343 14.4462 18.319 14.4326ZM16.2426 5.28251C18.5858 7.62565 18.5858 11.4246 16.2426 13.7678C13.8995 16.1109 10.1005 16.1109 7.75736 13.7678C5.41421 11.4246 5.41421 7.62565 7.75736 5.28251C10.1005 2.93936 13.8995 2.93936 16.2426 5.28251Z'
										fill='currentColor'
									/>
								</svg>
							</div>
							<div className='how-to-card-text'>
								<h3>Make the payment</h3>
								<p>
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit.
								</p>
							</div>
						</div>
						<div className='how-to-card box-shadow'>
							<div className='icon'>
								<svg
									width='24'
									height='24'
									viewBox='0 0 24 24'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'>
									<path
										fill-rule='evenodd'
										clip-rule='evenodd'
										d='M18.319 14.4326C20.7628 11.2941 20.542 6.75347 17.6569 3.86829C14.5327 0.744098 9.46734 0.744098 6.34315 3.86829C3.21895 6.99249 3.21895 12.0578 6.34315 15.182C9.22833 18.0672 13.769 18.2879 16.9075 15.8442C16.921 15.8595 16.9351 15.8745 16.9497 15.8891L21.1924 20.1317C21.5829 20.5223 22.2161 20.5223 22.6066 20.1317C22.9971 19.7412 22.9971 19.1081 22.6066 18.7175L18.364 14.4749C18.3493 14.4603 18.3343 14.4462 18.319 14.4326ZM16.2426 5.28251C18.5858 7.62565 18.5858 11.4246 16.2426 13.7678C13.8995 16.1109 10.1005 16.1109 7.75736 13.7678C5.41421 11.4246 5.41421 7.62565 7.75736 5.28251C10.1005 2.93936 13.8995 2.93936 16.2426 5.28251Z'
										fill='currentColor'
									/>
								</svg>
							</div>
							<div className='how-to-card-text'>
								<h3>Explore your destination</h3>
								<p>
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit.
								</p>
							</div>
						</div>
					</div>
				</section>
			</section>
			<section className='reviews-container'>
				<div className='reviews-text'>
					<div className='reviews-titles'>
						<h2>Tour Packages</h2>
						<p>Our top tour destinations</p>
					</div>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					</p>
				</div>
				<div className='review-images-container'>
					<div className='box-shadow review-image-one'>
						<div className='review-info-top'>
							<p className='smoke-background'>5 days</p>
							<p className='smoke-background'>4.8</p>
						</div>
						<div className='review-info-bottom smoke-background'>
							<p>1st Jan - 5th Jan</p>
							<h4>Queenstown tour package: $123</h4>
						</div>
					</div>
					<div className='box-shadow review-image-two'>
						<div className='review-info-top'>
							<p className='smoke-background'>7 days</p>
							<p className='smoke-background'>4.7</p>
						</div>
						<div className='review-info-bottom smoke-background'>
							<p>1st Jan - 7th Jan</p>
							<h4>River tours package: $123</h4>
						</div>
					</div>
					<div className='box-shadow review-image-three'>
						<div className='review-info-top'>
							<p className='smoke-background'>3 days</p>
							<p className='smoke-background'>4.9</p>
						</div>
						<div className='review-info-bottom smoke-background'>
							<p>1st Jan - 3rd Jan</p>
							<h4>National parks tour package: $123</h4>
						</div>
					</div>
				</div>
			</section>
			<section className='testimonial-container'></section>
		</>
	)
}
