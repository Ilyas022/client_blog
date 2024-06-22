import CompanyLogo1 from '@/assets/icons/CompanyLogo1'
import CompanyLogo2 from '@/assets/icons/CompanyLogo2'
import CompanyLogo3 from '@/assets/icons/CompanyLogo3'
import CompanyLogo4 from '@/assets/icons/CompanyLogo4'
import CompanyLogo5 from '@/assets/icons/CompanyLogo5'
import FaceBookIcon from '@/assets/icons/FaceBookIcon'
import InstagramIcon from '@/assets/icons/InstagramIcon'
import LinkedInIcon from '@/assets/icons/LinkedInIcon'
import TwitterIcon from '@/assets/icons/TwitterIcon'
import user1Icon from '@/assets/user1Icon.png'
import user2Icon from '@/assets/user2Icon.png'
import user3Icon from '@/assets/user3Icon.png'
import user4Icon from '@/assets/user4Icon.png'

export const authors = [
	{
		fullName: 'Floyd Miles',
		job: 'Content Writer @Company',
		icon: user1Icon,
	},
	{
		fullName: 'Dianne Russell',
		job: 'Content Writer @Company',
		icon: user2Icon,
	},
	{
		fullName: 'Jenny Wilson',
		job: 'Content Writer @Company',
		icon: user3Icon,
	},
	{
		fullName: 'Leslie Alexander',
		job: 'Content Writer @Company',
		icon: user4Icon,
	},
]

export const socialNetworks = [
	<FaceBookIcon key={1} />,
	<TwitterIcon key={2} />,
	<InstagramIcon key={3} />,
	<LinkedInIcon key={4} />,
]

export const companies = [
	<CompanyLogo1 key={1} />,
	<CompanyLogo2 key={2} />,
	<CompanyLogo3 key={3} />,
	<CompanyLogo4 key={4} />,
	<CompanyLogo5 key={5} />,
]
