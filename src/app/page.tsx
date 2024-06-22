import AboutSection from './components/AboutSection'
import AuthorsSection from './components/AuthorsSection'
import CategorySection from './components/CategorySection'
import FeaturedSection from './components/FeaturedSection'
import GreetingSection from './components/GreetingSection'
import ReasonSection from './components/ReasonSection'
import TestimonialsSection from './components/TestimonialsSection'
import JoinSection from '../components/JoinSection'

export default function Home() {
	return (
		<main>
			<div className="container">
				<GreetingSection />
				<FeaturedSection />
				<AboutSection />
				<CategorySection />
				<ReasonSection />
				<AuthorsSection />
				<TestimonialsSection />
				<JoinSection />
			</div>
		</main>
	)
}
