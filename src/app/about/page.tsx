import AuthorsSection from '@/components/AuthorsSection'
import JoinSection from '@/components/JoinSection'
import { mockAuthors } from '@/constants/mockAuthors'

import AboutUsSection from './components/AboutUsSection'
import ReasonsSection from './components/ReasonsSection'

function About() {
	return (
		<main>
			<div className="container">
				<AboutUsSection />
				<ReasonsSection />
				<AuthorsSection authors={mockAuthors} />
				<JoinSection />
			</div>
		</main>
	)
}

export default About
