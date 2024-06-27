'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'

import image from '@/assets/aboutImage.png'

import css from './AboutUsSection.module.scss'

function AboutUsSection() {
	const t = useTranslations('About')
	return (
		<section className={css.section}>
			<div className={css.header}>
				<div className={css.intro}>
					<p className={css.title}>{t('aboutTitle')}</p>
					<p className={css.description}>{t('aboutDesc')}</p>
				</div>
				<p className={css.text}>{t('aboutText')}</p>
			</div>
			<div className={css.statsContainer}>
				<Image alt="about img" src={image} className={css.img} />
				<div className={css.stats}>
					<div>
						<p className={css.statNumber}>12+</p>
						<p className={css.statTitle}>{t('stats.blogsNumber')}</p>
					</div>
					<div>
						<p className={css.statNumber}>18K+</p>
						<p className={css.statTitle}>{t('stats.viewsNumber')}</p>
					</div>
					<div>
						<p className={css.statNumber}>30K+</p>
						<p className={css.statTitle}>{t('stats.usersNumber')}</p>
					</div>
				</div>
				<div className={css.footer}>
					<span className={css.purpleItem} />
					<span className={css.yellowItem} />
				</div>
			</div>
			<div className={css.direction}>
				<div>
					<p className={css.title}>{t('missionTitle')}</p>
					<p className={css.subDescription}>{t('missionDesc')}</p>
					<p className={css.text}>{t('missionText')}</p>
				</div>
				<div>
					<p className={css.title}>{t('visionTitle')}</p>
					<p className={css.subDescription}>{t('visionDesc')}</p>
					<p className={css.text}>{t('visisonText')}</p>
				</div>
			</div>
		</section>
	)
}

export default AboutUsSection
