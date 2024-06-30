import { getTranslations } from 'next-intl/server'

import { Author, Post } from '@/types/interfaces'

import { getPosts, getAuthors } from './config'
import css from './SuggestionSection.module.scss'
import SuggestionCard from '../SuggestionCard'

async function SuggestionSection() {
	const t = await getTranslations('Suggestion')

	const posts: Post[] = await getPosts()
	const authors: Author[] = await getAuthors()

	const suggestions = posts.slice(0, 3).map((post) => {
		const author = authors.find((authorData) => authorData.id === post.author)
		return { ...post, author }
	})

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
