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
	useColorModeValue,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { VscSymbolInterface } from 'react-icons/vsc'
import Rotate from '../pages/framerMotion/RotateClicked'
import StyledNextLink from '../base/StyledNextLink'
import DesktopNav from './DesktopNav'
import { Pages } from './Pages'
const pages = Pages

export default function Nav() {
	const router = useRouter()
	const currentRoute = router.pathname
	const iconProps = {
		fontSize: '3xl',
	}
	const hProps = {
		px: { sm: 4, base: 2 },
		py: '2',
		w: '100%',
		color: 'gray.400',
		_dark: { color: 'white' },
		spacing: { sm: 4, md: 8, base: 2 },
		textTransform: 'uppercase',
		fontSize: { base: 'xs' },
	}

	return (
		<HStack {...hProps}>
			<Rotate>
				<StyledNextLink href={'/'}>
					<Icon
						_hover={{ color: useColorModeValue('teal', 'red') }}
						color={useColorModeValue('black', 'white')}
						as={VscSymbolInterface}
						{...iconProps}
					/>
				</StyledNextLink>
			</Rotate>
			<Spacer />

			<Menu>
				<MenuButton
					right={'2'}
					position={'absolute'}
					display={{ base: 'block', lg: 'none' }}
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
								fontWeight={href === currentRoute ? '400' : '300'}
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
