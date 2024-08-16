import css from './CategoryPage.module.scss'
import Header from './components/Header'
import PostList from './components/PostList'
import Sidebar from './components/Sidebar'

function Category() {
	return (
		<main>
			<Header className={css.header} />
			<div className={css.container}>
				<PostList />
				<Sidebar />
			</div>
		</main>
	)
}

export default Category
