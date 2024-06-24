import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

import { POST_PAGE_ROUTE } from '@/constants/routes'

import css from './SuggestionCard.module.scss'

interface ISuggestionCard {
	id: string
	img: StaticImageData
	date: string
	userName: string
	title: string
	text: string
}

function SuggestionCard({ date, img, text, title, userName, id }: ISuggestionCard) {
	return (
		<Link href={`${POST_PAGE_ROUTE}/${id}`} className={css.card}>
			<Image alt="post image" src={img} className={css.img} />
			<p className={css.postInfo}>
				By <span className={css.userMarker}>{userName}</span> l {date}
			</p>
			<p className={css.title}>{title}</p>
			<p className={css.text}>{text}</p>
		</Link>
	)
}

export default SuggestionCard
