'use client'

import cn from 'classnames'
import { useInViewRef } from 'rooks'

import { companies } from './config'
import css from './WeAreSection.module.scss'

function WeAreSection() {
	const [ref, inView] = useInViewRef()
	return (
		<section className={cn(css.section, inView && css.sectionVisible)} ref={ref}>
			<div className={css.presentation}>
				<p>We are</p>
				<p>Featured in</p>
			</div>
			<div className={css.companies}>{companies}</div>
		</section>
	)
}

export default WeAreSection
