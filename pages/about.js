import {
	Container,
	Heading,
	HStack,
	Text,
	VStack,
	Grid,
	GridItem,
	Image,
	Center,
	Divider,
	IconButton,
	useColorModeValue,
	Flex,
	Button,
	Stack,
	Box,
	Icon,
} from '@chakra-ui/react'
import React from 'react'
import Appear from '~/components/animate/Appear'
import Flicker from '~/components/animate/Flicker'
import Intro from '~/components/Intro'
import { FaPlug } from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function About() {
	const textProps = {
		fontFamily: 'Merriweather',
		fontSize: { base: 'lg', sm: '4xl' },
		color: 'gray.100',
		fontWeight: 'light',
		letterSpacing: '0.1em',
	}

	return (
		<VStack>
			<Intro title='About'>
				<Text>Hello, I am Hannah. I am an artist & web developer from New Zealand.</Text>
				<Text>
					I am interested in creating interesting, playful and meaingful experiances that
					combine art, digital tech and story-telling.
				</Text>
				<Text>
					I think that most people have become cynical and exhausted by advertising.
				</Text>
				<Text>
					At the same time, we have more tools that ever to connect and share ideas with
					people.
				</Text>
				<Text>
					Drawing on my background in painting, writing and photography, I am curious
					about the ways in which digital tech can create highly tailored, personal
					experiances and fluid, unexpected instances of interaction that feel fun and
					inviting.
				</Text>
				<Text>
					I graduated from Dev Academy wellington in April 2022 and have since been
					interested in adding to my toolkit and a developing clear, cohesive design
					asthetic.
				</Text>
				<Text>I am excited to continue the creative adventure.</Text>
			</Intro>
		</VStack>
	)
}
