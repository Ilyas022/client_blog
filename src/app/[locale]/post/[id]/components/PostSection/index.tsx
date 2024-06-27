'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'

import startUpIcon from '@/assets/icons/startUpIcon.svg'
import { getAuthor } from '@/utils/getAuthor'
import { getPost } from '@/utils/getPost'

import css from './PostSection.module.scss'

function PostSection({ postId }: { postId: string }) {
	const tAuthor = useTranslations('Authors')
	const tPost = useTranslations('Posts')
	const tCategory = useTranslations('Categories')
	const post = getPost(postId)
	const author = getAuthor(post?.author as string)

	if (post && author) {
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
}

export default PostSection
