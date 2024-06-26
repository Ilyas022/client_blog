'use client'

import Image from 'next/image'
import { useSearchParams } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { useEffect, useMemo, useState } from 'react'

import { Post } from '@/types/interfaces'

import css from './PostList.module.scss'

function PostList() {
	const searchParams = useSearchParams()
	const tCategory = useTranslations('Categories')
	const tPost = useTranslations('Posts')

	const params = new URLSearchParams(searchParams)
	const currentCategory = params.get('category') || ''
	const currentSearch = params.get('search') || ''
	const currentTag = params.get('tag') || ''
	const [posts, setPosts] = useState<Post[]>()

	useEffect(() => {
		const getData = async () => {
			const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}posts`)
			const data = await res.json()
			setPosts(data)
		}
		getData()
	}, [])
	const postsData = useMemo(() => {
		if (!posts?.length) return
		const filteredByCategory = currentCategory
			? posts.filter((post) => currentCategory.includes(post.category.id))
			: posts

		const filteredByTagPosts = currentTag
			? filteredByCategory.filter((post) => {
					return post.tags.some((tag) => currentTag.includes(tag))
				})
			: filteredByCategory

		const filteredPosts = filteredByTagPosts.filter((post) => {
			return !!(
				post.title.toLowerCase().includes(currentSearch.toLowerCase()) ||
				post.text.toLowerCase().includes(currentSearch.toLowerCase())
			)
		})
		return filteredPosts
	}, [currentCategory, currentSearch, currentTag, posts])
	return (
		<div>
			{postsData?.map(({ category, id, title, img, text }) => (
				<div key={id} className={css.post}>
					<Image className={css.postImg} alt="post image" src={img} />
					<div className={css.postInfo}>
						<p className={css.postTitle}>{tCategory(category.name)}</p>
						<p className={css.postDesc}>{tPost(title)}</p>
						<p className={css.postText}>{tPost(text)}</p>
					</div>
				</div>
			))}
		</div>
	)
}

export default PostList
