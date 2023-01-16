import {
	Container,
	Divider,
	Heading,
	Image,
	Stack,
	useColorModeValue,
	VStack,
} from '@chakra-ui/react'
import StyledNextLink from '../base/StyledNextLink'
import ButtonFocus from '../framerMotion/ButtonFocus'
import CardHovered from '../framerMotion/CardHovered'

export default function AppFeature({ linkText, src, alt, title, children, href }) {
	return (
		<>
			<VStack flex={'1'} bg={useColorModeValue('', 'gitDark ')} w={'100%'}>
				<Stack p={8} flexDir={{ base: 'column', md: 'row' }}>
					<VStack p={8} pr={{ md: 8 }}>
						<CardHovered>
							<StyledNextLink href={href} target={'blank'}>
								<Image
									maxH={'500'}
									borderRadius={'md'}
									_hover={{ boxShadow: 'dark-lg' }}
									boxShadow={'dark'}
									src={src}
									alt={alt}
								/>
							</StyledNextLink>
						</CardHovered>
					</VStack>

					<VStack
						border={'1px'}
						color={'grayAlpha.200'}
						orientation='vertical'
						flex={'1'}
						justifySelf={'stretch'}
						alignItems={'stretch'}
						display={{ base: 'none', md: 'block' }}
					/>

					<Container>
						<VStack
							px={{ md: 8, base: 4 }}
							justifyContent={'center'}
							py={{ md: 10 }}
							fontSize={'lg'}
							fontWeight={'light'}
							spacing='8'
						>
							<Heading textAlign={'center'}>{title}</Heading>
							<div>{children}</div>
							<ButtonFocus>
								<StyledNextLink href={href} target={'blank'}>
									{linkText}
								</StyledNextLink>
							</ButtonFocus>
						</VStack>
					</Container>
				</Stack>
			</VStack>
		</>
	)
}
