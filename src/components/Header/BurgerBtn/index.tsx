import css from './BurgerBtn.module.scss'
import { BurgerBtnProps } from './types'

function BurgerButton({ isOpened, setOpened }: BurgerBtnProps) {
	const handleClick = () => {
		setOpened()
	}

	return (
		<div className={css.burgerBtn}>
			<input
				id="menuBurger"
				className={css.input}
				onChange={handleClick}
				type="checkbox"
				checked={isOpened}
			/>
			<label htmlFor="menuBurger" className={css.label} />
		</div>
	)
}

export default BurgerButton
