import cn from 'classnames'
import { useEffect } from 'react'

import NavbarMobile from '@/components/NavbarMobile'
import { useScrollLock } from '@/hooks/useScrollLock'

import css from './MenuBurger.module.scss'
import { MenuBurgerProps } from './types'

function MenuBurger({ handleOpen, isOpened }: MenuBurgerProps) {
	const [lockScroll, unlockScroll] = useScrollLock()

	useEffect(() => {
		if (isOpened) {
			lockScroll()
		}

		return () => unlockScroll()
	}, [lockScroll, unlockScroll, isOpened])

	return (
		<div className={cn(css.menu, isOpened && css.menuOpened)}>
			<NavbarMobile handleOpen={handleOpen} />
		</div>
	)
}

export default MenuBurger
