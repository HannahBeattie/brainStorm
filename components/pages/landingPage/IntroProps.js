import { Heading, HStack, Text, Tooltip, useColorModeValue, VStack } from '@chakra-ui/react'
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
					<Text>An independent artist, web and app developer,</Text>
				</Appear>
				<Appear delay={2}>
					<Text>from Aotearoa New Zealand.</Text>
				</Appear>
			</VStack>
		),
		trees: 1,
	},
	{
		paragraph: (
			<VStack space={4} alignItems={'stretch'} spacing={8}>
				<Text>Toni Morrison once said -</Text>

				<Appear delay={1}>
					<Text>
						&quot;If there&apos;s a book that you want to read, but it hasn&apos;t been
						written yet, you must write it.&quot;
					</Text>
				</Appear>

				<Appear delay={2}>
					<Text>We may say the same about app or web development.</Text>
				</Appear>
			</VStack>
		),
		trees: 3,
	},

	{
		paragraph: (
			<>
				<Text>I enjoy telling stories in creative, engaging and humorous ways...</Text>
			</>
		),
		trees: 1,
	},
	{
		paragraph: (
			<>
				<Text>
					That takes into account the difference in user access styles, interests and
					accessibility needs.
				</Text>
			</>
		),
		trees: 2,
	},
	{
		paragraph: (
			<VStack alignItems={'stretch'}>
				<Text>I am a huge believer in curiosity-driven play.</Text>
				<Appear delay={2}>
					<Text>You never know until you try. .</Text>
				</Appear>
			</VStack>
		),
		trees: 0,
	},
]
