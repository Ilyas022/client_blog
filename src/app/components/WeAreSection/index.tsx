import { companies } from './config'
import css from './WeAreSection.module.scss'

function WeAreSection() {
	return (
		<section className={css.weAre}>
			<div className={css.presentation}>
				<p>We are</p>
				<p>Featured in</p>
			</div>
			<div className={css.companies}>{companies}</div>
		</section>
	)
}

export default WeAreSection
