'use client'

import cn from 'classnames'
import { useMemo } from 'react'
import { useInViewRef } from 'rooks'

import { Author } from '@/types/interfaces'
import { getAuthor } from '@/utils/getAuthor'
import { getTestimonials } from '@/utils/getTestimonials'

import css from './TestimonialsSection.module.scss'
import Carousel from '../Carousel'

function TestimonialsSection() {
	const [ref, inView] = useInViewRef()
	const testimonials = useMemo(() => {
		return getTestimonials().map((testimonial) => {
			const author = getAuthor(testimonial.author)
			const { icon, location, fullName } = author as Author
			return { ...testimonial, author: { icon, location, fullName } }
		})
	}, [])

	return (
		<section className={cn(css.section, inView && css.sectionVisible)} ref={ref}>
			<div>
				<p className={css.title}>TESTIMONIALS</p>
				<p className={css.description}>What people say about our blog</p>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
			</div>
			<span className={css.separator} />
			<Carousel data={testimonials} />
		</section>
	)
}

export default TestimonialsSection
