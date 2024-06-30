export async function getPost(postId: string) {
	const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}post/${postId}`)

	if (!res.ok) {
		throw new Error('Failed to fetch posts')
	}

	return res.json()
}

export async function geAuthor(userId: string) {
	const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}author/${userId}`)

	if (!res.ok) {
		throw new Error('Failed to fetch posts')
	}

	return res.json()
}
