import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import '../globals.scss'
import { RootLayoutProps } from '@/types/interfaces'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Home',
	description: 'Home page of the blog',
}

export default async function RootLayout({ children, params: { locale } }: RootLayoutProps) {
	const messages = await getMessages()
	return (
		<html lang={locale}>
			<body className={inter.className}>
				<NextIntlClientProvider messages={messages}>
					<div id="root">
						<Header />
						{children}
						<Footer />
					</div>
				</NextIntlClientProvider>
			</body>
		</html>
	)
}
