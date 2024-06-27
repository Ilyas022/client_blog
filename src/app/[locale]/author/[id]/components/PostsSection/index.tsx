'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'

import { getPosts } from '@/utils/getPosts'

import css from './PostsSection.module.scss'

function PostsSection({ userId }: { userId: string }) {
	const tPost = useTranslations('Posts')
	const tCategory = useTranslations('Categories')
	const posts = getPosts(userId)

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
