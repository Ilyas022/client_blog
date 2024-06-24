import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

import { AUTHOR_PAGE_ROUTE } from '@/constants/routes'

import css from './AuthorsSection.module.scss'
import { socialNetworks } from './config'

interface AuthorsSectionProps {
	authors: {
		fullName: string
		job: string
		icon: StaticImageData
		id: string
	}[]
}

function AuthorsSection({ authors }: AuthorsSectionProps) {
	return (
		<section className={css.section}>
			<h2 className={css.title}>List of Authors</h2>
			<div className={css.authors}>
				{authors.map(({ fullName, job, icon, id }) => (
					<Link href={`${AUTHOR_PAGE_ROUTE}/${id}`} className={css.author} key={id}>
						<Image className={css.authorImg} alt="user image" src={icon} />
						<p className={css.authorFullName}>{fullName}</p>
						<p className={css.authorJob}>{job}</p>
						<div className={css.icons}>{socialNetworks}</div>
					</Link>
				))}
			</div>
		</section>
	)
}

export default AuthorsSection
