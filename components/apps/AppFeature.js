import {
	Container,
	Divider,
	Heading,
	Image,
	Stack,
	Text,
	useColorModeValue,
	VStack,
} from '@chakra-ui/react'
import StyledNextLink from '../base/StyledNextLink'
import ButtonFocus from '../framerMotion/ButtonFocus'
import CardHovered from '../framerMotion/CardHovered'

export default function AppFeature({ linkText, src, alt, title, children, href, subtitle }) {
	return (
		<>
			<VStack flex={'1'} w={'100%'}>
				<Stack p={8} flexDir={{ base: 'column', md: 'row' }}>
					<VStack
						pr={{ md: 10 }}
						flex={1}
						alignItems={'stretch'}
						justifyContent={'center'}
					>
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
						borderColor={'grayAlpha.200'}
						orientation='vertical'
						justifySelf={'stretch'}
						alignItems={'stretch'}
						display={{ base: 'none', md: 'block' }}
					/>

					<Container>
						<VStack
							px={{ md: 8, base: 4 }}
							flex={1}
							justifyContent={'center'}
							py={{ md: 10 }}
							fontSize={'md'}
							fontWeight={'m'}
							spacing='8'
						>
							<Heading textAlign={'center'} fontFamily={'body'} fontWeight={'md'}>
								{title}
							</Heading>
							{subtitle && (
								<Text
									fontWeight={'bold'}
									fontSize={'sm'}
									textTransform={'uppercase'}
									textAlign={'center'}
								>
									{subtitle}
								</Text>
							)}

							<div>{children}</div>
							{linkText && (
								<ButtonFocus>
									<StyledNextLink
										color={'gray.Alpha.700'}
										_hover={{ color: useColorModeValue('teal', 'white') }}
										fontWeight={'bold'}
										href={href}
										target={'blank'}
									>
										{linkText}
									</StyledNextLink>
								</ButtonFocus>
							)}
						</VStack>
					</Container>
				</Stack>
			</VStack>
		</>
	)
}
