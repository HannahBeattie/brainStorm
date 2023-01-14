import { Heading, Image, Text, useColorModeValue, VStack } from '@chakra-ui/react'
import Breathe from '~/components/base/motion/framerMotion/Breathe'
import Snail from '~/components/base/motion/framerMotion/Snail'
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
	)
}
