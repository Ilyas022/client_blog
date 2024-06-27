'use client'

import cn from 'classnames'
import Image from 'next/image'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useTranslations } from 'next-intl'

import { mockCategories } from '@/constants/mockCategories'
import { mockTags } from '@/constants/mockTags'

import css from './Filters.module.scss'

function Filters() {
	const searchParams = useSearchParams()
	const pathname = usePathname()
	const { replace } = useRouter()
	const tCategory = useTranslations('Categories')

	const params = new URLSearchParams(searchParams)

	const currentCategory = params.get('category')?.split(',')
	const currentTags = params.get('tag')?.split(',')

	const isCategoryActive = (id: string) => currentCategory?.includes(id) || false
	const isTagActive = (id: string) => currentTags?.includes(id) || false

	const setQueryParam = (param: string, value: string) => {
		params.set(param, value)
		replace(`${pathname}?${params}`, { scroll: false })
	}
	const deleteQueryParam = (param: string) => {
		params.delete(param)
		replace(`${pathname}?${params}`, { scroll: false })
	}

	const createChoiceHandler = (paramType: 'category' | 'tag') => (id: string) => () => {
		const currentParams = params.get(paramType)?.split(',')
		const isActive = paramType === 'category' ? isCategoryActive(id) : isTagActive(id)

		if (isActive) {
			if (currentParams && currentParams.length > 1) {
				const resParams = currentParams.filter((param) => param !== id).join(',')
				params.set(paramType, resParams)
				replace(`${pathname}?${params}`, { scroll: false })
			} else {
				deleteQueryParam(paramType)
			}
		} else if (currentParams?.length) {
			currentParams.push(id)
			params.set(paramType, currentParams.join(','))
			replace(`${pathname}?${params}`, { scroll: false })
		} else {
			setQueryParam(paramType, id)
		}
	}

	const handleCategoryChoice = createChoiceHandler('category')
	const handleTagChoice = createChoiceHandler('tag')

	return (
		<div className={css.filters}>
			<h2 className={css.title}>{tCategory('title')}</h2>
			<div className={css.categories}>
				{mockCategories.map(({ id, img, name }) => (
					<button
						type="button"
						onClick={handleCategoryChoice(id)}
						className={cn(css.category, isCategoryActive(id) && css.categoryActive)}
						key={id}
					>
						<div className={css.imgContainer}>
							<Image alt=" " src={img} className={css.img} />
						</div>
						<p className={css.categoryName}>{tCategory(name)}</p>
					</button>
				))}
			</div>

			<h2 className={css.tagsTitle}>{tCategory('tagTitle')}</h2>
			<div className={css.tags}>
				{mockTags.map(({ id, name }) => (
					<button
						type="button"
						key={id}
						onClick={handleTagChoice(id)}
						className={cn(css.tag, isTagActive(id) && css.tagActive)}
					>
						{tCategory(name)}
					</button>
				))}
			</div>
		</div>
	)
}

export default Filters
