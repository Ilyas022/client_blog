'use client'

import cn from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { useInViewRef } from 'rooks'

import postimg from '@/assets/postImg.png'
import { POST_PAGE_ROUTE } from '@/constants/routes'

import { mockPosts } from './config'
import css from './FeaturedSection.module.scss'

function FeaturedSection() {
	const [ref, inView] = useInViewRef()
	const t = useTranslations('Featured')

	return (
		<section className={cn(css.section, inView && css.sectionVisible)} ref={ref}>
			<div className={css.postCol}>
				<h2 className={css.postColTitle}>{t('sectionTitle')}</h2>
				<div className={css.post}>
					<Image src={postimg} alt="post image" className={css.postImg} />
					<p className={css.userInfo}>
						{t('by')} John Doe l {t('date')}
					</p>
					<p className={css.postTitle}>{t('featuredTitle')}</p>
					<p className={css.postDesc}>{t('featureDesc')}</p>
					<Link className={cn(css.btn, '_btn')} href={POST_PAGE_ROUTE}>
						{t('btn')} &gt;
					</Link>
				</div>
			</div>
			<div className={css.postsCol}>
				<div className={css.postsHeader}>
					<p className={css.postsColTitle}>{t('all')}</p>
					<div className={css.showPosts}>{t('showAll')}</div>
				</div>
				<div>
					{mockPosts.map(({ date, title, userInfo }, i) => (
						<div key={i} className={css.smallPost}>
							<p className={css.smallPostInfo}>
								By <span className={css.smallPostUserMarker}>{userInfo}</span> l {t(date)}
							</p>
							<p className={css.smallPostTitle}>{t(title)}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default FeaturedSection
