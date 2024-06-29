import JoinSection from '@/components/JoinSection'

import css from './BlogPage.module.scss'
import AllPostsSection from './components/AllPostsSection'
import CategoriesSection from './components/CategoriesSection'
import FeaturedPostSection from './components/FeaturedPostSection'

function Blog() {
	return (
		<main>
			<FeaturedPostSection />
			<div className={css.container}>
				<AllPostsSection />
				<CategoriesSection />
				<JoinSection />
			</div>
		</main>
	)
}

export default Blog
