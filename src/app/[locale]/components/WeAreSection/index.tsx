'use client'

import cn from 'classnames'
import { useTranslations } from 'next-intl'
import { useInViewRef } from 'rooks'

import { companies } from './config'
import css from './WeAreSection.module.scss'

function WeAreSection() {
	const [ref, inView] = useInViewRef()
	const t = useTranslations('WeAre')
	return (
		<section className={cn(css.section, inView && css.sectionVisible)} ref={ref}>
			<div className={css.presentation}>
				<p>{t('title')}</p>
				<p>{t('subTitle')}</p>
			</div>
			<div className={css.companies}>{companies}</div>
		</section>
	)
}

export default WeAreSection
