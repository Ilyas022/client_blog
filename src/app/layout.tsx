import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import './globals.scss'
// import '@/styles/theme.scss'
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Home',
	description: 'Home page of the blog',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<div id="root">
					<Header />
					{children}
				</div>
			</body>
		</html>
	)
}
