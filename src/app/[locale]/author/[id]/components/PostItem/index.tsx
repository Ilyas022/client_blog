import Image from 'next/image'
import { getTranslations } from 'next-intl/server'

import { Post } from '@/types/interfaces'

import css from './PostItem.module.scss'

type PostItemProps = Pick<Post, 'category' | 'id' | 'title' | 'img' | 'text'>

async function PostItem({ category, id, title, img, text }: PostItemProps) {
	const tPost = await getTranslations('Posts')
	const tCategory = await getTranslations('Categories')

	return (
		<button type="button" key={id} className={css.post}>
			<Image className={css.postImg} alt="post image" src={img} />
			<div className={css.postInfo}>
				<p className={css.postTitle}>{tCategory(category.name)}</p>
				<p className={css.postDesc}>{tPost(title)}</p>
				<p>{tPost(text)}</p>
			</div>
		</button>
	)
}

export default PostItem
