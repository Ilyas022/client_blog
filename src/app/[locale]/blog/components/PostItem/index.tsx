import Image from 'next/image'
import Link from 'next/link'

import css from './PostItem.module.scss'
import { PostItemProps } from './types'

function PostItem({ category, href, img, text, title }: PostItemProps) {
	return (
		<Link href={href} className={css.post}>
			<Image alt="post image" src={img} className={css.postImg} />
			<div>
				<p className={css.postCategory}>{category}</p>
				<p className={css.postTitle}>{title}</p>
				<p className={css.postText}>{text}</p>
			</div>
		</Link>
	)
}

export default PostItem
