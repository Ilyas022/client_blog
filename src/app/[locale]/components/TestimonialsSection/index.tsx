'use client'

import cn from 'classnames'
import { useTranslations } from 'next-intl'
import { useMemo } from 'react'
import { useInViewRef } from 'rooks'

import { Author } from '@/types/interfaces'
import { getAuthor } from '@/utils/getAuthor'
import { getTestimonials } from '@/utils/getTestimonials'

import css from './TestimonialsSection.module.scss'
import Carousel from '../Carousel'

function TestimonialsSection() {
	const [ref, inView] = useInViewRef()
	const t = useTranslations('Testimonials')
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
				<p className={css.title}>{t('title')}</p>
				<p className={css.description}>{t('desc')}</p>
				<p>{t('text')}</p>
			</div>
			<span className={css.separator} />
			<Carousel data={testimonials} />
		</section>
	)
}

export default TestimonialsSection
