import css from './AuthorPage.module.scss'
import AuthorSection from './components/AuthorSection'
import PostsSection from './components/PostsSection'

function Author({ params }: { params: { id: string } }) {
	return (
		<main>
			<AuthorSection userId={params.id} />
			<div className={css.container}>
				<PostsSection userId={params.id} />
			</div>
		</main>
	)
}

export default Author
