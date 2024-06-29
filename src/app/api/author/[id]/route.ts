import { mockAuthors } from '@/constants/mockAuthors'

export async function GET(request: Request, { params }: { params: { id: string } }) {
	return Response.json(mockAuthors[Number(params.id)])
}
