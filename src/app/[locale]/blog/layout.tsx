import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Blog',
	description: 'Blog page of the blog',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return <> {children}</>
}
