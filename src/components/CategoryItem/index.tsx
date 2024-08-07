'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useLocale, useTranslations } from 'next-intl'

import { CATEGORY_PAGE_ROUTE } from '@/constants/routes'

import css from './CategoryItem.module.scss'
import { CategoryItemProps } from './types'

function CategoryItem({ title, img, text, id }: CategoryItemProps) {
	const t = useTranslations('Categories')
	const locale = useLocale()

	return (
		<Link
			href={{
				pathname: `/${locale + CATEGORY_PAGE_ROUTE}`,
				query: {
					category: id,
				},
			}}
			key={title}
			className={css.category}
		>
			<div className={css.imgContainer}>
				<Image className={css.img} alt="category logo" src={img} />
			</div>
			<p className={css.categoryTitle}>{t(title)}</p>
			<p className={css.text}>{t(text)}</p>
		</Link>
	)
}

export default CategoryItem
