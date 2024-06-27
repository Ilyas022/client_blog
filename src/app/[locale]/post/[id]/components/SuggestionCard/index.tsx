'use client'

import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { useLocale, useTranslations } from 'next-intl'

import { POST_PAGE_ROUTE } from '@/constants/routes'

import css from './SuggestionCard.module.scss'

interface ISuggestionCard {
	id: string
	img: StaticImageData
	date: string
	userName: string
	title: string
	text: string
}

function SuggestionCard({ date, img, text, title, userName, id }: ISuggestionCard) {
	const t = useTranslations('Suggestion')
	const tAuthor = useTranslations('Authors')
	const tPost = useTranslations('Posts')
	const locale = useLocale()
	return (
		<Link href={`/${locale}${POST_PAGE_ROUTE}/${id}`} className={css.card}>
			<Image alt="post image" src={img} className={css.img} />
			<p className={css.postInfo}>
				{t('by')} <span className={css.userMarker}>{tAuthor(userName)}</span> l {tPost(date)}
			</p>
			<p className={css.title}>{tPost(title)}</p>
			<p className={css.text}>{tPost(text)}</p>
		</Link>
	)
}

export default SuggestionCard
