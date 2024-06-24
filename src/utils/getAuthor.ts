import { mockAuthors } from '@/constants/mockAuthors'

export const getAuthor = (id: string) => {
	return mockAuthors.find((author) => author.id === id)
}
