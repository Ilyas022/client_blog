'use client'

import cn from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { useInViewRef } from 'rooks'

import teamImg from '@/assets/teamImg.png'
import { ABOUT_PAGE_ROUTE } from '@/constants/routes'

import css from './ReasonSection.module.scss'

function ReasonSection() {
	const [ref, inView] = useInViewRef()
	const t = useTranslations('Reasons')
	return (
		<section className={cn(css.section, inView && css.sectionVisible)} ref={ref}>
			<Image className={css.img} alt="team img" src={teamImg} />
			<div className={css.info}>
				<h2 className={css.title}>{t('title')}</h2>
				<p className={css.description}>{t('desc')}</p>
				<p className={css.text}>{t('text')}</p>
				<Link className={css.btn} href={ABOUT_PAGE_ROUTE}>
					{t('btn')} &gt;
				</Link>
			</div>
		</section>
	)
}

export default ReasonSection
