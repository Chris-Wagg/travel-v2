import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-poppins',
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export const metadata = {
	title: 'M.E. Travel',
	description: 'NZ travel guide',
}

export default function RootLayout({ children }) {
	return (
		<html className={`${poppins.variable}`}>
			<body>{children}</body>
		</html>
	)
}
