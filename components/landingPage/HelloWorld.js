import {
	Box,
	Heading,
	HStack,
	Icon,
	Spacer,
	Stack,
	useColorModeValue,
	VStack,
} from '@chakra-ui/react'
import React from 'react'
import { SiCircle } from 'react-icons/si'
import { motion } from 'framer-motion'
import { TbCircleDashed } from 'react-icons/tb'
import { BiLoader } from 'react-icons/bi'
import { SiDiscogs } from 'react-icons/si'
import { VscCircleLargeFilled, VscCircleLargeOutline } from 'react-icons/vsc'
import Rotate from '../base/motion/framerMotion/Rotate'
export default function HelloWorld() {
	return (
		<Stack align={'stretch'} direction={{ base: 'column', md: 'row' }} justify={'center'}>
			<HStack spacing={'0'} justify={'center'} align={'stretch'}>
				<Heading
					fontWeight={'800'}
					fontFamily={'Lora'}
					fontSize={{ md: 100, base: 100 }}
					textAlign={{ base: 'center', sm: 'auto' }}
				>
					Hell
				</Heading>
				<VStack flex={'1'} p={'1'}>
					<Spacer p={2} />
					<motion.div
						animate={{ rotate: 360, duration: 10 }}
						whileHover={{ rotate: -360, cursor: 'pointer' }}
						transition={{
							ease: 'linear',
							duration: 8,
							repeat: Infinity,
							ease: 'easeInOut',
						}}
					>
						<Icon fontSize={70} as={useColorModeValue(BiLoader, SiDiscogs)} />
					</motion.div>
					<Spacer />
				</VStack>
			</HStack>
			<Heading
				fontWeight={'800'}
				fontFamily={'Lora'}
				fontSize={{ md: 100, base: 100 }}
				textAlign={{ base: 'center', sm: 'auto' }}
			>
				World!
			</Heading>
		</Stack>
	)
}
