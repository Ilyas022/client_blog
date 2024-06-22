'use client'

import cn from 'classnames'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { links } from './config'
import css from './Navbar.module.scss'
import { NavbarProps } from './types'

function Navbar({ handleOpen }: NavbarProps) {
	const currentPath = usePathname()
	const isActive = (path: string) => currentPath === path

	const handleClick = () => {
		if (handleOpen) {
			handleOpen()
		}
	}
	return (
		<nav className={css.navbar}>
			{links.map(({ path, title }) => (
				<Link
					onClick={handleClick}
					key={title}
					href={path}
					className={cn(css.link, isActive(path) && css.activeLink)}
				>
					{title}
				</Link>
			))}
			<button className={css.videoBtn} type="button">
				Video about us
			</button>
		</nav>
	)
}

export default Navbar
