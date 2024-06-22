import cn from 'classnames'
import Link from 'next/link'

import { CONTACTS_PAGE_ROUTE } from '@/constants/routes'

import css from './JoinSection.module.scss'

function JoinSection() {
	return (
		<section className={css.section}>
			<h2 className={css.title}>Join our team to be a part of our story</h2>
			<p className={css.text}>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
			</p>
			<Link href={CONTACTS_PAGE_ROUTE} type="button" className={cn(css.btn, '_btn')}>
				Join Now
			</Link>
		</section>
	)
}

export default JoinSection
