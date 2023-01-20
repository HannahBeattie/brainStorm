import { Heading, Text } from '@chakra-ui/react'
import TextContainer from '../base/templates/TextContainer'
import Appear from '../framerMotion/Appear'
const pt = { md: 8, base: 0 }

export const paragraphs = [
	{
		paragraph: (
			<>
				<Heading fontFamily={'Alice'}>I am Hannah.</Heading>
				<Appear delay={1}>
					<Text pt={pt}>An artist, insect enthusiast and Dev from New Zealand.</Text>
				</Appear>
			</>
		),
		trees: 1,
	},
	{
		paragraph: (
			<>
				<Text>
					I am interested in storytelling and creating holistic, person-first designs ...
				</Text>
			</>
		),
		trees: 3,
	},

	{
		paragraph: (
			<>
				<Text>
					...that take into account the diversity of experience and access styles...
				</Text>
			</>
		),
		trees: 1,
	},
	{
		paragraph: (
			<>
				<Text>...while retaining a sense of experimentation, humour and play...</Text>
			</>
		),
		trees: 2,
	},
	{
		paragraph: (
			<>
				<Text>
					My coding style is a mixture between curiosity-driven experementation and clean,
					minimal functionality...
				</Text>
				<Text pt={pt}>
					It doesn&apos;t matter how flashy something looks if it can&apos;t be accessed.
				</Text>
			</>
		),
		trees: 1,
	},
	{
		paragraph: (
			<>
				<Text pt={pt}>
					One of my favourite things about coding is the ability to create surprising,
					personal moments of user interaction;
				</Text>
				<Text>
					The type that make us feel connected, capable and heard; And cut through the
					dull buzz of data fatigue.
				</Text>
			</>
		),
		trees: 1,
	},
	{
		paragraph: (
			<>
				<Text>
					My practice as an interdisciplinary artist often involves testing and re-test
					methods and tools to observe patterns and possibilities.
				</Text>
				<Text pt={pt}>Coding is much the same, only less paint gets on my clothes.</Text>
			</>
		),
		trees: 2,
	},
	{
		paragraph: (
			<>
				<Text>
					I am excited to continue to learn new tools, languages and frameworks with which
					to refine my practice and enrich my abilities; Allowing me to contribute to a
					digital landscape that is kinder, more diverse, more deliberate and highly
					responsive.
				</Text>
				<Text pt={pt} pb={{ md: 0, base: 20 }}>
					So...whatch this space.
				</Text>
			</>
		),
	},
]
