import emailjs from '@emailjs/browser'
import * as Yup from 'yup'

const validationSchema = Yup.object({
	fullName: Yup.string().required('Required'),
	email: Yup.string().email('Invalid email address').required('Required'),
	query: Yup.string().required('Required'),
	message: Yup.string().required('Required'),
})

export const onSubmit = ({
	email,
	fullName,
	query,
	message,
}: {
	email: string
	fullName: string
	query: string
	message: string
}) => {
	emailjs.send(
		process.env.NEXT_PUBLIC_SERVICE_ID,
		process.env.NEXT_PUBLIC_TEMPLATE_MESSAGE_ID,
		{
			full_name: fullName,
			query,
			email,
			message,
		},
		process.env.NEXT_PUBLIC_PUBLIC_KEY
	)
}

export const mockOptions = [
	{ label: 'query', value: 'query' },
	{ label: 'question', value: 'question' },
	{ label: 'suggestion', value: 'suggestion' },
	{ label: 'request', value: 'request' },
]

export const formConfig = {
	initialValues: {
		fullName: '',
		email: '',
		query: '',
		message: '',
	},
	validateOnBlur: false,
	validateOnChange: false,
	validationSchema,
}
