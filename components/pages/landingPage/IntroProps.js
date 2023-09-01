import {
	Heading,
	HStack,
	Spacer,
	Stack,
	Text,
	Tooltip,
	useColorModeValue,
	VStack,
} from '@chakra-ui/react'
import { useState } from 'react'
import Appear from '../framerMotion/Appear'
const pt = { md: 8, base: 0 }
const color = { _dark: 'red', _light: 'teal' }

export const paragraphs = [
	{
		paragraph: (
			<VStack alignItems={'stretch'}>
				<Heading fontFamily={'Alice'}>I am Hannah.</Heading>
				<Appear delay={1}>
					<Text>A multidisciplinary artist, writer and coder</Text>
				</Appear>
				<Appear delay={2}>
					<Text>from Aotearoa, New Zealand.</Text>
				</Appear>
			</VStack>
		),
		trees: 1,
	},
	{
		paragraph: (
			<VStack space={4} alignItems={'stretch'} spacing={8}>
				<Appear delay={1}>
					<Text>I enjoy enthusiastic, deliberate play,</Text>
				</Appear>
				<Stack flex={1} direction={{ base: 'row', med: 'column' }}>
					<Appear delay={2}>
						<Text>storytelling </Text>
					</Appear>
					<Appear delay={3}>
						<Text mx={2}> and curiosity.</Text>
					</Appear>
				</Stack>
			</VStack>
		),
		trees: 0,
	},

	{
		paragraph: (
			<VStack alignItems={'stretch'}>
				<Spacer />
			</VStack>
		),
		trees: 0,
	},
]
