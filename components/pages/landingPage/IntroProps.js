import { Heading, HStack, Text } from '@chakra-ui/react'
import Appear from '../framerMotion/Appear'
const pt = { md: 8, base: 0 }

export const paragraphs = [
	{
		paragraph: (
			<>
				<Heading fontFamily={'Alice'}>I am Hannah.</Heading>
				<Appear delay={1}>
					<Text pt={{ md: 2 }}>
						An artist, insect enthusiastt, and web developer from Aetearoa,{' '}
					</Text>
					<Appear delay={2}>
						<Text> New Zealand.</Text>
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
					...that take into account the diversity of access styles, engagement and
					experience...
				</Text>
			</>
		),
		trees: 1,
	},
	{
		paragraph: (
			<>
				<Text>...while retaining a sense of experimentation, humour and fun.</Text>
			</>
		),
		trees: 2,
	},
	{
		paragraph: (
			<>
				<Text>
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
				<Text>My fascination with code comes from its incredible malleability...</Text>
			</>
		),
		trees: 2,
	},

	{
		paragraph: (
			<>
				<Text>
					... and the unique ability we have, as coders, to present information in
					different ways and tailor our products to individuals&apos; needs, interests and
					preferences.
				</Text>
			</>
		),
		trees: 1,
	},
	{
		paragraph: (
			<>
				<Text>As an interdisciplinary artist, I learn through observation...</Text>
				<Text pt={pt}>
					Carefully testing and re-testing methods and tools to observe patterns...
				</Text>
				<Text pt={pt}>
					Knowing that the more I notice, the more tools I have — irregardless of their
					seeming use right now...
				</Text>
				<Text>Which is to say, I intend to never stop learning</Text>
			</>
		),
		trees: 2,
	},
	{
		paragraph: (
			<>
				<Text>
					This site documents some of what I&apos;ve learned and built so far. I&apos;m
					excited to see where my curiosity leads me next!
				</Text>
			</>
		),
		trees: null,
	},
]
