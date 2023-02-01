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
				<Text>...that take into account the diversity of access styles...</Text>
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
				<Text>My interests tend to teeter between the worlds of science and art...</Text>
			</>
		),
		trees: 2,
	},
	{
		paragraph: (
			<>
				<Text>I love code for it&apos;s malleability.</Text>
			</>
		),
		trees: 1,
	},

	{
		paragraph: (
			<>
				<HStack>
					<Text>As</Text>
					<Tooltip label={'...or teachers, or artists or storytellers....'}>
						<Text cursor={'pointer'} className='err'>
							coders,
						</Text>
					</Tooltip>
				</HStack>
				<Text>
					{' '}
					we can present information in new ways; Tailoring our projects to fit a diverse
					set of needs, interests and preferences.
				</Text>
			</>
		),
		trees: 1,
	},
	{
		paragraph: (
			<>
				<Text>We can create surprising, engaging moments of user interaction... </Text>
			</>
		),
		trees: 2,
	},
	{
		paragraph: (
			<>
				<Text>... and amplify previously unheard voices...</Text>
			</>
		),
		trees: 1,
	},
	{
		paragraph: (
			<HStack>
				<Text pt={pt}>There will always be more to learn, test and re-test...</Text>
			</HStack>
		),
		trees: 1,
	},
	{
		paragraph: (
			<>
				<Text>...more tools to grip with unfamiliar hands.</Text>
			</>
		),
		trees: 1,
	},

	{
		paragraph: (
			<>
				<Text>This site documents a little of what I have learnt and built so far.</Text>
			</>
		),
		trees: 1,
	},
	{
		paragraph: (
			<>
				<Text> It is a Start.</Text>
			</>
		),
		trees: 0,
	},
]
