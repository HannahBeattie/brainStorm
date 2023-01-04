import {
	Box,
	Container,
	Heading,
	HStack,
	Spacer,
	Text,
	useColorModeValue,
	VStack,
} from '@chakra-ui/react'

import { useScroll } from 'framer-motion'
import Appear from '~/components/animate/Appear'
import FadeIn from '~/components/animate/FadeIn'
import Pulse from '~/components/animate/Pulse'
import MyContainer from '~/components/base/MyContainer'
import ScrollToTop from '~/components/base/ScrollToTop'
import MyLink from '~/components/MyLink'
import Brain from '~/components/p5/Brain'
import Tree from '~/components/p5/Tree'

export default function Home() {
	// const [ref] = useMeasure()
	let stroke = useColorModeValue([100, 90, 90], [230, 220, 220])
	const { scrollYProgress } = useScroll()

	return (
		<Appear>
			<ScrollToTop />
			<VStack pt={{ base: 4, sm: 4, md: 16 }} pb={{ base: 4, sm: 4, md: 8 }}>
				<Heading
					fontWeight={'800'}
					fontFamily={'Lora'}
					fontSize={100}
					textAlign={{ base: 'center', sm: 'auto' }}
				>
					Hello World!
				</Heading>
			</VStack>
			<Box
				bgGradient={useColorModeValue('linear(to-b, gray.800, black, gray.800)', '')}
				// bg={useColorModeValue('purple.900', '')}
				boxShaddow={'xl'}
				pb={30}
			>
				<Brain />
			</Box>

			<MyContainer>
				<Text>I am Hannah,</Text>
				<Text>An artist, insect-enthusiast and Dev from New Zealand.</Text>
				<Text>I am interested in creating playful, person-first designs...</Text>
			</MyContainer>

			<Tree num={1} />

			<MyContainer>
				<Text>...suprising user interactions & holistic, accessable applications.</Text>
				<Text pt={8}>
					I would describe my coding style as a mixture between curiosity-based play and
					clean, minimal functionality.
				</Text>
				<Text pt={8}>
					My background as an interdisiplanary artist means I naturally gravatate towards
					experementation and enjoy collecting new tools for my proverbial tool-kit
				</Text>
			</MyContainer>

			<Tree num={2} />

			<MyContainer>
				<Text>Recently, I have enjoyed creating generative art...</Text>
				<Text>
					As well as dipping my toes into application design with google script service.
				</Text>
			</MyContainer>

			<Tree num={3} />

			<MyContainer>
				<HStack>
					<Text>If you would like, </Text>
					<Text>
						<MyLink href={'/web'} fontStyle={'italic'}>
							check out my work.
						</MyLink>
					</Text>
				</HStack>
			</MyContainer>

			<Box h='16' />
		</Appear>
	)
}
