'use client'

import cn from 'classnames'
import Image from 'next/image'
import Link from 'next/link'

import postimg from '@/assets/postImg.png'
import { POST_PAGE_ROUTE } from '@/constants/routes'

import { mockPosts } from './config'
import css from './FeaturedSection.module.scss'

function FeaturedSection() {
	return (
		<section className={css.section}>
			<div className={css.postCol}>
				<h2 className={css.postColTitle}>Featured Post</h2>
				<div className={css.post}>
					<Image src={postimg} alt="post image" className={css.postImg} />
					<p className={css.userInfo}>By John Doe l May 23, 2022</p>
					<p className={css.postTitle}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
					</p>
					<p className={css.postDesc}>
						Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
						nulla pariatur. Excepteur sint occaecat cupidatat non proident.
					</p>
					<Link className={cn(css.btn, '_btn')} href={POST_PAGE_ROUTE}>
						Read More &gt;
					</Link>
				</div>
			</div>
			<div className={css.postsCol}>
				<div className={css.postsHeader}>
					<p className={css.postsColTitle}>All Posts</p>
					<div className={css.showPosts}>View All</div>
				</div>
				<div>
					{mockPosts.map(({ date, title, userInfo }, i) => (
						<div key={i} className={css.smallPost}>
							<p className={css.smallPostInfo}>
								By <span className={css.smallPostUserMarker}>{userInfo}</span> l {date}
							</p>
							<p className={css.smallPostTitle}>{title}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default FeaturedSection
