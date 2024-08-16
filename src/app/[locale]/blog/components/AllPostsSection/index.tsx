'use client'

import cn from 'classnames'
import { useLocale, useTranslations } from 'next-intl'
import { useMemo, useRef, useState } from 'react'

import WithPagination from '@/components/WithPagination'
import { mockPosts } from '@/constants/mockPosts'
import { POST_PAGE_ROUTE } from '@/constants/routes'

import css from './AllPostsSection.module.scss'
import PostItem from '../PostItem'

function AllPostsSection() {
	const [currentPage, setCurrentPage] = useState(0)
	const postContainerRef = useRef<HTMLDivElement>(null)
	const postsPerPage = 5
	const tPosts = useTranslations('Posts')
	const locale = useLocale()
	const tCategories = useTranslations('Categories')

	const onPageChange = (page: number) => setCurrentPage(page)

	const posts = useMemo(() => {
		const startIndex = currentPage * postsPerPage
		const slicedPosts = mockPosts.slice(startIndex, startIndex + postsPerPage)
		return slicedPosts.map(({ category, img, text, title, id }) => (
			<PostItem
				category={tCategories(category.name)}
				href={`/${locale}${POST_PAGE_ROUTE}/${id}`}
				img={img}
				text={tPosts(text)}
				title={tPosts(title)}
				key={id}
			/>
		))
	}, [currentPage])

	return (
		<section className={css.section} ref={postContainerRef}>
			<WithPagination
				currentPage={currentPage}
				setCurrentPage={onPageChange}
				numberOfPosts={mockPosts.length}
			>
				<h2 className={css.title}>{tPosts('title')}</h2>
				<div className={cn(css.container)}>{posts}</div>
			</WithPagination>
		</section>
	)
}

export default AllPostsSection
