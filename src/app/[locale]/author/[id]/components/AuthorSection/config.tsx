import FaceBookIcon from '@/assets/icons/FaceBookIcon'
import InstagramIcon from '@/assets/icons/InstagramIcon'
import LinkedInIcon from '@/assets/icons/LinkedInIcon'
import TwitterIcon from '@/assets/icons/TwitterIcon'
import { Author } from '@/types/interfaces'

export const socialNetworks = [
	<FaceBookIcon key={1} />,
	<TwitterIcon key={2} />,
	<InstagramIcon key={3} />,
	<LinkedInIcon key={4} />,
]

export async function getAuthor(userId: string): Promise<Author> {
	const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}author/${userId}`)
	const data = await res.json()

	if (!res.ok) {
		throw new Error('Failed to fetch posts')
	}

	return data
}
