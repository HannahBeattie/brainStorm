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
		fontFamily: 'Roboto',
		fontSize: { base: 'lg', md: '3xl' },
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
					combine digital tech, art, and story-telling.
				</Text>
				<Text>My background is in painting, writing and gig photography.</Text>
				<Text>
					I am interested in story telling and disrupting repetitive patterns to engage in
					a more personal, direct and playful way.
				</Text>
				<Text>
					Tech allows us to connect and tell stories in new ways; We can create platforms
					and share ideas like never before and connect with people in an instant, right
					in the palm of their hand.
				</Text>
				<Text>
					The internet can, at times, feel like a huge, encompasing void of static; Many
					people are sick of being lied to, tricked or having pop-ups and ads shoved in
					their face.
				</Text>
				<Text>
					Advertising doesn&apos;t have to be loud, flashy or demanding to get attantion.
					It can be personal. Fun. Relatable. Honest...and human.
				</Text>
				<Text>
					Accessable tech allows us to shape the virtual landscape; We can make the types
					of things we want to see.
				</Text>
				<Text>
					I graduated from Dev Academy wellington in April 2022 and since then have been
					chasing my interests and exploring the interpolation between clean, minimal
					design and person-first braining.
				</Text>
				<Text>
					I am excited to continue the creative adventure and fight bland, cynical
					advertising one product at a time.
				</Text>{' '}
			</Intro>
		</VStack>
	)
}
