import { HamburgerIcon } from '@chakra-ui/icons'
import {
	Box,
	Center,
	Heading,
	HStack,
	Icon,
	IconButton,
	Image,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	Spacer,
} from '@chakra-ui/react'
import Link from 'next/link'
import { AiOutlineQuestion } from 'react-icons/ai'
import { GiMonsterGrasp, GiPaintBrush, GiComputing, GiPlainCircle } from 'react-icons/gi'
import { HiCode } from 'react-icons/hi'
import MyLink from '../MyLink'

import NavItem from '../refact/NavItem'

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
			<HStack w={'100vw'} justify={'center'} py={{ base: 2 }} px={{ base: 4 }}>
				{/* <Menu>
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
					/>

					<MenuList>
						{navLinks.map(({ href, title }, idx) => (
							<MenuItem key={`navitem-${idx}`}>
								<MyLink href={href}>
									<Text fontSize={'3xl'} as={'div'}>
										Hello {title}
									</Text>
								</MyLink>
							</MenuItem>
						))}
					</MenuList>
				</Menu> */}

				{/* desktop */}
				<Spacer />
				{navLinks.map(({ href, title, icon }, idx) => (
					<HStack
						key={`navitem-${idx}`}
						px={4}
						spacing={10}
						fontFamily={'Poppins'}
						fontWeight={500}
						letterSpacing={'0.1em'}
						fontSize={'sm'}
						color={'gray.900'}
						_dark={{ color: 'gray.500' }}
					>
						<NavItem href={href} title={title} icon={icon} idx={idx} />
					</HStack>
				))}
			</HStack>
		</>
	)
}
