'use client'

import { useTranslations } from 'next-intl'

import { categories } from '@/app/[locale]/components/CategorySection/config'
import CategoryItem from '@/components/CategoryItem'

import css from './CategoriesSection.module.scss'

function CategoriesSection() {
	const t = useTranslations('Posts')
	return (
		<section className={css.section}>
			<h2 className={css.title}>{t('categoriesTitle')}</h2>
			<div className={css.categories}>
				{categories.map(({ img, text, title, id }) => (
					<CategoryItem key={id} img={img} text={text} title={title} />
				))}
			</div>
		</section>
	)
}

export default CategoriesSection
