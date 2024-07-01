'use client'

import { useTranslations } from 'next-intl'

import css from './Header.module.scss'

function Header() {
	const t = useTranslations('Category')
	return (
		<div className={css.header}>
			<div className={css.container}>
				<p className={css.title}>{t('headerTitle')}</p>
				<p className={css.text}>{t('headerText')}</p>
				<p className={css.desc}>{t('headerPath')}</p>
			</div>
		</div>
	)
}

export default Header
