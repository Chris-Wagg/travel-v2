import Navbar from '../components/Navbar'
import CenterNav from '../components/CenterNav'
import StatCards from '../components/StatCards'

export default function HeroSection() {
	return (
		<main className='content-grid'>
			<Navbar />
			<h1 className='title'>
				Middle Earth Travel, the truely authentic New Zealand Experience
			</h1>
			<p className='sub-title content'>
				For all the Lord of the Rings nerds
			</p>
			<CenterNav />
			<StatCards />
		</main>
	)
}
