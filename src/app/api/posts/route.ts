import { mockPosts } from '@/constants/mockPosts'

export async function GET() {
	return Response.json(mockPosts)
}
