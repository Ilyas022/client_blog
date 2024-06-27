'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'

import reasonsImg from '@/assets/aboutReasonsImg.png'
import teamImg from '@/assets/aboutTeamImg.png'

import css from './ReasonsSection.module.scss'

function ReasonsSection() {
	const t = useTranslations('CreativesReasons')
	return (
		<section className={css.section}>
			<div className={css.container}>
				<div className={css.item}>
					<p className={css.title}>{t('creativesTitle')}</p>
					<p className={css.desc}>{t('creativesDesc')}</p>
					<p className={css.text}>{t('creativesText')}</p>
				</div>

				<Image className={css.img} alt="" src={teamImg} />
				<span className={css.rect} />
			</div>
			<div className={css.container}>
				<Image className={css.img} alt="" src={reasonsImg} />
				<div>
					<p className={css.title}>{t('reasonsTitle')}</p>
					<p className={css.desc}>{t('creativesDesc')}</p>
					<p className={css.text}>{t('creativesText')}</p>
				</div>
				<span className={css.circle} />
			</div>
		</section>
	)
}

export default ReasonsSection
