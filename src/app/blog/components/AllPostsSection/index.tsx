'use client'

import Image from 'next/image'
import { useEffect, useMemo, useRef, useState } from 'react'

import css from './AllPostsSection.module.scss'
import { postsData } from './config'

function AllPostsSection() {
	const [currentPage, setCurrentPage] = useState(0)
	const postContainerRef = useRef<HTMLDivElement>(null)
	const postsPerPage = 5
	const isPageChanged = useRef(false)

	const nextPage = () => {
		if ((currentPage + 1) * postsPerPage < postsData.length) {
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
		const slicedPosts = postsData.slice(startIndex, startIndex + postsPerPage)
		return slicedPosts.map(({ category, image, text, title, id }) => (
			<div className={css.post} key={id}>
				<Image alt="" src={image} className={css.postImg} />
				<div>
					<p className={css.postCategory}>{category}</p>
					<p className={css.postTitle}>{title}</p>
					<p className={css.postText}>{text}</p>
				</div>
			</div>
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
					disabled={(currentPage + 1) * postsPerPage >= postsData.length}
				>
					Next &gt;
				</button>
			</div>
		</section>
	)
}

export default AllPostsSection
