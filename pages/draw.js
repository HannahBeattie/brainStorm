import { Box, Heading, HStack, Spacer, Text, useColorModeValue, VStack } from '@chakra-ui/react'
import useMeasure from 'react-use-measure'

import Tree from '~/components/p5/Tree'
import { motion, useScroll } from 'framer-motion'

export default function Draw() {
	// const [ref] = useMeasure()
	let stroke = useColorModeValue([100, 90, 90], [230, 220, 220])
	const { scrollYProgress } = useScroll()

	return (
		<>
			<VStack
				flex='1'
				alignSelf='stretch'
				alignItems='stretch'
				fontFamily={'poppins'}
				fontSize={'xl'}
			>
				<HStack>
					<VStack
						px={{ base: 4, sm: 4, md: 16 }}
						pt={{ base: 4, sm: 4, md: 16 }}
						alignItems='stretch'
						flex={'1'}
						spacing={3}
					>
						<Heading fontWeight={'800'} fontFamily={'lora'} fontSize={100}>
							Hello World!
						</Heading>
						<Text>I am Hannah,</Text>
						<Text>An artist, insect-enthusiast and Dev from New Zealand.</Text>
						<Text>I am interested in creating playful, person-first designs...</Text>
						<Text></Text>
					</VStack>
					<Spacer />
					<VStack></VStack>
				</HStack>

				<Tree num={5} />

				<HStack>
					<VStack></VStack>
					<Spacer></Spacer>
					<VStack
						px={{ base: 4, sm: 4, md: 16 }}
						alignItems='stretch'
						flex={'1'}
						spacing={3}
					>
						<Text textAlign='right'>
							suprising user interactions & holistic, accessable applications.
						</Text>
						<Text textAlign='right' pt={8}>
							I would describe my coding style as a mixture between curiosity-based
							play and clean, minimal functionality.
						</Text>
						<Text textAlign='right' pt={8}>
							My background as an interdisiplanary artist means I naturally gravatate
							towards experementation and enjoy collecting new tools for my proverbial
							tool-kit
						</Text>
					</VStack>
				</HStack>

				<Tree num={1} />

				<HStack>
					<VStack
						px={{ base: 4, sm: 4, md: 16 }}
						pt={{ base: 4, sm: 4, md: 16 }}
						alignItems='stretch'
						flex={'1'}
					>
						<Text>Recently, I have enjoyed creating generative art...</Text>
						<Text>
							As well as dipping my toes into application design with google script
							service.
						</Text>
						<Text></Text>
					</VStack>
					<Spacer></Spacer>
				</HStack>

				<Tree />

				<HStack>
					<VStack></VStack>
					<Spacer></Spacer>
					<VStack
						px={{ base: 4, sm: 4, md: 16 }}
						pt={{ base: 4, sm: 4, md: 16 }}
						alignItems='stretch'
						flex={'1'}
						spacing={3}
					>
						<Text textAlign='right'>If you would like, check out my work here.</Text>
					</VStack>
				</HStack>
				<Box h='16' />
			</VStack>
		</>
	)
}
