import AllPostsSection from './components/AllPostsSection'
import FeaturedPostSection from './components/FeaturedPostSection'

function Blog() {
	return (
		<main>
			<FeaturedPostSection />
			<div className="container">
				<AllPostsSection />
			</div>
		</main>
	)
}

export default Blog
