import { mockCategories } from '@/constants/mockCategories'

export const getCategory = (id: string) => {
	return mockCategories.find((category) => category.id === id)
}
