import { Divider, HStack, Icon, Spacer, useColorModeValue } from '@chakra-ui/react'
import { VscGithub } from 'react-icons/vsc'

import StyledNextLink from '../base/StyledNextLink'
import ButtonFocus from '../pages/framerMotion/ButtonFocus'

export default function Footer() {
	const col = useColorModeValue('grayAlpha.900', 'grayAlpha.900')
	const accent = useColorModeValue('grayAlpha.900', 'warmWhite')
	const hoverCol = useColorModeValue('warmWhite', 'warmWhite')
	return (
		<>
			<Divider />
			<HStack
				boxShadow={'dark-xl'}
				px={{ base: 4 }}
				bg={'gray.900'}
				alignItems={'stretch'}
				bottom={'0'}
				justify={'stretch'}
				width={'100vw'}
				_dark={{ bg: 'blackAlpha.400' }}
				py={'2'}
			>
				<Spacer />
				<ButtonFocus>
					<StyledNextLink href={'https://github.com/HannahBeattie'}>
						<Icon
							fontSize={'3xl'}
							color={{ base: accent, md: col }}
							active={{ bg: 'null' }}
							_hover={{ bg: 'null', color: hoverCol }}
							bg={'null'}
							as={VscGithub}
						/>
					</StyledNextLink>
				</ButtonFocus>
			</HStack>
		</>
	)
}
