import { getTranslations } from 'next-intl/server'

import { Post } from '@/types/interfaces'

import { getPosts } from './config'
import css from './PostsSection.module.scss'
import PostItem from '../PostItem'

async function PostsSection({ userId }: { userId: string }) {
	const tPost = await getTranslations('Posts')

	const posts: Post[] = await getPosts(userId)

	return (
		<section className={css.section}>
			<h2 className={css.title}>{tPost('myPostsTitle')}</h2>
			{posts.length ? (
				<div>
					{posts.map((post) => (
						<PostItem key={post.id} {...post} />
					))}
				</div>
			) : (
				<p className={css.noPosts}>{tPost('noPosts')}</p>
			)}
		</section>
	)
}

export default PostsSection
