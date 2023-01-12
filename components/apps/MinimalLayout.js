import { Box, Container, Heading, HStack, Image, Stack, VStack } from '@chakra-ui/react'
import React from 'react'
import SmallFocus from '../base/motion/SmallFocus'
import StyledNextLink from '../base/StyledNextLink'

function MinimalLayout({ linkText, src, alt, title, children, href }) {
	return (
		<VStack flex={'1'} bg={'grayAlpha.100'} w={'100%'}>
			<Stack p={8} flexDir={{ base: 'column', md: 'row' }}>
				<VStack p={8}>
					<SmallFocus>
						<StyledNextLink href={href} target={'blank'}>
							<Image
								h={500}
								borderRadius={'md'}
								_hover={{ boxShadow: 'dark-lg' }}
								boxShadow={'dark'}
								src={src}
								alt={alt}
							/>
						</StyledNextLink>
					</SmallFocus>
				</VStack>

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
	)
}

export default MinimalLayout
