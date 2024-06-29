import { mockPosts } from '@/constants/mockPosts'

export async function GET(request: Request, { params }: { params: { id: string } }) {
	return Response.json(mockPosts.filter((post) => post.author === params.id))
}
