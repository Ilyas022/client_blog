'use client'

import { useSearchParams } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { useEffect, useMemo, useState } from 'react'

import WithPagination from '@/components/WithPagination'
import { Post } from '@/types/interfaces'

import { processPosts } from './config'
import css from './PostList.module.scss'
import PostItem from '../PostItem'
import PostListSkeleton from '../PostListSkeleton'

function PostList() {
	const searchParams = useSearchParams()

	const [currentPage, setCurrentPage] = useState(0)

	const tCategory = useTranslations('Categories')
	const tPost = useTranslations('Posts')

	const params = new URLSearchParams(searchParams)
	const currentCategory = params.get('category') || ''
	const currentSearch = params.get('search') || ''
	const currentTag = params.get('tag') || ''
	const [posts, setPosts] = useState<Post[]>()

	const postsPerPage = 5

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

		const startIndex = currentPage * postsPerPage
		const filteredPosts = processPosts(
			posts,
			currentCategory,
			currentTag,
			currentSearch,
			tPost,
			tCategory
		)
		const slicedPosts = filteredPosts.slice(startIndex, startIndex + postsPerPage)

		return { numberOfPosts: filteredPosts.length, posts: slicedPosts }
	}, [currentCategory, currentSearch, currentTag, posts, currentPage])

	const onPageChange = (page: number) => setCurrentPage(page)

	if (!postsData) return <PostListSkeleton />

	return (
		<WithPagination
			currentPage={currentPage}
			setCurrentPage={onPageChange}
			numberOfPosts={postsData.numberOfPosts}
		>
			<div className={css.container}>
				{postsData.posts.map(({ category, id, title, img, text }) => (
					<PostItem key={id} id={id} category={category} title={title} img={img} text={text} />
				))}
			</div>
		</WithPagination>
	)
}

export default PostList
