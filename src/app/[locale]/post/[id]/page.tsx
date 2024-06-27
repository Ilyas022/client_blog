import JoinSection from '@/components/JoinSection'

import PostSection from './components/PostSection'
import SuggestionSection from './components/SuggestionSection'

function Post({ params }: { params: { id: string } }) {
	return (
		<main>
			<div className="container">
				<PostSection postId={params.id} />
				<SuggestionSection />
				<JoinSection />
			</div>
		</main>
	)
}

export default Post
