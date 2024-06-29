'use client'

import cn from 'classnames'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { useInViewRef } from 'rooks'

import { ABOUT_PAGE_ROUTE } from '@/constants/routes'

import css from './AboutSection.module.scss'

function AboutSection() {
	const [ref, inView] = useInViewRef()
	const t = useTranslations('About')
	const path = usePathname()
	console.log(path)

	return (
		<section className={cn(css.section, inView && css.sectionVisible)} ref={ref}>
			<div className={css.header}>
				<span className={css.yellowItem} />
				<span className={css.purpleItem} />
			</div>
			<div className={css.container}>
				<div>
					<h2 className={css.title}>{t('aboutTitle')}</h2>
					<p className={css.desc}>{t('aboutDesc')}</p>
					<p className={css.info}>{t('aboutText')}</p>
					<Link className={css.link} href={ABOUT_PAGE_ROUTE}>
						{t('btn')} &gt;
					</Link>
				</div>
				<div className={css.mission}>
					<h2 className={css.title}>{t('missionTitle')}</h2>
					<p className={css.missionDesc}>{t('missionDesc')}</p>
					<p className={css.info}>{t('missionText')}</p>
				</div>
			</div>
		</section>
	)
}

export default AboutSection
