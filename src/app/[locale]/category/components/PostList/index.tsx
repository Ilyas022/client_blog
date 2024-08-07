'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useLocale, useTranslations } from 'next-intl'
import { useEffect, useMemo, useState } from 'react'

import { POST_PAGE_ROUTE } from '@/constants/routes'
import { Post } from '@/types/interfaces'

import css from './PostList.module.scss'

function PostList() {
	const locale = useLocale()
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

		const postsWithTranslatedFields = filteredByTagPosts.map((post) => {
			return {
				...post,
				category: { ...post.category, name: tCategory(post.category.name) },
				text: tPost(post.text),
				title: tPost(post.title),
			}
		})

		const filteredPosts = postsWithTranslatedFields.filter((post) => {
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
				<Link href={`/${locale}${POST_PAGE_ROUTE}${id}`} key={id} className={css.post}>
					<Image className={css.postImg} alt="post image" src={img} />
					<div className={css.postInfo}>
						<p className={css.postTitle}>{category.name}</p>
						<p className={css.postDesc}>{title}</p>
						<p className={css.postText}>{text}</p>
					</div>
				</Link>
			))}
		</div>
	)
}

export default PostList
