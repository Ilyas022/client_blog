import Image from 'next/image'

import reasonsImg from '@/assets/aboutReasonsImg.png'
import teamImg from '@/assets/aboutTeamImg.png'

import css from './ReasonsSection.module.scss'

function ReasonsSection() {
	return (
		<section className={css.section}>
			<div className={css.container}>
				<div className={css.item}>
					<p className={css.title}>Our team of creatives</p>
					<p className={css.desc}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
						incididunt.
					</p>
					<p className={css.text}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
						incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
						exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
						dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.
					</p>
				</div>
				<Image className={css.img} alt="" src={teamImg} />
				<span className={css.rect} />
			</div>
			<div className={css.container}>
				<Image className={css.img} alt="" src={reasonsImg} />
				<div>
					<p className={css.title}>Why we started this Blog</p>
					<p className={css.desc}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
						incididunt.
					</p>
					<p className={css.text}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
						incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
						exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
						dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.
					</p>
				</div>
				<span className={css.circle} />
			</div>
		</section>
	)
}

export default ReasonsSection
