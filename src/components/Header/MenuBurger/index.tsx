import cn from 'classnames'
import { useEffect } from 'react'

import Navbar from '@/components/Navbar'
import { useScrollLock } from '@/hooks/useScrollLock'

import css from './MenuBurger.module.scss'

interface IMenuBurger {
	isOpened: boolean
	handleOpen: () => void
}

function MenuBurger({ handleOpen, isOpened }: IMenuBurger) {
	const [lockScroll, unlockScroll] = useScrollLock()

	useEffect(() => {
		if (isOpened) {
			lockScroll()
		}

		return () => unlockScroll()
	}, [lockScroll, unlockScroll, isOpened])

	return (
		<div className={cn(css.menu, isOpened && css.menuOpened)}>
			<Navbar handleOpen={handleOpen} />
		</div>
	)
}

export default MenuBurger
