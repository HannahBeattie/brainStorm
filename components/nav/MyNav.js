import { HStack, Icon, Spacer, Text } from '@chakra-ui/react'
import React from 'react'
import { BsEmojiSmileUpsideDown } from 'react-icons/bs'
import MyLink from '../MyLink'
import { useRouter } from 'next/router'

function MyNav() {
	const router = useRouter()
	const currentRoute = router.pathname
	const iconProps = {
		fontSize: '3xl',
	}
	const hProps = {
		px: { sm: 4, base: 2 },
		py: '2',
		w: '100vw',
		color: 'gray.400',
		spacing: { sm: 8, base: 2 },
		textTransform: 'uppercase',
		fontSize: { base: 'xs' },
	}

	const pages = [
		{
			title: 'About',

			href: '/about',
		},
		{
			title: 'Web Development',
			href: '/web',
		},
		{
			title: 'art',
			href: '/painting',
		},
		{
			title: 'Character Design',
			href: '/characters',
		},
	]

	return (
		<HStack {...hProps}>
			<MyLink href={'/'}>
				<Icon as={BsEmojiSmileUpsideDown} {...iconProps} />
			</MyLink>
			<Spacer />

			{pages.map(({ href, title }, idx) => {
				console.log('<MyNav>', currentRoute, title, href, href === currentRoute)
				return (
					<MyLink
						key={`navitem-${idx}`}
						href={href}
						// className={
						// 	currentRoute === href ? 'active-class-name' : 'non-active-class-name'
						// }
						fontWeight={href === currentRoute ? '900' : '300'}
						color={href === currentRoute ? 'gray.900' : 'gray.400'}
						isactive={href === currentRoute}
					>
						<Text fontFamily={'Gloria Hallelujah'}>{title}</Text>
					</MyLink>
				)
			})}
		</HStack>
	)
}

export default MyNav
