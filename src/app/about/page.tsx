import AuthorsSection from '@/components/AuthorsSection'

import AboutUsSection from './components/AboutUsSection'
import ReasonsSection from './components/ReasonsSection'
import { authors } from './config'

function About() {
	return (
		<main>
			<div className="container">
				<AboutUsSection />
				<ReasonsSection />
				<AuthorsSection authors={authors} />
			</div>
		</main>
	)
}

export default About
