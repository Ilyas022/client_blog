'use client'

import cn from 'classnames'
import { useTranslations } from 'next-intl'

import css from './PrivacyPage.module.scss'

function Privacy() {
	const t = useTranslations('Privacy')
	return (
		<main className={css.page}>
			<div className={css.header}>
				<div className={css.headerContainer}>
					<h2 className={css.title}>{t('headerTitle')}</h2>
					<p>{t('update')} </p>
				</div>
			</div>
			<div className={css.container}>
				<p className={cn(css.privacyTitle, css.title)}>{t('title')}</p>
				<p className={css.privacyText}>{t('text')}</p>
				<p className={css.privacySubtitle}>{t('subTitle')}</p>
				<p className={css.privacyText}>{t('text')}</p>
				<p className={css.privacyText}>{t('text')}</p>
			</div>
		</main>
	)
}

export default Privacy
