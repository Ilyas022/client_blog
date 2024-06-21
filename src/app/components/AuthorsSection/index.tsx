import Image from 'next/image'

import css from './AuthorsSection.module.scss'
import { authors, companies, socialNetworks } from './config'

function AuthorsSection() {
	return (
		<section className={css.section}>
			<h2 className={css.title}>List of Authors</h2>
			<div className={css.authors}>
				{authors.map(({ fullName, job, icon }) => (
					<div className={css.author} key={fullName}>
						<Image className={css.authorImg} alt="user image" src={icon} />
						<p className={css.authorFullName}>{fullName}</p>
						<p className={css.authorJob}>{job}</p>
						<div className={css.icons}>{socialNetworks}</div>
					</div>
				))}
			</div>
			<div className={css.weAre}>
				<div className={css.presentation}>
					<p>We are</p>
					<p>Featured in</p>
				</div>
				<div className={css.companies}>{companies}</div>
			</div>
		</section>
	)
}

export default AuthorsSection
