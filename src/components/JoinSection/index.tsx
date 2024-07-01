'use client'

import Link from 'next/link'
import { useTranslations } from 'next-intl'

import { CONTACTS_PAGE_ROUTE } from '@/constants/routes'

import css from './JoinSection.module.scss'

function JoinSection() {
	const t = useTranslations('Join')
	return (
		<section className={css.section}>
			<h2 className={css.title}>{t('title')}</h2>
			<p className={css.text}>{t('text')}</p>
			<Link href={CONTACTS_PAGE_ROUTE} type="button" className={css.btn}>
				{t('btn')}
			</Link>
		</section>
	)
}

export default JoinSection
