'use client'

import cn from 'classnames'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useLocale, useTranslations } from 'next-intl'

import { links } from './config'
import css from './Navbar.module.scss'
import { NavbarProps } from './types'

function Navbar({ handleOpen }: NavbarProps) {
	const currentPath = usePathname()
	const locale = useLocale()
	const t = useTranslations('Navbar')

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
					href={`/${locale}${path}`}
					className={cn(css.link, isActive(path) && css.activeLink)}
				>
					{t(title)}
				</Link>
			))}
			<button className={css.videoBtn} type="button">
				{t('btn')}
			</button>
		</nav>
	)
}

export default Navbar
