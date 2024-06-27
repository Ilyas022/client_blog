import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { useLocale, useTranslations } from 'next-intl'

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
	const t = useTranslations('Authors')
	const locale = useLocale()
	return (
		<section className={css.section}>
			<h2 className={css.title}>{t('title')}</h2>
			<div className={css.authors}>
				{authors.map(({ fullName, job, icon, id }) => (
					<Link href={`/${locale}/${AUTHOR_PAGE_ROUTE}/${id}`} className={css.author} key={id}>
						<Image className={css.authorImg} alt="user image" src={icon} />
						<p className={css.authorFullName}>{t(fullName)}</p>
						<p className={css.authorJob}>{t(job)}</p>
						<div className={css.icons}>{socialNetworks}</div>
					</Link>
				))}
			</div>
		</section>
	)
}

export default AuthorsSection
