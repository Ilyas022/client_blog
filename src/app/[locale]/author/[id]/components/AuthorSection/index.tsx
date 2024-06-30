'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { useEffect, useState } from 'react'

import { Author } from '@/types/interfaces'

import css from './AuthorSection.module.scss'
import { socialNetworks } from './config'

function AuthorSection({ userId }: { userId: string }) {
	const t = useTranslations('Authors')
	const [author, setAuthor] = useState<Author>()

	useEffect(() => {
		const getData = async () => {
			const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}author/${userId}`)
			const data = await res.json()
			setAuthor(data)
		}
		getData()
	}, [])

	if (author) {
		const { desc, icon, img, intro } = author
		return (
			<section className={css.section}>
				<div className={css.container}>
					<Image className={css.userImage} alt="" src={img || icon} />
					<div className={css.userInfo}>
						<p className={css.intro}>{t(intro)}</p>
						<p className={css.desc}>{t(desc)}</p>
						<div className={css.icons}>{socialNetworks}</div>
					</div>
					<div className={css.footer}>
						<span className={css.yellowItem} />
						<span className={css.purpleItem} />
					</div>
				</div>
			</section>
		)
	}
}

export default AuthorSection
