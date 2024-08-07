'use client'

import Link from 'next/link'
import { useLocale, useTranslations } from 'next-intl'

import { CONTACTS_PAGE_ROUTE } from '@/constants/routes'

import css from './JoinSection.module.scss'

function JoinSection() {
	const t = useTranslations('Join')
	const locale = useLocale()

	return (
		<section className={css.section}>
			<h2 className={css.title}>{t('title')}</h2>
			<p className={css.text}>{t('text')}</p>
			<Link href={`/${locale}${CONTACTS_PAGE_ROUTE}`} type="button" className={css.btn}>
				{t('btn')}
			</Link>
		</section>
	)
}

export default JoinSection
