import Image from 'next/image'
import Link from 'next/link'

import { CATEGORY_PAGE_ROUTE } from '@/constants/routes'

import css from './CategoryItem.module.scss'

interface ICategoryItem {
	title: string
	img: string
	text: string
}

function CategoryItem({ title, img, text }: ICategoryItem) {
	return (
		<Link href={CATEGORY_PAGE_ROUTE} key={title} className={css.category}>
			<div className={css.imgContainer}>
				<Image className={css.img} alt="category logo" src={img} />
			</div>
			<p className={css.categoryTitle}>{title}</p>
			<p>{text}</p>
		</Link>
	)
}

export default CategoryItem
