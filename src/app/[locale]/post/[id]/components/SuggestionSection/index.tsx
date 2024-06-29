'use client'

import { useTranslations } from 'next-intl'
import { useEffect, useMemo, useState } from 'react'

import { Author, Post } from '@/types/interfaces'

import css from './SuggestionSection.module.scss'
import SuggestionCard from '../SuggestionCard'

function SuggestionSection() {
	const t = useTranslations('Suggestion')
	const [posts, setPosts] = useState<Post[]>()
	const [authors, setAuthors] = useState<Author[]>()

	useEffect(() => {
		const getData = async () => {
			const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}posts`)
			const data = await res.json()
			setPosts(data)
		}
		getData()
	}, [])

	useEffect(() => {
		const getData = async () => {
			const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}authors`)
			const data = await res.json()
			setAuthors(data)
		}
		getData()
	}, [])

	const suggestions = useMemo(() => {
		return posts?.slice(0, 3).map((post) => {
			const author = authors?.find((authorData) => authorData.id === post.author)
			return { ...post, author }
		})
	}, [posts])

	if (!suggestions) return null
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
