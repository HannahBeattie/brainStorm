import { Heading, Box, Image, Text, useColorModeValue, VStack } from '@chakra-ui/react'
import ButtonFocus from '~/components/framerMotion/ButtonFocus'
import Snail from '~/components/framerMotion/Snail'
import StyledNextLink from '~/components/base/StyledNextLink'
import PageWrapper from '~/components/HOC/PageWrapper'
import MovingSnail from '~/components/contact/MovingSnail'

export default function Contact() {
	return (
		<VStack flex={1} pt={{ base: '20vh', sm: '28vh', md: '25vh' }}>
			<Heading userSelect={'none'} pointerEvents={'none'}>
				Contact
			</Heading>
			<MovingSnail />
			<VStack spacing={'2'}>
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
	)
}
