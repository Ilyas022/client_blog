import Image from 'next/image'

import { getPosts } from '@/utils/getPosts'

import css from './PostsSection.module.scss'

function PostsSection({ userId }: { userId: string }) {
	const posts = getPosts(userId)

	return (
		<section className={css.section}>
			<h2 className={css.title}>My Posts</h2>
			{posts.length ? (
				<div>
					{posts.map(({ id, category, img, text, title }) => (
						<div key={id} className={css.post}>
							<Image className={css.postImg} alt="post image" src={img} />
							<div className={css.postInfo}>
								<p className={css.postTitle}>{category.name}</p>
								<p className={css.postDesc}>{title}</p>
								<p>{text}</p>
							</div>
						</div>
					))}
				</div>
			) : (
				<p className={css.postDesc}>Author doesn`t have any posts.</p>
			)}
		</section>
	)
}

export default PostsSection
