'use client'

import { useSearchParams } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { useEffect, useMemo, useState } from 'react'

import { Post } from '@/types/interfaces'

import { processPosts } from './config'
import PostItem from '../PostItem'

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

		return processPosts(posts, currentCategory, currentTag, currentSearch, tPost, tCategory)
	}, [currentCategory, currentSearch, currentTag, posts])
	return (
		<div>
			{postsData?.map(({ category, id, title, img, text }) => (
				<PostItem key={id} id={id} category={category} title={title} img={img} text={text} />
			))}
		</div>
	)
}

export default PostList
