'use client'

import cn from 'classnames'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { useEffect, useRef, useState } from 'react'

import ArrowNextIcon from '@/assets/icons/ArrowNextIcon'
import ArrowPrevIcon from '@/assets/icons/ArrowPrevIcon'

import css from './Carousel.module.scss'
import { CarouselProps } from './types'

function Carousel({ data }: CarouselProps) {
	const [currentImg, setCurrentImg] = useState(0)
	const [carouselSize, setCarouselSize] = useState({ width: 0, height: 0 })
	const carouselRef = useRef(null)
	const tTestimonials = useTranslations('Testimonials')
	const tAuthors = useTranslations('Authors')

	useEffect(() => {
		const elem = carouselRef.current as unknown as HTMLDivElement
		const { width, height } = elem.getBoundingClientRect()
		if (carouselRef.current) {
			setCarouselSize({
				width,
				height,
			})
		}
	}, [])

	return (
		<div className={css.carousel}>
			<div className={css.container}>
				<div
					ref={carouselRef}
					style={{
						left: -currentImg * carouselSize.width,
					}}
					className={css.div}
				>
					{data.map(({ id, title, author }) => (
						<div key={id} className={css.item}>
							<p className={css.title}>{tTestimonials(title)}</p>
							<div className={css.user}>
								<Image className={css.userIcon} alt="user icon" src={author.icon} />
								<div>
									<p>{tAuthors(author.fullName)}</p>
									<p>{tAuthors(author.location)}</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
			<div className={css.controls}>
				<button
					type="button"
					disabled={currentImg === 0}
					onClick={() => setCurrentImg((prev) => prev - 1)}
					className={cn(css.prevBtn, css.btn)}
				>
					<ArrowPrevIcon />
				</button>
				<button
					type="button"
					disabled={currentImg === data.length - 1}
					className={cn(css.nextBtn, css.btn)}
					onClick={() => setCurrentImg((prev) => prev + 1)}
				>
					<ArrowNextIcon />
				</button>
			</div>
		</div>
	)
}

export default Carousel
