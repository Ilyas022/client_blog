import Image from 'next/image'

import economyImg from '@/assets/auhtorEconomyPost.png'
import businessImg from '@/assets/authorBusinessPost.png'

import css from './PostsSection.module.scss'

function PostsSection() {
	return (
		<section className={css.section}>
			<h2 className={css.title}>My Posts</h2>
			<div>
				<div className={css.post}>
					<Image className={css.postImg} alt="post image" src={businessImg} />
					<div className={css.postInfo}>
						<p className={css.postTitle}>BUSINESS</p>
						<p className={css.postDesc}>Font sizes in UI design: The complete guide to follow</p>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
							incididunt ut labore et dolore magna aliqua.
						</p>
					</div>
				</div>
				<div className={css.post}>
					<Image className={css.postImg} alt="post image" src={economyImg} />
					<div className={css.postInfo}>
						<p className={css.postTitle}>ECONOMY</p>
						<p className={css.postDesc}>How to build rapport with your web design clients</p>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
							incididunt ut labore et dolore magna aliqua.
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default PostsSection
