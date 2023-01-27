import { Heading, HStack, Text } from '@chakra-ui/react'
import Appear from '../framerMotion/Appear'
const pt = { md: 8, base: 0 }

export const paragraphs = [
	{
		paragraph: (
			<>
				<Heading fontFamily={'Alice'}>I am Hannah.</Heading>
				<Appear delay={1}>
					<Text pt={{ md: 2 }}>An artist, insect enthusiast and Dev from Aetearoa, </Text>
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
					That take into account the diversity of access styles, engagement and
					experiance...
				</Text>
			</>
		),
		trees: 1,
	},
	{
		paragraph: (
			<>
				<Text>While retaining a sense of experimentation, humour and fun.</Text>
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
				<Appear>
					<Text pt={pt}>
						It doesn&apos;t matter how flashy something seems if it can&apos;t be
						accessed.
					</Text>
				</Appear>
			</>
		),
		trees: 1,
	},

	{
		paragraph: (
			<>
				<Text>My fascination with code comes from it&apos;s incredable maluability...</Text>
			</>
		),
		trees: 2,
	},

	{
		paragraph: (
			<>
				<Text>
					... and the unique ability we have, as coders, to present information in
					diffirent ways and tailor our products to indervidual&apos;s needs, interestes
					and preferences.
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
					Carefully testing and re-test methods and tools to observe patterns...
				</Text>
				<Text pt={pt}>
					Knowing that the more I notice, the more tools I have, irragardless of their
					seeming use right now...
				</Text>
				<Text>Which is to say, I never intend to stop learning.</Text>
			</>
		),
		trees: 2,
	},
	{
		paragraph: (
			<>
				<Text>So...</Text>
				<Text pb={{ md: 100, base: 20 }}>whatch this space.</Text>
			</>
		),
	},
]
