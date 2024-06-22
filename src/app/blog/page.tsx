import JoinSection from '@/components/JoinSection'

import AllPostsSection from './components/AllPostsSection'
import CategoriesSection from './components/CategoriesSection'
import FeaturedPostSection from './components/FeaturedPostSection'

function Blog() {
	return (
		<main>
			<FeaturedPostSection />
			<div className="container">
				<AllPostsSection />
				<CategoriesSection />
				<JoinSection />
			</div>
		</main>
	)
}

export default Blog
