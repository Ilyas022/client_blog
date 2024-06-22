import cn from 'classnames'
import Image from 'next/image'
import Link from 'next/link'

import postImage from '@/assets/blogPostImage.png'
import { POST_PAGE_ROUTE } from '@/constants/routes'

import css from './FeaturedPostSection.module.scss'

function FeaturedPostSection() {
	return (
		<section className={css.section}>
			<div className={css.container}>
				<div className={css.postData}>
					<h2 className={css.title}>Featured Post</h2>
					<p className={css.postTitle}>Step-by-step guide to choosing great font pairs </p>
					<p className={css.postInfo}>
						By <span className={css.nameMarker}>John Doe</span> l May 23, 2022{' '}
					</p>
					<p className={css.postText}>
						Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
						nulla pariatur. Excepteur sint occaecat cupidatat non proident.
					</p>
					<Link className={cn(css.btn, '_btn')} href={POST_PAGE_ROUTE}>
						Read More &gt;
					</Link>
				</div>
				<Image alt="post image" src={postImage} className={css.postImg} />
			</div>
		</section>
	)
}

export default FeaturedPostSection
