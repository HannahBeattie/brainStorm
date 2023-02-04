import { Heading, HStack, Text, Tooltip, useColorModeValue } from '@chakra-ui/react'
import { useState } from 'react'
import Appear from '../framerMotion/Appear'
const pt = { md: 8, base: 0 }
const color = { _dark: 'red', _light: 'teal' }

export const paragraphs = [
	{
		paragraph: (
			<>
				<Heading fontFamily={'Alice'}>I am Hannah.</Heading>
				<Appear delay={1}>
					<Text pt={{ md: 2 }}>An artist, insect enthusiast, and web developer from</Text>
					<Appear delay={1}>
						<Text>Aetearoa, New Zealand.</Text>
					</Appear>
				</Appear>
			</>
		),
		trees: 1,
	},
	{
		paragraph: (
			<>
				<Text>
					I am interested in storytelling and creating holistic, <nobr>person-first</nobr>{' '}
					designs...
				</Text>
			</>
		),
		trees: 3,
	},

	{
		paragraph: (
			<>
				<Text>
					...that take into account the diversity of users&apos; interests, engagement
					styles and access needs…
				</Text>
			</>
		),
		trees: 1,
	},
	{
		paragraph: (
			<>
				<Text>...while retaining a sense of momentum, experimentation and fun.</Text>
			</>
		),
		trees: 2,
	},
	{
		paragraph: (
			<>
				<Text pt={pt}>
					My coding style is a mixture between curiosity-driven play and clean, minimal
					functionality.
				</Text>
			</>
		),
		trees: 1,
	},

	{
		paragraph: (
			<>
				<Text>This site documents a little of what I have learnt and built so far.</Text>
				<Text>I am excited to see where my curiosity leads me next!</Text>
			</>
		),
		trees: 0,
	},
]
