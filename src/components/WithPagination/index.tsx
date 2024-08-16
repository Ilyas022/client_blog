'use client'

import cn from 'classnames'
import { useTranslations } from 'next-intl'
import { ReactNode, Suspense, useRef, useState } from 'react'

import css from './WithPagination.module.scss'

interface WithPaginationProps {
	children: ReactNode
	currentPage: number
	setCurrentPage: (page: number) => void
	numberOfPosts: number
	className?: string
}

function WithPagination({
	children,
	currentPage,
	setCurrentPage,
	numberOfPosts,
	className,
}: WithPaginationProps) {
	const [loading, setLoading] = useState(false)

	const postContainerRef = useRef<HTMLDivElement>(null)
	const isPageChanged = useRef(false)
	const postsPerPage = 5
	const tBtns = useTranslations('ControlBtns')

	const scrollContainerToTop = (cb: () => void) => {
		setLoading(true)
		postContainerRef.current?.scrollIntoView({ block: 'start', behavior: 'smooth' })
		setTimeout(() => {
			cb()
			setLoading(false)
		}, 700)
	}

	const handleNextPageClick = () => {
		if ((currentPage + 1) * postsPerPage < numberOfPosts) {
			if (!isPageChanged.current) isPageChanged.current = true

			scrollContainerToTop(() => setCurrentPage(currentPage + 1))
		}
	}

	const handlePrevPageClick = () => {
		if (currentPage > 0) {
			scrollContainerToTop(() => setCurrentPage(currentPage - 1))
		}
	}

	return (
		<div ref={postContainerRef} className={className && className}>
			<div className={cn(css.container, loading && css.loading)}>
				<Suspense fallback={<h4>loading</h4>}>{children}</Suspense>
			</div>
			<div className={cn(css.controls, numberOfPosts === 0 && css.hidden)}>
				<button
					className={css.controlBtn}
					type="button"
					onClick={handlePrevPageClick}
					disabled={currentPage === 0}
				>
					&lt; {tBtns('prev')}
				</button>
				<button
					className={css.controlBtn}
					type="button"
					onClick={handleNextPageClick}
					disabled={(currentPage + 1) * postsPerPage >= numberOfPosts}
				>
					{tBtns('next')} &gt;
				</button>
			</div>
		</div>
	)
}

export default WithPagination
