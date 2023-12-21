export default function Home() {
	return (
		<>
			<main className='content-grid'>
				<div className='hero-background background-position full-width full-height'></div>
				<header className='header-container header-row breakout'>
					<div className='hero-title'>M.E. Travel</div>
					<nav className='top-nav-container smoke-background'>
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
						<p>10k +</p>
						<p>Total customers</p>
					</div>
					<div className='single-card box-shadow'>
						<p>08+</p>
						<p>Years of experience</p>
					</div>
					<div className='single-card box-shadow'>
						<p>5k +</p>
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
				<div className='location-card card-background-1 background-position  box-shadow'>
					<p>The Shire</p>
					<p>Hobbit tours package</p>
				</div>
				<div className='location-card box-shadow card-background-2 background-position '>
					<p>Mount Doom</p>
					<p>North Island tours</p>
				</div>
				<div className='location-card box-shadow card-background-3 background-position '>
					<p>River Anduin</p>
					<p>River tours package</p>
				</div>
				<div className='location-card box-shadow card-background-4 background-position '>
					<p>Mordor</p>
					<p>Hobbit walking tours</p>
				</div>
			</section>
			<section className='how-to-container'>
				<div className='how-to-image background-position  image-container'>
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
										fillRule='evenodd'
										clipRule='evenodd'
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
										fillRule='evenodd'
										clipRule='evenodd'
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
										fillRule='evenodd'
										clipRule='evenodd'
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
										fillRule='evenodd'
										clipRule='evenodd'
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
					<div className='box-shadow review-image-one background-position '>
						<div className='review-info-top'>
							<p className='smoke-background'>5 days</p>
							<p className='smoke-background'>4.8</p>
						</div>
						<div className='review-info-bottom smoke-background'>
							<p>1st Jan - 5th Jan</p>
							<h4>Queenstown tour package: $123</h4>
						</div>
					</div>
					<div className='box-shadow review-image-two background-position '>
						<div className='review-info-top'>
							<p className='smoke-background'>7 days</p>
							<p className='smoke-background'>4.7</p>
						</div>
						<div className='review-info-bottom smoke-background'>
							<p>1st Jan - 7th Jan</p>
							<h4>River tours package: $123</h4>
						</div>
					</div>
					<div className='box-shadow review-image-three background-position '>
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
			<section className='testimonial-container box-shadow'>
				<div className='testimonial-left'>
					<div className='testimonial-subject'>
						<div className='testimonial-icon'>
							<svg
								id='SvgjsSvg1001'
								width='48'
								height='48'
								xmlns='http://www.w3.org/2000/svg'
								version='1.1'>
								<defs id='SvgjsDefs1002'></defs>
								<g id='SvgjsG1008'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										viewBox='0 0 64 64'
										width='48'
										height='48'>
										<path
											d='M32.112 43.603c-2.663 0-5.144-1.014-7.173-2.931a.545.545 0 01.747-.791c1.824 1.724 4.046 2.635 6.426 2.635a9.067 9.067 0 006.377-2.653.543.543 0 11.77.768 10.159 10.159 0 01-7.147 2.972zM37.363 45.919a.544.544 0 01-.234-1.036c2.664-1.267 2.46-3.29 2.45-3.375a.547.547 0 01.472-.606.542.542 0 01.607.465c.016.117.344 2.879-3.062 4.498a.54.54 0 01-.233.054zM27.505 57.004a.545.545 0 01-.516-.718c.132-.393 3.272-9.615 7.212-10.558a.544.544 0 01.253 1.058c-2.789.668-5.59 7.334-6.434 9.847a.542.542 0 01-.515.371z'
											fill='#000000'
											className='color000 svgShape'></path>
										<path
											d='M58.617 59.795H5.383a.959.959 0 0 1-.933-1.188c.779-3.195 2.714-10.747 3.863-11.866.491-.478 5.721-2.627 15.55-6.39-2.064-2.458-3.378-5.78-3.475-8.892-1.349-1.631-1.354-3.424-.984-4.738-3.773-.619-6.327-3.665-7.515-6.535-.73-1.762-1.154-4.001-.155-4.999a2.457 2.457 0 0 1 1.77-.74c1.72 0 3.627 1.716 5.098 3.42.509-5.005 1.943-13.556 5.784-13.556.874 0 1.759.442 2.631 1.314 3.454 3.455 6.963 3.457 10.42 0 .942-.943 1.885-1.42 2.801-1.42 3.972 0 5.214 8.833 5.599 13.959 1.478-1.64 3.656-3.65 5.45-3.65a2.27 2.27 0 0 1 1.639.673c1.038 1.038.577 3.41-.133 5.125-.591 1.427-2.819 5.828-7.966 6.509.294 1.241.222 2.941-1.046 4.596-.086 3.101-1.318 6.416-3.256 8.872 4.599 1.689 14.4 5.359 15.565 6.382 1.22 1.073 2.66 7.804 3.429 11.833a.96.96 0 0 1-.902 1.291zm-52.006-1.92H57.44c-.879-4.401-2.065-9.117-2.639-9.783-.869-.701-10.033-4.217-16.253-6.482a.959.959 0 0 1-.352-1.579c2.536-2.544 3.671-6.333 3.671-8.958 0-.228.081-.449.229-.622 1.76-2.066.563-3.957.551-3.976a.96.96 0 0 1 .804-1.484c3.936 0 6.058-2.637 6.972-4.209 1.241-2.133 1.301-3.946 1.114-4.274-.037-.029-.108-.072-.25-.072-1.296 0-4.048 2.868-5.5 4.806a.959.959 0 0 1-1.728-.538c-.273-7.039-1.874-14.576-3.822-14.576-.378 0-.89.304-1.443.858-4.203 4.203-8.934 4.201-13.135 0-.492-.492-.933-.752-1.274-.752-1.886 0-3.628 7.349-4.073 14.212a.962.962 0 0 1-1.648.605 1.963 1.963 0 0 1-.122-.151c-1.922-2.667-3.994-4.53-5.038-4.53a.535.535 0 0 0-.413.177c-.141.288-.028 2.133 1.281 4.314.909 1.515 2.955 4.056 6.441 4.056a.96.96 0 0 1 .803 1.487c-.136.214-1.307 2.187.426 4.032a.96.96 0 0 1 .26.657c0 3.198 1.531 6.711 3.899 8.949a.959.959 0 0 1-.317 1.594c-5.753 2.196-15.128 5.859-16.258 6.517-.547.747-1.917 5.374-3.015 9.722z'
											fill='#000000'
											className='color000 svgShape'></path>
										<path
											d='M32.646 26.632c-4.483 0-9.034-.198-12.13-.588a.545.545 0 01-.472-.608.548.548 0 01.608-.472c5.83.736 16.879.782 22.736.096a.545.545 0 01.126 1.081c-2.814.328-6.813.491-10.868.491zM32.497 24.065c-9.321 0-13.512-2.887-13.687-3.009a.544.544 0 01.627-.889c.04.028 4.124 2.811 13.06 2.811 9.106 0 12.383-2.484 12.415-2.509a.543.543 0 11.678.85c-.14.112-3.539 2.746-13.093 2.746zM44.784 18.368H19.671a.544.544 0 110-1.088h25.114a.544.544 0 11-.001 1.088zM28.003 59.379a.543.543 0 01-.538-.468c-.005-.035-.516-3.563-2.428-8.064-1.094-2.575-4.323-7.214-4.355-7.261a.544.544 0 01.892-.622c.135.194 3.326 4.781 4.464 7.459 1.973 4.642 2.483 8.189 2.504 8.338a.544.544 0 01-.463.614c-.026.002-.051.004-.076.004zM37.257 59.379a.544.544 0 01-.539-.619c.018-.132.47-3.274 2.164-7.516a.543.543 0 111.01.404c-1.642 4.11-2.093 7.231-2.097 7.263a.544.544 0 01-.538.468zM41.044 48.635a.543.543 0 01-.472-.813c1.404-2.468 3.35-5.149 3.369-5.176a.544.544 0 11.88.64c-.019.026-1.93 2.659-3.303 5.073a.545.545 0 01-.474.276zM13.821 59.379h-.011a.543.543 0 01-.533-.555l.274-13.478a.529.529 0 01.555-.533.543.543 0 01.533.555l-.274 13.478a.544.544 0 01-.544.533zM51.313 59.379a.542.542 0 01-.543-.531l-.299-13.209a.543.543 0 01.532-.556c.283.004.549.231.556.531l.299 13.209a.543.543 0 01-.532.556h-.013zM35.75 55.466h-.01a.544.544 0 01-.46-.27c-.518-.706-3.7-5.199-2.542-7.499.431-.856 1.341-1.289 2.705-1.289.51 0 .941.211 1.247.611 1.137 1.487.243 5.624-.391 7.957l-.018.069a.55.55 0 01-.531.421zm-.307-7.972c-.919 0-1.503.233-1.733.691-.561 1.115.636 3.617 1.811 5.441.712-2.969.838-5.251.305-5.948a.433.433 0 00-.383-.184z'
											fill='#000000'
											className='color000 svgShape'></path>
										<path
											d='M42.125 52.656c-2.643 0-5.594-3.256-6.188-5.018-.279-.828-.022-1.241.243-1.443.612-.464 1.235-.7 1.853-.7 3.105 0 4.65 5.814 4.817 6.478a.544.544 0 0 1-.488.675 3.702 3.702 0 0 1-.237.008zm-5.22-5.643c.006.244.298.976 1.076 1.927.872 1.066 2.277 2.29 3.606 2.569-.568-1.795-1.9-4.926-3.552-4.926-.356 0-.736.145-1.13.43z'
											fill='#000000'
											className='color000 svgShape'></path>
										<path
											d='M35.837 47.014c-1.102 0-1.965-.661-1.965-1.504s.863-1.504 1.965-1.504 1.965.661 1.965 1.504-.863 1.504-1.965 1.504zm0-1.92c-.544 0-.877.269-.877.416 0 .147.333.416.877.416s.877-.269.877-.416c0-.146-.333-.416-.877-.416z'
											fill='#000000'
											className='color000 svgShape'></path>
										<path
											d='M31.708 46.403c-2.611 0-4.497-.626-5.627-1.87-1.516-1.669-1.045-3.788-1.024-3.877a.544.544 0 0 1 1.06.246c-.015.066-.357 1.669.779 2.909 1.229 1.343 3.805 1.798 7.448 1.313a.543.543 0 1 1 .143 1.079c-1.001.133-1.929.2-2.779.2z'
											fill='#000000'
											className='color000 svgShape'></path>
									</svg>
								</g>
							</svg>
						</div>
						<div>
							<div className='name'>Cowdoy</div>
							<div className='sub-text'>CEO Cowdoy</div>
						</div>
					</div>
					<div className='arrows'>
						<div>
							<svg
								width='24'
								height='24'
								viewBox='0 0 24 24'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'>
								<path
									d='M20.3284 11.0001V13.0001L7.50011 13.0001L10.7426 16.2426L9.32842 17.6568L3.67157 12L9.32842 6.34314L10.7426 7.75735L7.49988 11.0001L20.3284 11.0001Z'
									fill='currentColor'
								/>
							</svg>
						</div>
						<div>
							<svg
								width='24'
								height='24'
								viewBox='0 0 24 24'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'>
								<path
									d='M15.0378 6.34317L13.6269 7.76069L16.8972 11.0157L3.29211 11.0293L3.29413 13.0293L16.8619 13.0157L13.6467 16.2459L15.0643 17.6568L20.7079 11.9868L15.0378 6.34317Z'
									fill='currentColor'
								/>
							</svg>
						</div>
					</div>
				</div>
				<div className='testimonial-right'>
					{`"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
					do eiusmod tempor incididunt ut labore et dolore magna
					aliqua. Scelerisque fermentum dui faucibus in ornare quam
					viverra. Cursus eget nunc scelerisque viverra mauris.
					Tristique senectus et netus et."`}
				</div>
			</section>
			<section className='blog-container'>
				<div className='blog-title'>
					<h2>Our blog</h2>
					<p>our best travel momories</p>
				</div>
				<div className='blog-cards-container '>
					<div className='blog-card box-shadow'>
						<div className='blog-image blog-image-1 background-position '></div>
						<div className='blog-card-text'>
							<p>Jan 1, 2023</p>
							<h3>
								{`You wouldn't belive what our most popular tours
								where!`}
							</h3>
							<p>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Pellentesque tellus augue,
								semper id suscipit nec, mattis sit amet urna.
							</p>
						</div>
					</div>
					<div className='blog-card box-shadow'>
						<div className='blog-image-2 background-position '></div>
						<div className='blog-card-text'>
							<p>Jan 1, 2023</p>
							<h3>
								{`You wouldn't belive what our most popular tours
								where!`}
							</h3>
							<p>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Pellentesque tellus augue,
								semper id suscipit nec, mattis sit amet urna.
							</p>
						</div>
					</div>
				</div>
				<button className='see-more-button'>See more</button>
			</section>
			<footer className='footer-container'>
				<section className='footer-left'>
					<div className='footer-button-container'>
						<h4>About</h4>
						<button>About us</button>
						<button>Blog</button>
						<button>Careers</button>
						<button>Jobs</button>
						<button>In press</button>
						<button>Gallery</button>
					</div>
					<div className='footer-button-container'>
						<h4 className='support-section'>Support</h4>
						<button>Contact us</button>
						<button>Online chat</button>
						<button>Submit a ticket</button>
						<button>Support lines</button>
						<button>Call center</button>
						<button>Report an issue</button>
					</div>
					<div className='footer-button-container'>
						<h4 className='faq-section'>{`FAQ's`}</h4>
						<button>Accounts</button>
						<button>Booking</button>
						<button>Payments</button>
						<button>Refunds</button>
						<button>Privacy policy</button>
						<button>Terms & conditions</button>
					</div>
				</section>
				<section className='footer-right'>
					<h4>Newsletter</h4>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Vivamus finibus aliquam erat vel rutrum.
					</p>

					<div className='email-input'>
						<input
							type='email'
							id='email'
							name='email'
							placeholder='Enter your email here'
						/>
						<button>Submit</button>
					</div>

					<div className='socials-buttons'>
						<button aria-label='Facebook'>
							<svg
								width='24'
								height='24'
								viewBox='0 0 24 24'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'>
								<path
									d='M9.19795 21.5H13.198V13.4901H16.8021L17.198 9.50977H13.198V7.5C13.198 6.94772 13.6457 6.5 14.198 6.5H17.198V2.5H14.198C11.4365 2.5 9.19795 4.73858 9.19795 7.5V9.50977H7.19795L6.80206 13.4901H9.19795V21.5Z'
									fill='white'
								/>
							</svg>
						</button>
						<button aria-label='Twitter'>
							<svg
								width='24'
								height='24'
								viewBox='0 0 24 24'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'>
								<path
									fillRule='evenodd'
									clipRule='evenodd'
									d='M8 3C9.10457 3 10 3.89543 10 5V8H16C17.1046 8 18 8.89543 18 10C18 11.1046 17.1046 12 16 12H10V14C10 15.6569 11.3431 17 13 17H16C17.1046 17 18 17.8954 18 19C18 20.1046 17.1046 21 16 21H13C9.13401 21 6 17.866 6 14V5C6 3.89543 6.89543 3 8 3Z'
									fill='white'
								/>
							</svg>
						</button>
						<button aria-label='Instagram'>
							<svg
								width='24'
								height='24'
								viewBox='0 0 24 24'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'>
								<path
									fillRule='evenodd'
									clipRule='evenodd'
									d='M12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7ZM9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12Z'
									fill='white'
								/>
								<path
									d='M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z'
									fill='white'
								/>
								<path
									fillRule='evenodd'
									clipRule='evenodd'
									d='M5 1C2.79086 1 1 2.79086 1 5V19C1 21.2091 2.79086 23 5 23H19C21.2091 23 23 21.2091 23 19V5C23 2.79086 21.2091 1 19 1H5ZM19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z'
									fill='white'
								/>
							</svg>
						</button>
					</div>
					<p className='copyright'>
						Copyright M.E. Travel 2023, all rights reserved
					</p>
				</section>
			</footer>
		</>
	)
}
