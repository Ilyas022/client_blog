import css from './Sidebar.module.scss'
import Filters from '../Filters'
import SearchInput from '../SearchInput'

function Sidebar() {
	return (
		<div className={css.sidebar}>
			<SearchInput className={css.search} />
			<Filters />
		</div>
	)
}

export default Sidebar
