export async function getPosts() {
	const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}posts`)

	if (!res.ok) {
		throw new Error('Failed to fetch posts')
	}

	return res.json()
}

export async function getAuthors() {
	const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}authors`)

	if (!res.ok) {
		throw new Error('Failed to fetch posts')
	}

	return res.json()
}
