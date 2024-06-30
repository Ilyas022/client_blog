import { StaticImageData } from 'next/image'

export interface PostItemProps {
	href: string
	img: StaticImageData
	category: string
	title: string
	text: string
}
