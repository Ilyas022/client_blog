'use client'

import Image from 'next/image'
import Link from 'next/link'

import bgImage from '@/assets/homeBgImage.png'
import { POST_PAGE_ROUTE } from '@/constants/routes'

import css from './GreetingSection.module.scss'

function GreetingSection() {
	return (
		<section className={css.section}>
			<div className={css.imgContainer}>
				<Image src={bgImage} alt="businessman" priority className={css.bgImg} />
			</div>
			<div>
				<p className={css.heading}>
					Posted on <span>startup</span>
				</p>
				<p className={css.title}>Step-by-step guide to choosing great font pairs</p>
				<p className={css.userInfo}>
					By <span className={css.nameMarker}>James West</span> | May 23, 2022{' '}
				</p>
				<p className={css.description}>
					Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
					nulla pariatur. Excepteur sint occaecat cupidatat non proident.
				</p>
				<Link href={POST_PAGE_ROUTE} className={css.btn}>
					Read More &gt;
				</Link>
			</div>
		</section>
	)
}

export default GreetingSection
