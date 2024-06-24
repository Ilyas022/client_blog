import cn from 'classnames'
import Image from 'next/image'

import userImage from '@/assets/userImage.png'

import css from './AuthorSection.module.scss'
import { socialNetworks } from './config'

function AuthorSection() {
	return (
		<section className={css.section}>
			<div className={cn('container', css.container)}>
				<Image className={css.userImage} alt="" src={userImage} />
				<div className={css.userInfo}>
					<p className={css.intro}>Hey there, I’m Andrew Jonhson and welcome to my Blog</p>
					<p className={css.desc}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
						incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque
						viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.
					</p>
					<div className={css.icons}>{socialNetworks}</div>
				</div>
				<div className={css.footer}>
					<span className={css.yellowItem} />
					<span className={css.purpleItem} />
				</div>
			</div>
		</section>
	)
}

export default AuthorSection
