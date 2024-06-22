'use client'

import cn from 'classnames'
import { useFormik } from 'formik'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import Logo from '@/components/Logo'

import { links, onSubmit, socialNetworks, validationSchema } from './config'
import css from './Footer.module.scss'

function Footer() {
	const formik = useFormik({
		initialValues: {
			email: '',
		},
		validationSchema,
		onSubmit: ({ email }, { resetForm }) => {
			onSubmit(email)
			resetForm()
		},
	})
	const currentPath = usePathname()
	const isActive = (path: string) => currentPath === path
	return (
		<footer className={css.footer}>
			<div className={css.container}>
				<div className={css.header}>
					<Logo />
					<div className={css.links}>
						{links.map(({ path, title }) => (
							<Link
								key={title}
								href={path}
								className={cn(css.link, isActive(path) && css.activeLink)}
							>
								{title}
							</Link>
						))}
					</div>
				</div>
				<form className={css.form} onSubmit={formik.handleSubmit}>
					<p className={css.title}>Subscribe to our news letter to get latest updates and news</p>
					<div className={css.formContainer}>
						<input
							className={cn(
								css.input,
								formik.touched.email && formik.errors.email && css.inputInvalid
							)}
							placeholder="Enter Your Email"
							type="text"
							{...formik.getFieldProps('email')}
						/>
						<button
							className={cn(css.btn, '_btn')}
							disabled={!!(formik.touched.email && formik.errors.email)}
							type="submit"
						>
							Subscribe
						</button>
					</div>
				</form>
				<div className={css.info}>
					<div className={css.text}>
						<p>Finstreet 118 2561 Fintown</p>
						<p>Hello@finsweet.com 020 7993 2905</p>
					</div>
					<div className={css.socialNetworks}>{socialNetworks}</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
