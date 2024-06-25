import css from './InfoSection.module.scss'

function InfoSection() {
	return (
		<div className={css.container}>
			<div className={css.header}>
				<h2 className={css.title}>Contact us</h2>
				<p className={css.desc}>Let`s Start a Conversation</p>
				<p className={css.text}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
					ut labore et dolore magna aliqua. Ut enim ad minim.
				</p>
			</div>
			<div className={css.info}>
				<div className={css.col}>
					<p className={css.colTitle}>Working hours</p>
					<span className={css.separator} />
					<p className={css.colInfo}>Monday To Friday</p>
					<p className={css.colInfo}>9:00 AM to 8:00 PM </p>
					<p className={css.colText}>Our Support Team is available 24/7</p>
				</div>
				<div className={css.col}>
					<p className={css.colTitle}>Contact Us</p>
					<span className={css.separator} />
					<p className={css.colInfo}>020 7993 2905</p>
					<p className={css.colText}>hello@finsweet.com</p>
				</div>
			</div>
		</div>
	)
}

export default InfoSection
