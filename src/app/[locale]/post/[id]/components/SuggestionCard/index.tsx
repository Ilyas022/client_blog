'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useLocale, useTranslations } from 'next-intl'

import { POST_PAGE_ROUTE } from '@/constants/routes'

import css from './SuggestionCard.module.scss'
import { SuggestionCardProps } from './types'

function SuggestionCard({ date, img, text, title, userName, id }: SuggestionCardProps) {
	const t = useTranslations('Suggestion')
	const tAuthor = useTranslations('Authors')
	const tPost = useTranslations('Posts')
	const locale = useLocale()
	return (
		<Link href={`/${locale}${POST_PAGE_ROUTE}/${id}`} className={css.card}>
			<div className={css.img}>
				<Image alt="post image" src={img} />
			</div>
			<p className={css.postInfo}>
				{t('by')} <span className={css.userMarker}>{tAuthor(userName)}</span> l {tPost(date)}
			</p>
			<p className={css.title}>{tPost(title)}</p>
			<p className={css.text}>{tPost(text)}</p>
		</Link>
	)
}

export default SuggestionCard
