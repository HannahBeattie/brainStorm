import { HamburgerIcon } from '@chakra-ui/icons'
import { Box, HStack, IconButton, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import Link from 'next/link'
import { AiOutlineQuestion } from 'react-icons/ai'
import { GiMonsterGrasp, GiPaintBrush } from 'react-icons/gi'
import { HiCode } from 'react-icons/hi'
import MyLink from '../MyLink'
import Logo from './Logo'
import NavItem from './NavItem'

const navLinks = [
	{
		title: 'About',
		icon: AiOutlineQuestion,
		href: '/about',
	},
	{
		title: 'Web Development',
		href: '/web',
		icon: HiCode,
	},
	{
		title: 'Painting',
		href: '/painting',
		icon: GiPaintBrush,
	},
	{
		title: 'Character Design',
		href: '/characters',
		icon: GiMonsterGrasp,
	},
]

export default function Nav() {
	return (
		<>
			<MyLink href={'/'}>
				<Box
					top={{ base: 2 }}
					left={{ sm: 4 }}
					right={{ base: 2, sm: 'auto' }}
					position={'absolute'}
				>
					<Logo />
				</Box>
			</MyLink>
			{/* phone */}
			<HStack p={4} display={{ base: 'flex', sm: 'none' }}>
				<Menu>
					<MenuButton
						as={IconButton}
						aria-label='Options'
						icon={<HamburgerIcon />}
						color={'white'}
						_dark={{ color: '#ff69b4', bg: '' }}
						variant='outline'
						borderRadius={'md'}
						borderWidth={'1px'}
						fontSize={'xl'}
					/>

					<MenuList>
						{navLinks.map(({ href, title }, idx) => (
							<MenuItem key={`navitem-${idx}`}>
								<MyLink href={href}>{title}</MyLink>
							</MenuItem>
						))}
					</MenuList>
				</Menu>
			</HStack>

			{/* desktop */}
			<HStack
				display={{ base: 'none', sm: 'flex' }}
				py={4}
				px={8}
				spacing={10}
				justifyContent='right'
				fontFamily={'Roboto'}
				fontWeight={500}
				letterSpacing={'0.1em'}
				fontSize={'sm'}
				_dark={{ color: 'pink.500' }}
			>
				{navLinks.map(({ href, title, icon }, idx) => (
					<HStack key={`navitem-${idx}`}>
						<NavItem href={href} title={title} icon={icon} idx={idx} />
					</HStack>
				))}
			</HStack>
		</>
	)
}
