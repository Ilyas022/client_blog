'use client'

import { useState } from 'react'

import BurgerButton from '@/components/Header/BurgerBtn'
import Logo from '@/components/Logo'
import Navbar from '@/components/Navbar'
import { useScreenDetector } from '@/hooks/useScreenDetector'

import css from './Header.module.scss'
import MenuBurger from './MenuBurger'

function Header() {
	const [popUpOpen, setPopUpOpen] = useState(false)
	const { isMobile } = useScreenDetector()

	const handleOpen = () => {
		setPopUpOpen((prev) => !prev)
	}

	return (
		<header className={css.header}>
			<div className={css.container}>
				<Logo />
				{!isMobile && <Navbar />}
				{isMobile && <BurgerButton isOpened={popUpOpen} setOpened={handleOpen} />}
				<MenuBurger isOpened={popUpOpen} handleOpen={handleOpen} />
			</div>
		</header>
	)
}

export default Header
