import Navbar from '../components/Navbar'
import CenterNav from '../components/CenterNav'

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
				<CenterNav />
			</section>
		</main>
	)
}
