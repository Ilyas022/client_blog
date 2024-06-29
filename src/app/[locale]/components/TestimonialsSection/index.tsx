'use client'

import cn from 'classnames'
import { useTranslations } from 'next-intl'
import { useEffect, useMemo, useState } from 'react'
import { useInViewRef } from 'rooks'

import { Author, Testimonial } from '@/types/interfaces'

import css from './TestimonialsSection.module.scss'
import Carousel from '../Carousel'

function TestimonialsSection() {
	const [ref, inView] = useInViewRef()
	const t = useTranslations('Testimonials')
	const [authors, setAuthors] = useState<Author[]>()
	const [testimonialsData, setTestimonialsData] = useState<Testimonial[]>()

	useEffect(() => {
		const getData = async () => {
			const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}authors`)
			const data = await res.json()
			setAuthors(data)
		}
		getData()
	}, [])

	useEffect(() => {
		const getData = async () => {
			const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}testimonials`)
			const data = await res.json()
			setTestimonialsData(data)
		}
		getData()
	}, [])

	const testimonials = useMemo(() => {
		if (
			(!authors?.length && !testimonialsData?.length) ||
			!authors?.length ||
			!testimonialsData?.length
		)
			return
		return testimonialsData?.map((testimonial) => {
			const author = authors?.find((authorData) => authorData.id === testimonial.id)
			const { icon, location, fullName } = author as Author
			return { ...testimonial, author: { icon, location, fullName } }
		})
	}, [authors, testimonialsData])

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
