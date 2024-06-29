import { StaticImageData } from 'next/image'

export interface Author {
	id: string
	fullName: string
	img: null | StaticImageData
	icon: StaticImageData
	intro: string
	desc: string
	job: string
	location: string
}

export interface RootLayoutProps {
	readonly children: React.ReactNode
	readonly params: {
		readonly locale: string
	}
}

export interface Post {
	id: string
	img: StaticImageData
	author: string
	category: {
		id: string
		name: string
	}
	title: string
	text: string
	date: string
	tags: string[]
}

export interface Testimonial {
	id: string
	author: string
	title: string
}
