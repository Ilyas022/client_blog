'use client'

import cn from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { useInViewRef } from 'rooks'

import teamImg from '@/assets/teamImg.png'
import { ABOUT_PAGE_ROUTE } from '@/constants/routes'

import { description, text } from './config'
import css from './ReasonSection.module.scss'

function ReasonSection() {
	const [ref, inView] = useInViewRef()
	return (
		<section className={cn(css.section, inView && css.sectionVisible)} ref={ref}>
			<Image className={css.img} alt="team img" src={teamImg} />
			<div className={css.info}>
				<h2 className={css.title}>Why we started </h2>
				<p className={css.description}>{description}</p>
				<p className={css.text}>{text}</p>
				<Link className={cn(css.btn, '_btn')} href={ABOUT_PAGE_ROUTE}>
					Discover our story &gt;
				</Link>
			</div>
		</section>
	)
}

export default ReasonSection
