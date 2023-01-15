import {
	Container,
	Divider,
	Heading,
	Image,
	Stack,
	useColorModeValue,
	VStack,
} from '@chakra-ui/react'
import Breathe from '../base/motion/framerMotion/ButtonFocus'
import CardHovered from '../base/motion/framerMotion/CardHovered'
import StyledNextLink from '../base/StyledNextLink'

export default function MinimalLayout({ linkText, src, alt, title, children, href }) {
	return (
		<>
			<VStack flex={'1'} bg={useColorModeValue('', 'gitDark ')} w={'100%'}>
				<Divider />
				<VStack
					border={'1px'}
					color={'grayAlpha.200'}
					orientation='vertical'
					flex={'1'}
					justifySelf={'stretch'}
					alignItems={'stretch'}
				/>
				<Stack p={8} flexDir={{ base: 'column', md: 'row' }}>
					<VStack p={8} pr={8}>
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
					/>

					<Container>
						<VStack
							px={'8'}
							justifyContent={'center'}
							py={10}
							fontSize={'lg'}
							fontWeight={'light'}
							spacing='8'
						>
							<Heading textAlign={'center'}>{title}</Heading>
							<div>{children}</div>
							<Breathe>
								<StyledNextLink href={href} target={'blank'}>
									{linkText}
								</StyledNextLink>
							</Breathe>
						</VStack>
					</Container>
				</Stack>
			</VStack>
		</>
	)
}
