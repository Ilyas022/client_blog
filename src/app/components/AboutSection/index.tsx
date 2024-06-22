import Link from 'next/link'

import { ABOUT_PAGE_ROUTE } from '@/constants/routes'

import css from './AboutSection.module.scss'

function AboutSection() {
	return (
		<section className={css.section}>
			<div className={css.header}>
				<span className={css.yellowItem} />
				<span className={css.purpleItem} />
			</div>
			<div className={css.container}>
				<div>
					<h2 className={css.title}>ABOUT US</h2>
					<p className={css.desc}>
						We are a community of content writers who share their learnings
					</p>
					<p className={css.info}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
						incididunt ut labore et dolore magna aliqua.
					</p>
					<Link className={css.link} href={ABOUT_PAGE_ROUTE}>
						Read More &gt;
					</Link>
				</div>
				<div className={css.mission}>
					<h2 className={css.title}>Our mision</h2>
					<p className={css.missionDesc}>
						Creating valuable content for creatives all around the world
					</p>
					<p className={css.info}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
						incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
						exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
					</p>
				</div>
			</div>
		</section>
	)
}

export default AboutSection
