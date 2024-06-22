import cn from 'classnames'

import { privacyMainPart, privacySecondaryPart } from './config'
import css from './PrivacyPage.module.scss'

function Privacy() {
	return (
		<main className={css.page}>
			<div className={css.header}>
				<div className={css.headerContainer}>
					<h2 className={css.title}>Privacy Policy</h2>
					<p>Last Updated on 27th January 2022</p>
				</div>
			</div>
			<div className={css.container}>
				<p className={cn(css.privacyTitle, css.title)}>Lorem ipsum dolor sit amet</p>
				<p className={css.privacyText}>{privacyMainPart}</p>
				<p className={css.privacySubtitle}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
				</p>
				{privacySecondaryPart.map((text, i) => (
					<p key={i} className={css.privacyText}>
						{text}
					</p>
				))}
			</div>
		</main>
	)
}

export default Privacy
