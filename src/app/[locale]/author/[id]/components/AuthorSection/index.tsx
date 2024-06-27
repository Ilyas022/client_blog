'use client'

import cn from 'classnames'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

import { getAuthor } from '@/utils/getAuthor'

import css from './AuthorSection.module.scss'
import { socialNetworks } from './config'

function AuthorSection({ userId }: { userId: string }) {
	const t = useTranslations('Authors')
	const author = getAuthor(userId)
	if (author) {
		const { desc, icon, img, intro } = author
		return (
			<section className={css.section}>
				<div className={cn('container', css.container)}>
					<Image className={css.userImage} alt="" src={img || icon} />
					<div className={css.userInfo}>
						<p className={css.intro}>{t(intro)}</p>
						<p className={css.desc}>{t(desc)}</p>
						<div className={css.icons}>{socialNetworks}</div>
					</div>
					<div className={css.footer}>
						<span className={css.yellowItem} />
						<span className={css.purpleItem} />
					</div>
				</div>
			</section>
		)
	}
}

export default AuthorSection
