import AboutSection from './components/AboutSection'
import CategorySection from './components/CategorySection'
import FeaturedSection from './components/FeaturedSection'
import GreetingSection from './components/GreetingSection'
import ReasonSection from './components/ReasonSection'
import css from './HomePage.module.scss'

export default function Home() {
	return (
		<main>
			<div className={css.container}>
				<GreetingSection />
				<FeaturedSection />
				<AboutSection />
				<CategorySection />
				<ReasonSection />
			</div>
		</main>
	)
}
