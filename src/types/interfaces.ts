import { StaticImageData } from 'next/image'

export interface Author {
	id: string
	fullName: string
	img: null
	icon: StaticImageData
	intro: string
	desc: string
	job: string
	location: string
}
