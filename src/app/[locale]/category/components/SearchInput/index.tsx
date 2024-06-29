'use client'

import { useSearchParams, usePathname, useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'
import React, { useEffect, useState } from 'react'

import { useDebounce } from '@/hooks/useDebounce'

import css from './SearchInput.module.scss'

function SearchInput() {
	const searchParams = useSearchParams()
	const params = new URLSearchParams(searchParams)
	const [inputValue, setInputValue] = useState(() => params.get('search') || '')
	const pathname = usePathname()
	const { replace } = useRouter()
	const debouncedSearch = useDebounce(inputValue)
	const t = useTranslations('Categories')

	const setQueryParam = (param: string, value: string) => {
		params.set(param, value)
		replace(`${pathname}?${params.toString()}`, { scroll: false })
	}
	const deleteQueryParam = (param: string) => {
		params.delete(param)
		replace(`${pathname}?${params.toString()}`)
	}

	useEffect(() => {
		if (debouncedSearch) {
			setQueryParam('search', debouncedSearch)
		} else {
			deleteQueryParam('search')
		}
	}, [debouncedSearch])

	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target
		setInputValue(value)
	}

	return (
		<div className={css.bar}>
			<input
				className={css.input}
				type="text"
				placeholder={t('input')}
				value={inputValue}
				onChange={handleSearch}
			/>
			<button type="button" className={css.btn}>
				{t('btn')}
			</button>
		</div>
	)
}

export default SearchInput
