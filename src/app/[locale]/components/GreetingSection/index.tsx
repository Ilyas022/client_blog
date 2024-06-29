'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

import bgImage from '@/assets/homeBgImage.png'
import { POST_PAGE_ROUTE } from '@/constants/routes'

import css from './GreetingSection.module.scss'

function GreetingSection() {
	const t = useTranslations('Greeting')
	return (
		<section className={css.section}>
			<div className={css.imgContainer}>
				<Image src={bgImage} alt="businessman" priority className={css.bgImg} />
			</div>
			<div>
				<p className={css.heading}>
					{t('intro')} <span>{t('category')}</span>
				</p>
				<p className={css.title}>{t('title')}</p>
				<p className={css.userInfo}>
					{t('by')} <span className={css.nameMarker}>James West</span> | {t('date')}{' '}
				</p>
				<p className={css.description}>{t('desc')}</p>
				<Link href={POST_PAGE_ROUTE} className={css.btn}>
					{t('btn')} &gt;
				</Link>
			</div>
		</section>
	)
}

export default GreetingSection
