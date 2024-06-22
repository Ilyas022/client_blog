import Image, { StaticImageData } from 'next/image'

import css from './SuggestionCard.module.scss'

interface ISuggestionCard {
	img: StaticImageData
	date: string
	userName: string
	title: string
	text: string
}

function SuggestionCard({ date, img, text, title, userName }: ISuggestionCard) {
	return (
		<div className={css.card}>
			<Image alt="post image" src={img} className={css.img} />
			<p className={css.postInfo}>
				By <span className={css.userMarker}>{userName}</span> l {date}
			</p>
			<p className={css.title}>{title}</p>
			<p className={css.text}>{text}</p>
		</div>
	)
}

export default SuggestionCard
