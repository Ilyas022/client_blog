import { mockPosts } from '@/constants/mockPosts'

export const getPost = (postId: string) => {
	return mockPosts.find((post) => post.id === postId)
}
