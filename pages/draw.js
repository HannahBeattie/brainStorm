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
import MyContainer from '~/components/base/MyContainer'
import Brain from '~/components/p5/Brain'
import Tree from '~/components/p5/Tree'

export default function Draw() {
	// const [ref] = useMeasure()
	let stroke = useColorModeValue([100, 90, 90], [230, 220, 220])
	const { scrollYProgress } = useScroll()

	return (
		<Appear>
			<VStack bg='yelow' pt={{ base: 4, sm: 4, md: 16 }} pb={{ base: 4, sm: 4, md: 8 }}>
				<Heading
					fontWeight={'800'}
					fontFamily={'Lora'}
					fontSize={100}
					textAlign={{ base: 'center', sm: 'auto' }}
				>
					Hello World!
				</Heading>
			</VStack>
			<Box bg={useColorModeValue('gray.100', '')} borderRadius={20} boxShaddow={'lg'}>
				<Brain />
			</Box>

			<MyContainer>
				<Text>I am Hannah,</Text>
				<Text>An artist, insect-enthusiast and Dev from New Zealand.</Text>
				<Text>I am interested in creating playful, person-first designs...</Text>
			</MyContainer>

			<Tree num={1} />

			<MyContainer>
				<Text>suprising user interactions & holistic, accessable applications.</Text>
				<Text pt={8}>
					I would describe my coding style as a mixture between curiosity-based play and
					clean, minimal functionality.
				</Text>
				<Text pt={8}>
					My background as an interdisiplanary artist means I naturally gravatate towards
					experementation and enjoy collecting new tools for my proverbial tool-kit
				</Text>
			</MyContainer>

			<Tree num={1} />

			<MyContainer>
				<Text>Recently, I have enjoyed creating generative art...</Text>
				<Text>
					As well as dipping my toes into application design with google script service.
				</Text>
			</MyContainer>

			<Tree />

			<MyContainer>
				<Text>If you would like, check out my work here.</Text>
			</MyContainer>

			<Box h='16' />
		</Appear>
	)
}
