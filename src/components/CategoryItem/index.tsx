'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

import { CATEGORY_PAGE_ROUTE } from '@/constants/routes'

import css from './CategoryItem.module.scss'
import { CategoryItemProps } from './types'

function CategoryItem({ title, img, text }: CategoryItemProps) {
	const t = useTranslations('Categories')
	return (
		<Link href={CATEGORY_PAGE_ROUTE} key={title} className={css.category}>
			<div className={css.imgContainer}>
				<Image className={css.img} alt="category logo" src={img} />
			</div>
			<p className={css.categoryTitle}>{t(title)}</p>
			<p className={css.text}>{t(text)}</p>
		</Link>
	)
}

export default CategoryItem
