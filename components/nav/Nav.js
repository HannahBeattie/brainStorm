import { HamburgerIcon } from '@chakra-ui/icons'
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
import { useRouter } from 'next/router'
import { BsEmojiSmileUpsideDown } from 'react-icons/bs'
import Rotate from '../base/motion/framerMotion/Rotate'
import MyLink from '../base/StyledNextLink'

export default function Nav() {
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
			title: 'Apps',
			href: '/apps',
		},

		{
			title: '3d Characters',
			href: '/characters',
		},
		{
			title: 'Water Colors',
			href: '/water',
		},
		{
			title: 'P5.Animation',
			href: '/animation',
		},
	]

	return (
		<HStack {...hProps}>
			<Rotate>
				<MyLink href={'/'}>
					<Icon as={BsEmojiSmileUpsideDown} {...iconProps} />
				</MyLink>
			</Rotate>
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
				return (
					<MyLink
						display={{ base: 'none', sm: 'flex' }}
						key={`navitem-${idx}`}
						href={href}
						fontSize={{ md: 'md' }}
						fontWeight={href === currentRoute ? '900' : '500'}
						color={
							href === currentRoute
								? useColorModeValue('teal', 'teal.300')
								: useColorModeValue('gray.900', 'gray.300')
						}
						_hover={{
							color:
								href === currentRoute
									? useColorModeValue('teal', 'teal.300')
									: useColorModeValue('teal', 'gray.100'),
						}}
					>
						<Text
							as={'div'}
							fontFamily={'poppins'}
							fontWeight={useColorModeValue('400', '300')}
							letterSpacing={'0.1em'}
						>
							{title}
						</Text>
					</MyLink>
				)
			})}
		</HStack>
	)
}
