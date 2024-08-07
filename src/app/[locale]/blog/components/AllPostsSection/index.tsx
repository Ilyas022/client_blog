'use client'

import cn from 'classnames'
import { useLocale, useTranslations } from 'next-intl'
import { useMemo, useRef, useState } from 'react'

import { mockPosts } from '@/constants/mockPosts'
import { POST_PAGE_ROUTE } from '@/constants/routes'

import css from './AllPostsSection.module.scss'
import PostItem from '../PostItem'

function AllPostsSection() {
	const [currentPage, setCurrentPage] = useState(0)
	const [arePostsLoading, setPostsAreLoading] = useState(false)
	const postContainerRef = useRef<HTMLDivElement>(null)
	const postsPerPage = 5
	const isPageChanged = useRef(false)
	const tPosts = useTranslations('Posts')
	const locale = useLocale()
	const tCategories = useTranslations('Categories')
	const tBtns = useTranslations('ControlBtns')

	const scrollContainerToTop = (cb: () => void) => {
		setPostsAreLoading(true)
		postContainerRef.current?.scrollIntoView({ block: 'start', behavior: 'smooth' })
		setTimeout(() => {
			cb()
			setPostsAreLoading(false)
		}, 700)
	}

	const nextPage = () => {
		if ((currentPage + 1) * postsPerPage < mockPosts.length) {
			if (!isPageChanged.current) isPageChanged.current = true

			scrollContainerToTop(() => setCurrentPage(currentPage + 1))
		}
	}

	const prevPage = () => {
		if (currentPage > 0) {
			scrollContainerToTop(() => setCurrentPage(currentPage - 1))
		}
	}

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
			<h2 className={css.title}>{tPosts('title')}</h2>
			<div className={cn(css.container, arePostsLoading && css.loading)}>{posts}</div>
			<div className={css.controls}>
				<button
					className={css.controlBtn}
					type="button"
					onClick={prevPage}
					disabled={currentPage === 0}
				>
					&lt; {tBtns('prev')}
				</button>
				<button
					className={css.controlBtn}
					type="button"
					onClick={nextPage}
					disabled={(currentPage + 1) * postsPerPage >= mockPosts.length}
				>
					{tBtns('next')} &gt;
				</button>
			</div>
		</section>
	)
}

export default AllPostsSection
