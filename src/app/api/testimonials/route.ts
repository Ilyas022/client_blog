import { mockTestimonials } from '@/constants/mockTestimonials'

export async function GET() {
	return Response.json(mockTestimonials)
}
