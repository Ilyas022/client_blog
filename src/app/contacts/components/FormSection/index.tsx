'use client'

import cn from 'classnames'
import { useFormik } from 'formik'
import { ChangeEvent } from 'react'

import Select from '@/components/Select'

import { formConfig, mockOptions, onSubmit } from './config'
import css from './FormSection.module.scss'

function FormSection() {
	const formik = useFormik({
		...formConfig,
		onSubmit: ({ email, message, query, fullName }, { resetForm }) => {
			onSubmit({ email, fullName, message, query })
			resetForm()
		},
	})

	const onInputChange = (field: string) => (e: ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target
		formik.setFieldValue(field, value).then(() => {
			formik.validateField(field)
		})
		formik.setFieldTouched(field)
	}

	const onSelectChange = async (value: string) => {
		formik.setFieldTouched('query')
		formik.setFieldValue('query', value).then(() => {
			formik.validateField('query')
		})
	}

	const onSelectBlur = () => {
		formik.validateField('query').then(() => {
			formik.setFieldTouched('query')
		})
	}

	return (
		<form className={css.form} onSubmit={formik.handleSubmit}>
			<div className={css.formInput}>
				<input
					className={cn(css.input, formik.errors.fullName && css.inputInvalid)}
					type="text"
					onBlur={() => formik.validateField('fullName')}
					onChange={onInputChange('fullName')}
					value={formik.values.fullName}
					placeholder="Full Name"
				/>
				{formik.errors.fullName && <p className={css.error}>{formik.errors.fullName}</p>}
			</div>
			<div className={css.formInput}>
				<input
					className={cn(css.input, formik.errors.email && css.inputInvalid)}
					type="text"
					onBlur={() => formik.validateField('email')}
					onChange={onInputChange('email')}
					value={formik.values.email}
					placeholder="Your Email"
				/>
				{formik.errors.email && <p className={css.error}>{formik.errors.email}</p>}
			</div>
			<Select
				error={formik.errors.query}
				value={formik.values.query}
				options={mockOptions}
				title="Query Related"
				onChange={onSelectChange}
				onBlur={onSelectBlur}
			/>
			<div className={css.formInput}>
				<input
					className={cn(css.input, formik.errors.message && css.inputInvalid)}
					type="text"
					onBlur={() => formik.validateField('message')}
					onChange={onInputChange('message')}
					value={formik.values.message}
					placeholder="Message"
				/>
				{formik.errors.message && <p className={css.error}>{formik.errors.message}</p>}
			</div>
			<button
				className={cn(css.btn, '_btn')}
				disabled={!(Object.keys(formik.touched).length === 4 && !Object.keys(formik.errors).length)}
				type="submit"
			>
				Subscribe
			</button>
		</form>
	)
}

export default FormSection
