import businessImg1 from '@/assets/posts/businessPostImg1.png'
import businessImg2 from '@/assets/posts/businessPostImg2.png'
import economyImg from '@/assets/posts/economyPostImg1.png'
import startUpImg1 from '@/assets/posts/startUpPostImg1.png'
import startUpImg2 from '@/assets/posts/startUpPostImg2.png'
import technologyImg from '@/assets/posts/technologyPostImg1.png'

export const mockPosts = [
	{
		id: '0',
		img: startUpImg1,
		author: '1',
		category: {
			id: '0',
			name: 'StartupTitle',
		},
		title: '0.title',
		text: 'text',
		date: 'date',
		tags: ['0', '1'],
	},
	{
		id: '1',
		img: businessImg1,
		author: '2',
		category: {
			id: '1',
			name: 'BusinessTitle',
		},
		title: '1.title',
		text: 'text',
		date: 'date',
		tags: ['1', '2'],
	},
	{
		id: '2',
		img: startUpImg2,
		author: '3',
		category: {
			id: '0',
			name: 'StartupTitle',
		},
		title: '2.title',
		text: 'text',
		date: 'date',
		tags: ['2', '3'],
	},
	{
		id: '3',
		img: technologyImg,
		author: '4',
		category: {
			id: '2',
			name: 'TechnologyTitle',
		},
		title: '3.title',
		text: 'text',
		date: 'date',
		tags: ['3', '4'],
	},
	{
		id: '4',
		img: startUpImg1,
		author: '5',
		category: {
			id: '0',
			name: 'StartupTitle',
		},
		title: '4.title',
		text: 'text',
		date: 'date',
		tags: ['4', '5'],
	},
	{
		id: '5',
		img: businessImg2,
		author: '8',
		category: {
			id: '1',
			name: 'BusinessTitle',
		},
		title: '5.title',
		text: 'text',
		date: 'date',
		tags: ['5', '0'],
	},
	{
		id: '6',
		img: economyImg,
		author: '8',
		category: {
			id: '3',
			name: 'EconomyTitle',
		},
		title: '6.title',
		text: 'text',
		date: 'date',
		tags: ['1', '3'],
	},
]
