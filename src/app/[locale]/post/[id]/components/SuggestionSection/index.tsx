'use client'

import { useTranslations } from 'next-intl'
import { useEffect, useMemo, useState } from 'react'

import { Post } from '@/types/interfaces'
import { getAuthor } from '@/utils/getAuthor'

import css from './SuggestionSection.module.scss'
import SuggestionCard from '../SuggestionCard'

function SuggestionSection() {
	const t = useTranslations('Suggestion')
	const [posts, setPosts] = useState<Post[]>()

	useEffect(() => {
		const getData = async () => {
			const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}posts`)
			const data = await res.json()
			setPosts(data)
		}
		getData()
	}, [])
	const suggestions = useMemo(() => {
		return posts?.slice(0, 3).map((post) => {
			const author = getAuthor(post.author)
			return { ...post, author }
		})
	}, [posts])

	return (
		<section className={css.section}>
			<h2 className={css.title}>{t('title')}</h2>
			<div className={css.suggestions}>
				{suggestions?.map(({ date, img, text, title, author, id }) => (
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
