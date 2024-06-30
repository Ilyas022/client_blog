import Image from 'next/image'
import { getTranslations } from 'next-intl/server'

import { Post } from '@/types/interfaces'

import { getPosts } from './config'
import css from './PostsSection.module.scss'

async function PostsSection({ userId }: { userId: string }) {
	const tPost = await getTranslations('Posts')
	const tCategory = await getTranslations('Categories')

	const posts: Post[] = await getPosts(userId)

	if (!posts?.length) return null

	return (
		<section className={css.section}>
			<h2 className={css.title}>{tPost('myPostsTitle')}</h2>
			{posts.length ? (
				<div>
					{posts.map(({ id, category, img, text, title }) => (
						<div key={id} className={css.post}>
							<Image className={css.postImg} alt="post image" src={img} />
							<div className={css.postInfo}>
								<p className={css.postTitle}>{tCategory(category.name)}</p>
								<p className={css.postDesc}>{tPost(title)}</p>
								<p>{tPost(text)}</p>
							</div>
						</div>
					))}
				</div>
			) : (
				<p className={css.postDesc}>{tPost('noPosts')}</p>
			)}
		</section>
	)
}

export default PostsSection
