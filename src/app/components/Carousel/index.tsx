'use client'

import cn from 'classnames'
import Image, { StaticImageData } from 'next/image'
import { useEffect, useRef, useState } from 'react'

import ArrowNextIcon from '@/assets/icons/ArrowNextIcon'
import ArrowPrevIcon from '@/assets/icons/ArrowPrevIcon'

import css from './Carousel.module.scss'

interface CarouselProps {
	data: { title: string; user: { icon: StaticImageData; location: string; name: string } }[]
}

function Carousel({ data }: CarouselProps) {
	const [currentImg, setCurrentImg] = useState(0)
	const [carouselSize, setCarouselSize] = useState({ width: 0, height: 0 })
	const carouselRef = useRef(null)

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
					{data.map(({ title, user }, i) => (
						<div key={i} className={css.item}>
							<p className={css.title}>{title}</p>
							<div className={css.user}>
								<Image className={css.userIcon} alt="user icon" src={user.icon} />
								<div>
									<p>{user.name}</p>
									<p>{user.location}</p>
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
