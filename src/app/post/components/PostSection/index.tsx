import Image from 'next/image'

import postImage from '@/assets/fullPostImage.png'
import startUpIcon from '@/assets/icons/startUpIcon.svg'
import userIcon from '@/assets/user1Icon.png'

import { postText } from './config'
import css from './PostSection.module.scss'

function PostSection() {
	return (
		<section className={css.section}>
			<div className={css.postInfo}>
				<div className={css.userInfo}>
					<Image className={css.userImage} alt="user icon" src={userIcon} />
					<div>
						<p className={css.userName}>Andrew Jonson</p>
						<p>Posted on 27th January 2022</p>
					</div>
				</div>
				<p className={css.postTitle}>Step-by-step guide to choosing great font pairs</p>
				<div className={css.category}>
					<Image className={css.categoryIcon} alt="category icon" src={startUpIcon} />
					<p>Startup</p>
				</div>
			</div>
			<Image className={css.postImage} alt="post image" src={postImage} />
			<div className={css.postText}>
				{postText.map(({ text, title, id }) => (
					<div key={id}>
						<p className={css.postSubtitle}>{title}</p>
						<p>{text}</p>
					</div>
				))}
			</div>
		</section>
	)
}

export default PostSection
