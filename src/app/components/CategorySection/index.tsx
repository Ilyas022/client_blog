import Image from 'next/image'
import Link from 'next/link'

import { CATEGORY_PAGE_ROUTE } from '@/constants/routes'

import css from './CategorySection.module.scss'
import { categories } from './config'

function CategorySection() {
	return (
		<section className={css.section}>
			<h2 className={css.title}>Choose A Catagory</h2>
			<div className={css.categories}>
				{categories.map(({ img, text, title }) => (
					<Link href={CATEGORY_PAGE_ROUTE} key={title} className={css.category}>
						<div className={css.imgContainer}>
							<Image className={css.img} alt="category logo" src={img} />
						</div>
						<p className={css.categoryTitle}>{title}</p>
						<p>{text}</p>
					</Link>
				))}
			</div>
		</section>
	)
}

export default CategorySection
