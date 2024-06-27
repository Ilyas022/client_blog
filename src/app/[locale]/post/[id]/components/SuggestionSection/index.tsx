'use client'

import { useTranslations } from 'next-intl'
import { useMemo } from 'react'

import { getAllPosts } from '@/utils/getAllPosts'
import { getAuthor } from '@/utils/getAuthor'

import css from './SuggestionSection.module.scss'
import SuggestionCard from '../SuggestionCard'

function SuggestionSection() {
	const t = useTranslations('Suggestion')
	const suggestions = useMemo(() => {
		return getAllPosts()
			.slice(0, 3)
			.map((post) => {
				const author = getAuthor(post.author)
				return { ...post, author }
			})
	}, [])

	return (
		<section className={css.section}>
			<h2 className={css.title}>{t('title')}</h2>
			<div className={css.suggestions}>
				{suggestions.map(({ date, img, text, title, author, id }) => (
					<SuggestionCard
						key={id}
						id={id}
						date={date}
						img={img}
						text={text}
						title={title}
						userName={author?.fullName as string}
					/>
				))}
			</div>
		</section>
	)
}

export default SuggestionSection
