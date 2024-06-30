export async function getPosts(userId: string) {
	const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}postbyuserid/${userId}`)

	if (!res.ok) {
		throw new Error('Failed to fetch posts')
	}

	return res.json()
}
