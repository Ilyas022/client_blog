import AuthorSection from './components/AuthorSection'
import PostsSection from './components/PostsSection'

function Author() {
	return (
		<main>
			<AuthorSection />
			<div className="container">
				<PostsSection />
			</div>
		</main>
	)
}

export default Author
