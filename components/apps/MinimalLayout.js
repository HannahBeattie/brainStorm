import {
	Box,
	Container,
	Divider,
	Heading,
	HStack,
	Image,
	Spacer,
	Stack,
	useColorMode,
	useColorModeValue,
	VStack,
} from '@chakra-ui/react'
import { useScroll, motion } from 'framer-motion'
import React from 'react'
import SmallFocus from '../base/motion/SmallFocus'
import StyledNextLink from '../base/StyledNextLink'

function MinimalLayout({ linkText, src, alt, title, children, href }) {
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
					alignItem={'stretch'}
				/>
				<Stack p={8} flexDir={{ base: 'column', md: 'row' }}>
					<VStack p={8} pr={8}>
						<SmallFocus>
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
						</SmallFocus>
					</VStack>
					<VStack
						border={'1px'}
						color={'grayAlpha.200'}
						orientation='vertical'
						flex={'1'}
						justifySelf={'stretch'}
						alignItem={'stretch'}
					/>

					<Container>
						<VStack
							justifyContent={'center'}
							py={10}
							fontSize={'lg'}
							fontWeight={'light'}
							spacing='8'
						>
							<Heading textAlign={'center'}>{title}</Heading>
							<div>{children}</div>
							<StyledNextLink href={href} target={'blank'}>
								{linkText}
							</StyledNextLink>
						</VStack>
					</Container>
				</Stack>
			</VStack>
		</>
	)
}

export default MinimalLayout
