import AboutSection from './components/AboutSection'
import FeaturedSection from './components/FeaturedSection'
import GreetingSection from './components/GreetingSection'
import css from './HomePage.module.scss'

export default function Home() {
	return (
		<main>
			<div className={css.container}>
				<GreetingSection />
				<FeaturedSection />
				<AboutSection />
			</div>
		</main>
	)
}
