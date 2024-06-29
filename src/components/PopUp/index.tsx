import { useEffect, useRef } from 'react'

import { useScrollLock } from '@/hooks/useScrollLock'

import css from './PopUp.module.scss'

export interface PopUpProps {
	children: JSX.Element
	handleClose: () => void
	title: string
}

function PopUp({ children, title, handleClose }: PopUpProps) {
	const [lockScroll, unlockScroll] = useScrollLock()
	const ref = useRef(null)

	useEffect(() => {
		lockScroll()
		return () => unlockScroll()
	}, [])

	const handleClickOutside = (e: React.MouseEvent<HTMLButtonElement>) => {
		if (e.target === ref.current) handleClose()
	}

	return (
		<button type="button" className={css.popUp} onMouseDown={handleClickOutside} ref={ref}>
			<div className={css.container}>
				<div className={css.header}>
					<h2 className={css.title}>{title}</h2>
					<button type="button" className={css.closeBtn} onClick={handleClose} />
				</div>
				<div className={css.body}>{children}</div>
			</div>
		</button>
	)
}

export default PopUp
