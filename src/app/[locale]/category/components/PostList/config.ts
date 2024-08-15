import { Post } from '@/types/interfaces'

const filterPostsByCategory = (posts: Post[], currentCategory: string) => {
	if (!currentCategory) return posts

	return posts.filter((post) => currentCategory.includes(post.category.id))
}

const filterPostsByTag = (posts: Post[], currentTag: string) => {
	if (!currentTag) return posts

	return posts.filter((post) => post.tags.some((tag) => currentTag.includes(tag)))
}

const filterPostsBySearch = (posts: Post[], currentSearch: string) => {
	const lowercasedSearch = currentSearch.toLowerCase()
	return posts.filter((post) => {
		return !!(
			post.title.toLowerCase().includes(lowercasedSearch) ||
			post.text.toLowerCase().includes(lowercasedSearch)
		)
	})
}

const translatePosts = (
	posts: Post[],
	tText: (text: string) => string,
	tCategory: (category: string) => string
) => {
	return posts.map((post) => ({
		...post,
		category: { ...post.category, name: tCategory(post.category.name) },
		title: tText(post.title),
		text: tText(post.text),
	}))
}

export const processPosts = (
	posts: Post[],
	currentCategory: string,
	currentTag: string,
	currentSearch: string,
	tText: (text: string) => string,
	tCategory: (category: string) => string
) => {
	const filteredByCategory = filterPostsByCategory(posts, currentCategory)
	const filteredByTag = filterPostsByTag(filteredByCategory, currentTag)
	const translatedPosts = translatePosts(filteredByTag, tText, tCategory)
	return filterPostsBySearch(translatedPosts, currentSearch)
}
