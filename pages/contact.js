import { Heading, Box, Image, Text, useColorModeValue, VStack } from '@chakra-ui/react'
import ButtonFocus from '~/components/pages/framerMotion/ButtonFocus'
import Snail from '~/components/pages/framerMotion/Snail'
import StyledNextLink from '~/components/base/StyledNextLink'
import PageWrapper from '~/components/HOC/PageWrapper'
import MovingSnail from '~/components/pages/contact/MovingSnail'
import Head from 'next/head'

export default function Contact() {
	return (
		<>
			<Head>
				<title>Contact Me</title>
				<meta name='description' content='Portfolio website' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<VStack
				justifySelf={'stretch'}
				flex={1}
				alignItems={'center'}
				pt={{ base: '20vh', md: '23vh' }}
			>
				<Heading userSelect={'none'} pointerEvents={'none'}>
					Contact
				</Heading>
				<MovingSnail />
				<VStack spacing={'2'} flex={1}>
					<ButtonFocus>
						<StyledNextLink href='mailto:hannahdbeattie@gmail.com'>
							<Text fontFamily={'Alice'}>Email: hannahdbeattie@gmail.com </Text>
						</StyledNextLink>
					</ButtonFocus>
					<ButtonFocus>
						<StyledNextLink href='https://github.com/HannahBeattie'>
							<Text fontFamily={'Alice'}>Github: @HannahBeattie</Text>
						</StyledNextLink>
					</ButtonFocus>
				</VStack>
			</VStack>
		</>
	)
}
