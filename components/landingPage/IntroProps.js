import { Heading, Text } from '@chakra-ui/react'
import TextContainer from '../base/templates/TextContainer'
const pt = 8

export const paragraphs = [
	{
		paragraph: (
			<>
				<Heading fontFamily={'Alice'}>I am Hannah.</Heading>
				<Text>An artist, insect enthusiast and Dev from New Zealand.</Text>
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
					I am interested in storytelling and creating holistic, person-first designs ...
				</Text>
			</>
		),
		trees: 2,
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
				<>
					<Text>
						My coding style is a mixture between curiosity-driven experementation and
						clean, minimal functionality ---
					</Text>
					<Text pt={pt}>
						<i>It doesn't matter how flashy something is if it can't be used.</i>
					</Text>
					<Text pt={pt}>
						One of my favourite things about coding is the ability to create surprising,
						personal moments of user interaction that cut through the droll buzz of data
						fatigue most of us carry.
					</Text>
				</>
			</>
		),
		trees: 1,
	},
	{
		paragraph: (
			<>
				<Text>
					My background as an interdisciplinary artist has always involved testing
					andre-testing methods and tools to observe patterns and possibilities.
				</Text>
				<Text pt={pt}>Coding is much the same, only less messy.</Text>
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
				<Text pt={pt}>So...whatch this space.</Text>
			</>
		),
		trees: 1,
	},
]
