import {
	Button,
	Container,
	Heading,
	HStack,
	Image,
	ListItem,
	Stack,
	Text,
	UnorderedList,
	useColorModeValue,
	VStack,
} from '@chakra-ui/react'
import StyledNextLink from '../../base/StyledNextLink'
import ButtonFocus from '../framerMotion/ButtonFocus'
import CardHovered from '../framerMotion/CardHovered'

export default function AppFeature({
	linkText,
	linkText2,
	href2,
	src,
	alt,
	title,
	showCredit,
	children,
	href,
	subtitle,
}) {
	const bg = useColorModeValue('grayAlpha.200', 'whiteAlpha.100')
	const bg2 = useColorModeValue('grayAlpha.300', 'grayAlpha.300')
	const col = useColorModeValue('gray.800', 'ActiveCaption')
	const addToLinkProps = {
		fontWeight: 'xl',
		textDecoration: 'underline',
		_hover: { textDecoration: 'underline' },
		target: 'blank',
	}
	return (
		<>
			<VStack flex={'1'} w={'100%'}>
				<Stack p={2} flexDir={{ base: 'column', lg: 'row' }}>
					<VStack spacing={8} justify={'center'} p={{ md: 2 }} pr={{ lg: '5vw' }}>
						<Heading
							display={{ base: 'auto', lg: 'none' }}
							textAlign={'center'}
							fontFamily={'body'}
							fontWeight={'md'}
						>
							{title}
						</Heading>

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
							px={{ lg: 8, base: 4 }}
							flex={1}
							justifyContent={'center'}
							py={{ lg: 10, base: 4 }}
							fontSize={'md'}
							fontWeight={'m'}
							spacing='8'
						>
							<Heading
								display={{ base: 'none', lg: 'flex' }}
								textAlign={'center'}
								fontFamily={'body'}
								fontWeight={'md'}
							>
								{title}
							</Heading>

							{subtitle && (
								<Text
									fontWeight={'bold'}
									fontSize={'lg'}
									textTransform={'uppercase'}
									textAlign={'center'}
								>
									{subtitle}
								</Text>
							)}

							<HStack py={4}>
								{linkText && (
									<StyledNextLink
										color={'gray.Alpha.700'}
										fontWeight={'bold'}
										href={href}
										target={'blank'}
									>
										<ButtonFocus>
											<Button
												bg={bg}
												_hover={{
													bg: bg2,
												}}
												color={col}
											>
												{linkText}
											</Button>
										</ButtonFocus>
									</StyledNextLink>
								)}

								{linkText2 && (
									<StyledNextLink
										color={'gray.Alpha.700'}
										fontWeight={'bold'}
										href={href2}
										target={'blank'}
									>
										<ButtonFocus>
											<Button
												bg={bg}
												_hover={{
													bg: bg2,
												}}
												color={col}
											>
												{linkText2}
											</Button>
										</ButtonFocus>
									</StyledNextLink>
								)}
							</HStack>
							{showCredit && (
								<UnorderedList spacing={4} px={4} fontWeight={'bold'}>
									<ListItem>
										My role — Lead Designer, Jr. Software Engineer (Frontend)
									</ListItem>
									<ListItem>
										Collaborator:{' '}
										<StyledNextLink
											{...addToLinkProps}
											href={'https://mikeylemmon.com/about'}
										></StyledNextLink>{' '}
										— Lead Software Engineer, Project Manager
									</ListItem>
								</UnorderedList>
							)}

							<div>{children}</div>
						</VStack>
					</Container>
				</Stack>
			</VStack>
		</>
	)
}
