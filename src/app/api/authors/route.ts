import { mockAuthors } from '@/constants/mockAuthors'

export async function GET() {
	return Response.json(mockAuthors)
}
