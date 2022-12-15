import {
	HStack,
	Icon,
	IconButton,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	Spacer,
	Text,
	useColorModeValue,
} from '@chakra-ui/react'
import React from 'react'
import { BsEmojiSmileUpsideDown } from 'react-icons/bs'
import MyLink from '../MyLink'
import { useRouter } from 'next/router'
import { HamburgerIcon } from '@chakra-ui/icons'

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
		_dark: { color: 'white' },
		spacing: { sm: 4, md: 8, base: 2 },
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
			title: 'Art',
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

			<Menu>
				<MenuButton
					right={'2'}
					position={'absolute'}
					display={{ base: 'block', sm: 'none' }}
					as={IconButton}
					aria-label='Options'
					icon={<HamburgerIcon />}
					color={'gray.900'}
					_dark={{ color: 'white', bg: '' }}
					variant='outline'
					borderRadius={'md'}
					borderWidth={'1px'}
					fontSize={'xl'}
				/>

				<MenuList>
					{pages.map(({ href, title }, idx) => (
						<MenuItem key={`navitem-${idx}`}>
							<MyLink
								href={href}
								fontSize={'lg'}
								fontFamily={'Poppins'}
								textTransform={'uppercase'}
								fontWeight={href === currentRoute ? '400' : '300'}
								color={href === currentRoute ? 'gray.900' : 'gray.500'}
								_dark={{ color: href === currentRoute ? 'teal.100' : 'teal.500' }}
							>
								{title}
							</MyLink>
						</MenuItem>
					))}
				</MenuList>
			</Menu>

			{pages.map(({ href, title }, idx) => {
				console.log('<MyNav>', currentRoute, title, href, href === currentRoute)
				return (
					<MyLink
						display={{ base: 'none', sm: 'flex' }}
						key={`navitem-${idx}`}
						href={href}
						fontSize={{ md: 'lg' }}
						fontWeight={href === currentRoute ? '900' : '500'}
						color={
							href === currentRoute
								? useColorModeValue('gray.900', 'teal')
								: useColorModeValue('gray.900', 'gray.100')
						}
					>
						<Text as={'div'} fontFamily={'Gloria Hallelujah'}>
							{title}
						</Text>
					</MyLink>
				)
			})}
		</HStack>
	)
}

export default MyNav
