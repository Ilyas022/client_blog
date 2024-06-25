'use client'

import cn from 'classnames'
import { useMemo, useRef, useState } from 'react'

import useOnClickOutside from '@/hooks/useOnClickOutside'

import css from './Select.module.scss'

export interface SelectProps {
	error?: string
	options: {
		label: string
		value: string
	}[]
	title: string
	value: string
	onChange: (value: string) => void
	onBlur: () => void
}

function Select({ error, onBlur, onChange, options, title, value }: SelectProps) {
	const [active, setActive] = useState(false)
	const ref = useRef(null)

	const handleChange = (event: React.MouseEvent<HTMLButtonElement>) => {
		const optionValue = event.currentTarget.value
		onChange(optionValue)
		setActive(false)
		onBlur()
	}

	const handleClickOutside = () => {
		if (active) {
			setActive(false)
			onBlur()
		}
	}

	useOnClickOutside(ref, handleClickOutside)

	const selectedOption = useMemo(() => {
		if (options) {
			return options.find((option) => option.value === value)
		}
	}, [value])

	return (
		<div ref={ref} className={css.select}>
			<button
				className={cn(css.selectItem, active && css.selectItemActive, error && css.selectItemError)}
				type="button"
				onClick={() => setActive((prev) => !prev)}
			>
				<p>{selectedOption?.label || title}</p>
			</button>
			{active && (
				<div className={css.menu}>
					{options.map((option) => (
						<button
							className={cn(css.option, option.value === value ? css.optionActive : undefined)}
							onClick={handleChange}
							type="button"
							key={option.value}
							value={option.value}
						>
							{option.label}
						</button>
					))}
				</div>
			)}
			{error && <p className={css.error}>{error}</p>}
		</div>
	)
}

export default Select
