import emailjs from '@emailjs/browser'
import * as Yup from 'yup'

import FaceBookIcon from '@/assets/icons/FaceBookIcon'
import InstagramIcon from '@/assets/icons/InstagramIcon'
import LinkedInIcon from '@/assets/icons/LinkedInIcon'
import TwitterIcon from '@/assets/icons/TwitterIcon'
import {
	ABOUT_PAGE_ROUTE,
	BLOG_PAGE_ROUTE,
	CONTACTS_PAGE_ROUTE,
	HOME_PAGE_ROUTE,
	PRIVACY_PAGE_ROUTE,
} from '@/constants/routes'

export const validationSchema = Yup.object({
	email: Yup.string().email('Invalid email address').required('Required'),
})

export const links = [
	{
		title: 'Home',
		path: HOME_PAGE_ROUTE,
	},
	{
		title: 'Blog',
		path: BLOG_PAGE_ROUTE,
	},
	{
		title: 'About Us',
		path: ABOUT_PAGE_ROUTE,
	},
	{
		title: 'Contact us',
		path: CONTACTS_PAGE_ROUTE,
	},
	{
		title: 'Privacy Policy',
		path: PRIVACY_PAGE_ROUTE,
	},
]

export const socialNetworks = [
	<FaceBookIcon key={1} />,
	<TwitterIcon key={2} />,
	<InstagramIcon key={3} />,
	<LinkedInIcon key={4} />,
]

export const onSubmit = (email: string) => {
	emailjs.send(
		process.env.NEXT_PUBLIC_SERVICE_ID,
		process.env.NEXT_PUBLIC_TEMPLATE_ID,
		{
			from_name: 'Customer',
			to_name: 'Ilya',
			from_email: email,
			message: 'new suscription',
		},
		process.env.NEXT_PUBLIC_PUBLIC_KEY
	)
}
