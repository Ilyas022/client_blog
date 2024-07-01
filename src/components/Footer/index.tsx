'use client'

import cn from 'classnames'
import { useFormik } from 'formik'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useLocale, useTranslations } from 'next-intl'

import { links, onSubmit, socialNetworks, validationSchema } from './config'
import css from './Footer.module.scss'

function Footer() {
	const locale = useLocale()
	const tNav = useTranslations('Navbar')
	const tFooter = useTranslations('Footer')
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
					<p className={css.logo}>Modsen Client Blog</p>
					<div className={css.links}>
						{links.map(({ path, title }) => (
							<Link
								key={title}
								href={`/${locale}${path}`}
								className={cn(css.link, isActive(path) && css.activeLink)}
							>
								{tNav(title)}
							</Link>
						))}
					</div>
				</div>
				<form className={css.form} onSubmit={formik.handleSubmit}>
					<p className={css.title}>{tFooter('title')}</p>
					<div className={css.formContainer}>
						<input
							className={cn(
								css.input,
								formik.touched.email && formik.errors.email && css.inputInvalid
							)}
							placeholder={tFooter('input')}
							type="text"
							{...formik.getFieldProps('email')}
						/>
						<button
							className={css.btn}
							disabled={!!(formik.touched.email && formik.errors.email)}
							type="submit"
						>
							{tFooter('btn')}
						</button>
					</div>
				</form>
				<div className={css.info}>
					<div className={css.text}>
						<p>
							{tFooter('street')} 118 2561 {tFooter('town')}
						</p>
						<p>Hello@finsweet.com 020 7993 2905</p>
					</div>
					<div className={css.socialNetworks}>{socialNetworks}</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
