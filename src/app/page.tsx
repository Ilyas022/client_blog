'use client'

import cn from 'classnames'
import { useInViewRef } from 'rooks'

import { mockAuthors } from '@/constants/mockAuthors'

import AboutSection from './components/AboutSection'
import CategorySection from './components/CategorySection'
import FeaturedSection from './components/FeaturedSection'
import GreetingSection from './components/GreetingSection'
import ReasonSection from './components/ReasonSection'
import TestimonialsSection from './components/TestimonialsSection'
import WeAreSection from './components/WeAreSection'
import css from './HomePage.module.scss'
import AuthorsSection from '../components/AuthorsSection'
import JoinSection from '../components/JoinSection'

export default function Home() {
	const [authorsRef, authorsSectionInView] = useInViewRef()
	const [joinRef, joinSectionInView] = useInViewRef()
	return (
		<main>
			<div className="container">
				<GreetingSection />
				<FeaturedSection />
				<AboutSection />
				<CategorySection />
				<ReasonSection />
				<div
					className={cn(css.section, authorsSectionInView && css.sectionVisible)}
					ref={authorsRef}
				>
					<AuthorsSection authors={mockAuthors} />
				</div>
				<WeAreSection />
				<TestimonialsSection />
				<div className={cn(css.section, joinSectionInView && css.sectionVisible)} ref={joinRef}>
					<JoinSection />
				</div>
			</div>
		</main>
	)
}
