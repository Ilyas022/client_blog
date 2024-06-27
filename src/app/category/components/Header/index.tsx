import css from './Header.module.scss'

function Header() {
	return (
		<div className={css.header}>
			<div className={css.container}>
				<p className={css.title}>Business</p>
				<p className={css.text}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
					ut labore.
				</p>
				<p className={css.desc}>Blog &gt; Business</p>
			</div>
		</div>
	)
}

export default Header
