import { Box, Heading, HStack, Image, Text, useColorModeValue, VStack } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import Focus from '~/components/base/motion/Focus'
import Flicker from '~/components/base/motion/framerMotion/Flicker'
import Pulse from '~/components/base/motion/framerMotion/Pulse'
import Rotate from '~/components/base/motion/framerMotion/Rotate'
import SmallFocus from '~/components/base/motion/SmallFocus'

export default function God() {
	return (
		<VStack flex={'1'} alignSelf='stretch' justify='center' py={8} spacing={8}>
			<Heading>God Creates Dev</Heading>
			<Box position={'relative'}>
				<motion.div
					whileHover={{ y: [4, -4], x: [4, -90], rotate: -20, zIndex: 4 }}
					transition={{ ease: 'easeInOut', duration: 2 }}
				>
					<Image
						position={'absolute'}
						filter={'auto'}
						alt={'god'}
						src={'/2.png'}
						zIndex={2}
					/>
				</motion.div>
				<Image
					borderRadius={10}
					zIndex={-2}
					position={'relative'}
					filter={'auto'}
					alt={'dev'}
					src={'/1.jpg'}
				/>
			</Box>
		</VStack>
	)
}
