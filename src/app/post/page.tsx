import PostSection from './components/PostSection'
import SuggestionSection from './components/SuggestionSection'

function Post() {
	return (
		<main>
			<div className="container">
				<PostSection />
				<SuggestionSection />
			</div>
		</main>
	)
}

export default Post
