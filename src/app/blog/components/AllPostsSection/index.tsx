'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useMemo, useRef, useState } from 'react'

import { mockPosts } from '@/constants/mockPosts'
import { POST_PAGE_ROUTE } from '@/constants/routes'

import css from './AllPostsSection.module.scss'

function AllPostsSection() {
	const [currentPage, setCurrentPage] = useState(0)
	const postContainerRef = useRef<HTMLDivElement>(null)
	const postsPerPage = 5
	const isPageChanged = useRef(false)

	const nextPage = () => {
		if ((currentPage + 1) * postsPerPage < mockPosts.length) {
			if (!isPageChanged.current) isPageChanged.current = true
			setCurrentPage(currentPage + 1)
		}
	}

	const prevPage = () => {
		if (currentPage > 0) {
			setCurrentPage(currentPage - 1)
		}
	}

	useEffect(() => {
		if (postContainerRef.current && isPageChanged.current) {
			postContainerRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
		}
	}, [currentPage])

	const posts = useMemo(() => {
		const startIndex = currentPage * postsPerPage
		const slicedPosts = mockPosts.slice(startIndex, startIndex + postsPerPage)
		return slicedPosts.map(({ category, img, text, title, id }) => (
			<Link href={`${POST_PAGE_ROUTE}/${id}`} className={css.post} key={id}>
				<Image alt="" src={img} className={css.postImg} />
				<div>
					<p className={css.postCategory}>{category.name}</p>
					<p className={css.postTitle}>{title}</p>
					<p className={css.postText}>{text}</p>
				</div>
			</Link>
		))
	}, [currentPage])

	return (
		<section className={css.section} ref={postContainerRef}>
			<h2 className={css.title}>All posts</h2>
			<div className={css.container}>{posts}</div>
			<div className={css.controls}>
				<button
					className={css.controlBtn}
					type="button"
					onClick={prevPage}
					disabled={currentPage === 0}
				>
					&lt; Prev
				</button>
				<button
					className={css.controlBtn}
					type="button"
					onClick={nextPage}
					disabled={(currentPage + 1) * postsPerPage >= mockPosts.length}
				>
					Next &gt;
				</button>
			</div>
		</section>
	)
}

export default AllPostsSection
