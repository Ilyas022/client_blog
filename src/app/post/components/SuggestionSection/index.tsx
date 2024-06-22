import { suggestions } from './config'
import css from './SuggestionSection.module.scss'
import SuggestionCard from '../SuggestionCard'

function SuggestionSection() {
	return (
		<section className={css.section}>
			<h2 className={css.title}>What to read next</h2>
			<div className={css.suggestions}>
				{suggestions.map(({ date, img, text, title, userName }, i) => (
					<SuggestionCard
						key={i}
						date={date}
						img={img}
						text={text}
						title={title}
						userName={userName}
					/>
				))}
			</div>
		</section>
	)
}

export default SuggestionSection
