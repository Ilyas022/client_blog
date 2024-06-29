import { StaticImageData } from 'next/image'

export interface AuthorsSectionProps {
	authors: {
		fullName: string
		job: string
		icon: StaticImageData
		id: string
	}[]
}
