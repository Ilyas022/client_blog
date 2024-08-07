'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useLocale, useTranslations } from 'next-intl'

import bgImage from '@/assets/homeBgImage.png'
import { AUTHOR_PAGE_ROUTE, POST_PAGE_ROUTE } from '@/constants/routes'

import css from './GreetingSection.module.scss'

function GreetingSection() {
	const t = useTranslations('Greeting')
	const locale = useLocale()

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
					{t('by')}{' '}
					<Link href={`/${locale}${AUTHOR_PAGE_ROUTE}/0`} className={css.nameMarker}>
						Floyd Miles
					</Link>{' '}
					| {t('date')}{' '}
				</p>
				<p className={css.description}>{t('desc')}</p>
				<Link href={`${locale + POST_PAGE_ROUTE}/7`} className={css.btn}>
					{t('btn')} &gt;
				</Link>
			</div>
		</section>
	)
}

export default GreetingSection
