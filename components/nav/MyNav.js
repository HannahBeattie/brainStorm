import { HStack, Icon, Spacer, Text } from '@chakra-ui/react'
import React from 'react'
import { BsEmojiSmileUpsideDown } from 'react-icons/bs'
import MyLink from '../MyLink'

function MyNav() {
	const iconProps = {
		fontSize: '3xl',
		color: 'gray.400',
		_dark: { color: 'gray.100' },
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

	const navLinks = [
		{
			title: 'About',

			href: '/about',
		},
		{
			title: 'Web Development',
			href: '/web',
		},
		{
			title: 'Painting',
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

			{navLinks.map(({ href, title }, idx) => (
				<MyLink key={`navitem-${idx}`} href={href} display={{ base: 'none', sm: 'block' }}>
					<Text fontFamily={'Gloria Hallelujah'}>{title}</Text>
				</MyLink>
			))}
		</HStack>
	)
}

export default MyNav
