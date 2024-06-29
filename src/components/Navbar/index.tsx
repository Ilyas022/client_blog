'use client'

import cn from 'classnames'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useLocale, useTranslations } from 'next-intl'
import { useState } from 'react'
import { createPortal } from 'react-dom'

import { links } from './config'
import css from './Navbar.module.scss'
import { NavbarProps } from './types'
import PopUp from '../PopUp'

function Navbar({ handleOpen }: NavbarProps) {
	const currentPath = usePathname()
	const locale = useLocale()
	const t = useTranslations('Navbar')
	const [showVideo, setShowVideo] = useState(false)

	const isActive = (path: string) => currentPath === path

	const handleLinkClick = () => {
		if (handleOpen) {
			handleOpen()
		}
	}

	const handleVideoBtnClick = () => {
		setShowVideo((prev) => !prev)
	}
	return (
		<nav className={css.navbar}>
			{links.map(({ path, title }) => (
				<Link
					onClick={handleLinkClick}
					key={title}
					href={`/${locale}${path}`}
					className={cn(css.link, isActive(path) && css.activeLink)}
				>
					{t(title)}
				</Link>
			))}
			<button onClick={handleVideoBtnClick} className={css.videoBtn} type="button">
				{t('btn')}
			</button>
			{showVideo &&
				createPortal(
					<PopUp handleClose={handleVideoBtnClick} title="About video">
						<iframe
							className={css.frame}
							src="https://www.youtube.com/embed/72q0hXe-mec?si=Q8wPUvZHayg4Ty-A"
							title="YouTube video player"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							referrerPolicy="strict-origin-when-cross-origin"
							allowFullScreen
						/>
					</PopUp>,
					document.body
				)}
		</nav>
	)
}

export default Navbar
