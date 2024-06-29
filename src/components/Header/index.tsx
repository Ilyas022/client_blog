'use client'

import { useState } from 'react'

import BurgerButton from '@/components/Header/BurgerBtn'
import Navbar from '@/components/Navbar'

import css from './Header.module.scss'
import MenuBurger from './MenuBurger'

function Header() {
	const [popUpOpen, setPopUpOpen] = useState(false)

	const handleOpen = () => {
		setPopUpOpen((prev) => !prev)
	}

	return (
		<header className={css.header}>
			<div className={css.container}>
				<p className={css.logo}>Modsen Client Blog</p>
				<Navbar />
				<BurgerButton isOpened={popUpOpen} setOpened={handleOpen} />
				<MenuBurger isOpened={popUpOpen} handleOpen={handleOpen} />
			</div>
		</header>
	)
}

export default Header
