import Image from 'next/image'

import image from '@/assets/aboutImage.png'

import css from './AboutUsSection.module.scss'

function AboutUsSection() {
	return (
		<section className={css.section}>
			<div className={css.header}>
				<div className={css.intro}>
					<p className={css.title}>ABOUT US</p>
					<p className={css.description}>
						We are a team of content writers who share their learnings
					</p>
				</div>
				<p className={css.text}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
					ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
					ullamco laboris nisi ut aliquip ex ea commodo consequat.
				</p>
			</div>
			<div className={css.statsContainer}>
				<Image alt="about img" src={image} className={css.img} />
				<div className={css.stats}>
					<div>
						<p className={css.statNumber}>12+</p>
						<p className={css.statTitle}>Blogs Published</p>
					</div>
					<div>
						<p className={css.statNumber}>18K+</p>
						<p className={css.statTitle}>Views on Finsweet</p>
					</div>
					<div>
						<p className={css.statNumber}>30K+</p>
						<p className={css.statTitle}>Total active Users</p>
					</div>
				</div>
				<div className={css.footer}>
					<span className={css.purpleItem} />
					<span className={css.yellowItem} />
				</div>
			</div>
			<div className={css.direction}>
				<div>
					<p className={css.title}>Our mision</p>
					<p className={css.subDescription}>
						Creating valuable content for creatives all around the world
					</p>
					<p className={css.text}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
						incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque
						viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.
					</p>
				</div>
				<div>
					<p className={css.title}>Our Vision</p>
					<p className={css.subDescription}>A platform that empowers individuals to improve</p>
					<p className={css.text}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
						incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque
						viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.
					</p>
				</div>
			</div>
		</section>
	)
}

export default AboutUsSection
