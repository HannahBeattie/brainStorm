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
	VStack,
	useColorModeValue,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import Rotate from '../pages/framerMotion/RotateClicked'
import StyledNextLink from '../base/StyledNextLink'
import DesktopNav from './DesktopNav'
import { Pages } from './Pages'

import { TbVinyl } from 'react-icons/tb'
import PulseClicked from '../pages/framerMotion/PulseClicked'
const pages = Pages

export default function Nav() {
	const router = useRouter()
	const currentRoute = router.pathname
	const iconProps = {
		fontSize: '3xl',
	}
	const hProps = {
		px: { base: 4, sm: 8 },
		py: { base: 2, lg: 6 },
		w: '100%',
		color: 'gray.400',
		_dark: { color: 'white' },
		spacing: { sm: 4, md: 8, base: 2 },
		textTransform: 'uppercase',
		fontSize: { base: 'xs' },
	}
	const customCol = useColorModeValue('blackAlpha.370', 'whiteAlpha.800')
	const flyHome = { color: customCol }

	return (
		<HStack {...hProps}>
			<VStack position={'fixed'} top={4}>
				{currentRoute != '/' && (
					<Text fontFamily={'Poppins'} fontWeight={900} {...flyHome} className='fly-home'>
						Go home
					</Text>
				)}
				{currentRoute === '/' && (
					<Text fontFamily={'Poppins'} fontWeight={900} {...flyHome} className='fly-home'>
						home
					</Text>
				)}
				<VStack pl={4} pt={1}>
					<PulseClicked>
						<StyledNextLink href={'/'}>
							<Icon color={customCol} fontSize={'3xl'} as={TbVinyl} />
						</StyledNextLink>
					</PulseClicked>
				</VStack>
			</VStack>

			<Spacer />

			<Menu>
				<MenuButton
					right={'2'}
					position={'absolute'}
					display={{ base: 'stretch', lg: 'none' }}
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
							<StyledNextLink
								href={href}
								fontSize={'lg'}
								fontFamily={'SF Pro'}
								textTransform={'uppercase'}
								fontWeight={href === currentRoute ? '500' : '400'}
								color={href === currentRoute ? 'gray.900' : 'gray.500'}
								_dark={{ color: href === currentRoute ? 'teal.100' : 'teal.500' }}
							>
								{title}
							</StyledNextLink>
						</MenuItem>
					))}
				</MenuList>
			</Menu>

			<DesktopNav items={pages} />
		</HStack>
	)
}
