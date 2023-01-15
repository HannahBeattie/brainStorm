import { Heading, Box, Image, Text, useColorModeValue, VStack } from '@chakra-ui/react'
import Breathe from '~/components/framerMotion/ButtonFocus'
import Snail from '~/components/framerMotion/Snail'
import StyledNextLink from '~/components/base/StyledNextLink'
import PageWrapper from '~/components/HOC/PageWrapper'
import MovingSnail from '~/components/contact/MovingSnail'

export default function Contact() {
	return (
		<PageWrapper>
			<VStack
				minH={{ base: '80vh', md: '75vh' }}
				alignItems={'center'}
				justifyContent={'center'}
			>
				<Heading userSelect={'none'} pointerEvents={'none'}>
					Contact
				</Heading>
				<MovingSnail />
				<VStack spacing={'2'}>
					<Breathe>
						<StyledNextLink href='mailto:hannahdbeattie@gmail.com'>
							<Text fontFamily={'Alice'}>Email: hannahdbeattie@gmail.com </Text>
						</StyledNextLink>
					</Breathe>
					<Breathe>
						<StyledNextLink href='https://github.com/HannahBeattie'>
							<Text fontFamily={'Alice'}>Github: @HannahBeattie</Text>
						</StyledNextLink>
					</Breathe>
				</VStack>
			</VStack>
		</PageWrapper>
	)
}
