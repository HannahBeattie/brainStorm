import {
	Button,
	Container,
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
							py={{ md: 10, base: 4 }}
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
								<StyledNextLink
									color={'gray.Alpha.700'}
									fontWeight={'bold'}
									href={href}
									target={'blank'}
								>
									<ButtonFocus>
										<Button
											bg={useColorModeValue(
												'grayAlpha.200',
												'whiteAlpha.100'
											)}
											_hover={{
												bg: useColorModeValue(
													'grayAlpha.300',
													'whiteAlpha.200'
												),
											}}
											color={useColorModeValue('gray.800', 'ActiveCaption')}
										>
											{linkText}
										</Button>
									</ButtonFocus>
								</StyledNextLink>
							)}
						</VStack>
					</Container>
				</Stack>
			</VStack>
		</>
	)
}
