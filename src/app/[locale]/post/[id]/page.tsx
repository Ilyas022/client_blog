import JoinSection from '@/components/JoinSection'

import PostSection from './components/PostSection'
import SuggestionSection from './components/SuggestionSection'
import css from './PostPage.module.scss'

function Post({ params }: { params: { id: string } }) {
	return (
		<main>
			<div className={css.container}>
				<PostSection postId={params.id} />
				<SuggestionSection />
				<JoinSection />
			</div>
		</main>
	)
}

export default Post
