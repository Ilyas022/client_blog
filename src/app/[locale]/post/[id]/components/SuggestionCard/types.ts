import { StaticImageData } from 'next/image'

export interface SuggestionCardProps {
	id: string
	img: StaticImageData
	date: string
	userName: string
	title: string
	text: string
}
