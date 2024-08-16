import Image from 'next/image'
import Link from 'next/link'
import { useLocale } from 'next-intl'

import { POST_PAGE_ROUTE } from '@/constants/routes'
import { Post } from '@/types/interfaces'

import css from './PostItem.module.scss'

type PostItemProps = Pick<Post, 'category' | 'title' | 'img' | 'text' | 'id'>

function PostItem({ category, img, text, title, id }: PostItemProps) {
	const locale = useLocale()

	return (
		<Link href={`/${locale}${POST_PAGE_ROUTE}${id}`} key={id} className={css.post}>
			<Image className={css.postImg} alt="post image" src={img} />
			<div className={css.postInfo}>
				<p className={css.postTitle}>{category.name}</p>
				<p className={css.postDesc}>{title}</p>
				<p className={css.postText}>{text}</p>
			</div>
		</Link>
	)
}

export default PostItem
