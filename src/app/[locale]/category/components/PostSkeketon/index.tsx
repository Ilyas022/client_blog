import css from './PostSkeleton.module.scss'

function PostSkeketon() {
	return (
		<div className={css.post}>
			<div className={css.img} />
			<div className={css.container}>
				<div />
				<div />
				<div />
			</div>
		</div>
	)
}

export default PostSkeketon
