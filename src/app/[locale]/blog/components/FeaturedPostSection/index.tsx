'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

import postImage from '@/assets/blogPostImage.png'
import { POST_PAGE_ROUTE } from '@/constants/routes'

import css from './FeaturedPostSection.module.scss'

function FeaturedPostSection() {
	const t = useTranslations('Featured')
	return (
		<section className={css.section}>
			<div className={css.container}>
				<div className={css.postData}>
					<h2 className={css.title}>{t('sectionTitle')}</h2>
					<p className={css.postTitle}>{t('postTitle')} </p>
					<p className={css.postInfo}>
						{t('by')} <span className={css.nameMarker}>John Doe</span> l {t('date')}{' '}
					</p>
					<p className={css.postText}>{t('featureDesc')}</p>
					<Link className={css.btn} href={POST_PAGE_ROUTE}>
						{t('btn')} &gt;
					</Link>
				</div>
				<Image alt="post image" src={postImage} className={css.postImg} />
			</div>
		</section>
	)
}

export default FeaturedPostSection
