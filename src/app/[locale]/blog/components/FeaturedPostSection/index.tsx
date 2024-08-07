'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useLocale, useTranslations } from 'next-intl'

import postImage from '@/assets/blogPostImage.png'
import { AUTHOR_PAGE_ROUTE, POST_PAGE_ROUTE } from '@/constants/routes'

import css from './FeaturedPostSection.module.scss'

function FeaturedPostSection() {
	const t = useTranslations('Featured')
	const locale = useLocale()

	return (
		<section className={css.section}>
			<div className={css.container}>
				<div className={css.postData}>
					<h2 className={css.title}>{t('sectionTitle')}</h2>
					<p className={css.postTitle}>{t('postTitle')} </p>
					<p className={css.postInfo}>
						{t('by')}{' '}
						<Link href={`/${locale + AUTHOR_PAGE_ROUTE}/1`} className={css.nameMarker}>
							Dianne Russell
						</Link>{' '}
						l {t('date')}{' '}
					</p>
					<p className={css.postText}>{t('featureDesc')}</p>
					<Link className={css.btn} href={`${`/${locale}${POST_PAGE_ROUTE}`}9`}>
						{t('btn')} &gt;
					</Link>
				</div>
				<Image alt="post image" src={postImage} className={css.postImg} />
			</div>
		</section>
	)
}

export default FeaturedPostSection
