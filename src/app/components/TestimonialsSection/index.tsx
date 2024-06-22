import { carouselData } from './config'
import css from './TestimonialsSection.module.scss'
import Carousel from '../Carousel'

function TestimonialsSection() {
	return (
		<section className={css.section}>
			<div>
				<p className={css.title}>TESTIMONIALS</p>
				<p className={css.description}>What people say about our blog</p>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
			</div>
			<span className={css.separator} />
			<Carousel data={carouselData} />
		</section>
	)
}

export default TestimonialsSection
