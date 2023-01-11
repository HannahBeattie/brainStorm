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
import { TbCircleDashed } from 'react-icons/tb'
import { VscCircleLargeFilled, VscCircleLargeOutline } from 'react-icons/vsc'
export default function Title() {
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
					<Icon
						fontSize={70}
						as={useColorModeValue(VscCircleLargeFilled, TbCircleDashed)}
					/>
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
