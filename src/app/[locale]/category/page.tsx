import cn from 'classnames'

import css from './CategoryPage.module.scss'
import Header from './components/Header'
import PostList from './components/PostList'
import Sidebar from './components/Sidebar'

function Category() {
	return (
		<main>
			<Header />
			<div className={cn(css.container, 'container')}>
				<PostList />
				<Sidebar />
			</div>
		</main>
	)
}

export default Category
