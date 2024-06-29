import { StaticImageData } from 'next/image'

export interface CarouselProps {
	data: {
		id: string
		title: string
		author: { icon: StaticImageData; location: string; fullName: string }
	}[]
}
