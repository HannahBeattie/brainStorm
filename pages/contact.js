import { Heading, Image, Text, useColorModeValue, VStack } from '@chakra-ui/react'
import Snail from '~/components/base/motion/framerMotion/Snail'
import Focus from '~/components/base/motion/framerMotion/Snail'
import StyledNextLink from '~/components/base/StyledNextLink'

export default function More() {
	return (
		<VStack flex='1' alignSelf='stretch' justify='center' py={8} spacing={8}>
			<Heading>Contact</Heading>
			<Snail>
				<Image
					filter={'auto'}
					invert={useColorModeValue(0, 100)}
					h={100}
					alt={'Snail line drawing'}
					src={'/snail.png'}
				/>
			</Snail>
			<VStack spacing={'2'}>
				<StyledNextLink href='mailto:hannahdbeattie@gmail.com'>
					<Text fontFamily={'Alice'}>Email: hannahdbeattie@gmail.com </Text>
				</StyledNextLink>
				<StyledNextLink href='https://github.com/HannahBeattie'>
					<Text fontFamily={'Alice'}>Github: @HannahBeattie</Text>
				</StyledNextLink>
			</VStack>
		</VStack>
	)
}
