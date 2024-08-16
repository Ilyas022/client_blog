import css from './PostListSkeleton.module.scss'
import PostSkeketon from '../PostSkeketon'

function PostListSkeleton() {
	return (
		<div className={css.container}>
			<PostSkeketon />
			<PostSkeketon />
			<PostSkeketon />
		</div>
	)
}

export default PostListSkeleton
