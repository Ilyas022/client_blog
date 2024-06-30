import Image from 'next/image'
import { getTranslations } from 'next-intl/server'

import startUpIcon from '@/assets/icons/startUpIcon.svg'
import { Author, Post } from '@/types/interfaces'

import { getPost, geAuthor } from './config'
import css from './PostSection.module.scss'

async function PostSection({ postId }: { postId: string }) {
	const tAuthor = await getTranslations('Authors')
	const tPost = await getTranslations('Posts')
	const tCategory = await getTranslations('Categories')
	const post: Post = await getPost(postId)
	const author: Author = await geAuthor(post.author)

	if ((!post && !author) || !author || !post) {
		return null
	}

	const { category, img, text, title, date } = post
	const { icon, fullName } = author

	return (
		<section className={css.section}>
			<div className={css.postInfo}>
				<div className={css.userInfo}>
					<Image className={css.userImage} alt="user icon" src={icon} />
					<div>
						<p className={css.userName}>{tAuthor(fullName)}</p>
						<p>{tPost(date)}</p>
					</div>
				</div>
				<p className={css.postTitle}>{tPost(title)}</p>
				<div className={css.category}>
					<Image className={css.categoryIcon} alt="category icon" src={startUpIcon} />
					<p>{tCategory(category.name)}</p>
				</div>
			</div>
			<Image className={css.postImage} alt="post image" src={img} />
			<div className={css.postText}>
				<p>{tPost(text)}</p>
			</div>
		</section>
	)
}

export default PostSection
