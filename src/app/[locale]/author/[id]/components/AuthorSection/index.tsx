import Image from 'next/image'
import { getTranslations } from 'next-intl/server'

import css from './AuthorSection.module.scss'
import { socialNetworks, getAuthor } from './config'

async function AuthorSection({ userId }: { userId: string }) {
	const t = await getTranslations('Authors')
	const author = await getAuthor(userId)

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
