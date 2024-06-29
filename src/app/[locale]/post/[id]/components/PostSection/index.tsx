'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { useState, useEffect } from 'react'

import startUpIcon from '@/assets/icons/startUpIcon.svg'
import { Author, Post } from '@/types/interfaces'

import css from './PostSection.module.scss'

function PostSection({ postId }: { postId: string }) {
	const tAuthor = useTranslations('Authors')
	const tPost = useTranslations('Posts')
	const tCategory = useTranslations('Categories')
	const [author, setAuthors] = useState<Author>()
	const [post, setPost] = useState<Post>()

	useEffect(() => {
		const getData = async () => {
			const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}post/${postId}`)
			const data = await res.json()
			setPost(data)
		}
		getData()
	}, [])

	useEffect(() => {
		if (!post) return
		const getData = async () => {
			const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}author/${post.author}`)
			const data = await res.json()
			setAuthors(data)
		}
		getData()
	}, [post])

	if ((!post && !author) || !author || !post) {
		return null
	}

	const { category, img, text, title, date } = post
	const { icon, fullName } = author

	return (
		<section className={css.section}>
			<div className={css.postInfo}>
				<div className={css.userInfo}>
					<Image className={css.userImage} alt="user icon" src={icon} />
					<div>
						<p className={css.userName}>{tAuthor(fullName)}</p>
						<p>{tPost(date)}</p>
					</div>
				</div>
				<p className={css.postTitle}>{tPost(title)}</p>
				<div className={css.category}>
					<Image className={css.categoryIcon} alt="category icon" src={startUpIcon} />
					<p>{tCategory(category.name)}</p>
				</div>
			</div>
			<Image className={css.postImage} alt="post image" src={img} />
			<div className={css.postText}>
				<p>{tPost(text)}</p>
			</div>
		</section>
	)
}

export default PostSection
