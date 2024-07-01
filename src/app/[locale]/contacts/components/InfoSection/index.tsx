'use client'

import { useTranslations } from 'next-intl'

import css from './InfoSection.module.scss'

function InfoSection() {
	const t = useTranslations('Contacts')
	return (
		<div className={css.container}>
			<div className={css.header}>
				<h2 className={css.title}>{t('title')}</h2>
				<p className={css.desc}>{t('desc')}</p>
				<p className={css.text}>{t('text')}</p>
			</div>
			<div className={css.info}>
				<div className={css.col}>
					<p className={css.colTitle}>{t('hoursSubTitle')}</p>
					<span className={css.separator} />
					<p className={css.colInfo}>{t('weekSchedule')} </p>
					<p className={css.colInfo}>{t('hoursSchedule')} </p>
					<p className={css.colText}>{t('support')}</p>
				</div>
				<div className={css.col}>
					<p className={css.colTitle}>{t('contactSubTitle')}</p>
					<span className={css.separator} />
					<p className={css.colInfo}>020 7993 2905</p>
					<p className={css.colText}>hello@finsweet.com</p>
				</div>
			</div>
		</div>
	)
}

export default InfoSection
