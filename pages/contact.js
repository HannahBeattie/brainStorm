import { Box, Heading, HStack, Image, Text, useColorModeValue, VStack } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import Focus from '~/components/base/motion/Focus'
import Flicker from '~/components/base/motion/framerMotion/Flicker'
import Pulse from '~/components/base/motion/framerMotion/Pulse'
import Rotate from '~/components/base/motion/framerMotion/Rotate'
import SmallFocus from '~/components/base/motion/SmallFocus'
import StyledNextLink from '~/components/base/StyledNextLink'

export default function More() {
	return (
		<VStack flex={'1'} alignSelf='stretch' justify='center' py={8} spacing={8}>
			<Heading>Contact</Heading>
			<Focus>
				<Image
					filter={'auto'}
					invert={useColorModeValue(0, 100)}
					h={100}
					alt={'snail drawing'}
					src={'/snail.png'}
				/>
			</Focus>
			<VStack spacing={'2'}>
				<StyledNextLink href='mailto:hannahdbeattie@gmail.com'>
					<Text fontFamily={'Alice'}>Email: hannahdbeattie@gmail.com </Text>
				</StyledNextLink>
				<StyledNextLink href='https://github.com/HannahBeattie'>
					<Text fontFamily={'Alice'}>Github</Text>
				</StyledNextLink>
			</VStack>
		</VStack>
	)
}
