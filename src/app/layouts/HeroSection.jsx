import Navbar from '../components/Navbar'

export default function HeroSection() {
	return (
		<main>
			<Navbar />
			<section className='hero-content'>
				<h1 className='title'>
					Middle Earth Travel, the truely authentic New Zealand
					Experience
				</h1>
				<p className='sub-title'>For all the Lord of the Rings nerds</p>
			</section>
		</main>
	)
}
