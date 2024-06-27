'use client'

import cn from 'classnames'
import { useTranslations } from 'next-intl'
import { useInViewRef } from 'rooks'

import CategoryItem from '@/components/CategoryItem'

import css from './CategorySection.module.scss'
import { categories } from './config'

function CategorySection() {
	const [ref, inView] = useInViewRef()
	const t = useTranslations('Category')

	return (
		<section className={cn(css.section, inView && css.sectionVisible)} ref={ref}>
			<h2 className={css.title}>{t('title')}</h2>
			<div className={css.categories}>
				{categories.map(({ img, text, title, id }) => (
					<CategoryItem key={id} img={img} text={text} title={title} />
				))}
			</div>
		</section>
	)
}

export default CategorySection
