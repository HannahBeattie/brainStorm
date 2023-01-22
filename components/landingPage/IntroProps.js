import { Heading, Text } from '@chakra-ui/react'
import Appear from '../framerMotion/Appear'
const pt = { md: 8, base: 0 }

export const paragraphs = [
	{
		paragraph: (
			<>
				<Heading fontFamily={'Alice'}>I am Hannah.</Heading>
				<Appear delay={1}>
					<Text pt={{ md: 2 }}>
						An artist, insect enthusiast and Dev from New Zealand.
					</Text>
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
					...that take into account the diversity of access styles and experiance...
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
				<Text pt={pt}>
					It doesn&apos;t matter how flashy something seems if it can&apos;t be accessed.
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
					personal moments of user interaction.
				</Text>
				<Text>
					The type that cut through the dull buzz of data fatigue we are all accustomed
					to.
				</Text>
			</>
		),
		trees: 1,
	},
	{
		paragraph: (
			<>
				<Text>
					As an interdisciplinary artist, I am used to testing and re-test methods and
					tools to observe patterns and possibilities.
				</Text>
				<Text pt={pt}>Coding is much the same.</Text>
			</>
		),
		trees: 2,
	},
	{
		paragraph: (
			<>
				<Text>
					I am excited to continue to learn new tools, languages and frameworks with which
					to refine my practice.
				</Text>
				<Text pt={pt}>
					Allowing me to contribute to a digital landscape that is kinder, more diverse,
					more deliberate and highly responsive.
				</Text>
				<Text pt={pt}>So...</Text>
				<Text pb={{ md: 0, base: 20 }}>whatch this space.</Text>
			</>
		),
	},
]
