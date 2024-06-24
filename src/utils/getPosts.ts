import { mockPosts } from '@/constants/mockPosts'

export const getPosts = (authorId: string) => {
	return mockPosts.filter((post) => post.author === authorId)
}
