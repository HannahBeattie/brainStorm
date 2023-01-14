import {
	Box,
	Heading,
	HStack,
	Image,
	Spacer,
	Text,
	useColorModeValue,
	VStack,
} from '@chakra-ui/react'
import MyLink from '~/components/base/StyledNextLink'
import MyContainer from '~/components/base/templates/NarrowStack'
import Focus from '../base/motion/framerMotion/Snail'
import Breathe from '../base/motion/framerMotion/Breathe'
import HeartBeat from '../base/motion/framerMotion/HeartBeat'
import Tree from '../p5/hero/Tree'

export default function Intro() {
	return (
		<>
			<VStack spacing={'16'} pt={{ md: 32, base: '32' }} flex={'1'} alignItems={'stretch'}>
				<MyContainer fontFamily={'Lora'}>
					<Heading fontFamily={'Alice'}>I am Hannah.</Heading>
					<Text>An artist, insect enthusiast and Dev from New Zealand.</Text>
				</MyContainer>

				<Tree num={1} />
				<MyContainer>
					<Text>
						I am interested in story telling and creating holistic, person-first
						designs...
					</Text>
				</MyContainer>
				<Tree num={2} />

				<MyContainer>
					<Text>
						...that take into account accessability and the diversity of engagement
						styles...
					</Text>
				</MyContainer>
				<Tree num={2} />
				<MyContainer>
					<Text>...while retaining a sense of play, humour and awareness.</Text>
				</MyContainer>

				<MyContainer>
					<Text>
						My coding style is a mixture of curiosity driven play and clean, minimal
						functionality.
					</Text>{' '}
					<Text>
						I enjoy creating suprising moments of user interaction, while nurturing my
						love of clear, direct communication.
					</Text>
				</MyContainer>

				<Tree num={2} />
				<MyContainer>
					<Text>
						As an interdisiplanary artist, this involves testing and re-testing methods
						and observing subsequent patterns and possibilities, so that I can
						constantly add tools to my proverbial tool kit.
					</Text>
				</MyContainer>
				<Tree num={1} />
				<MyContainer>
					<Text>
						I have recently, gingerly, dipped my toes, into the realm of generative art
						and animation.
					</Text>
					<Text>
						I beleive my next step will be in the direction of mobile app design.
					</Text>
					<Text>So...whatch this space.</Text>
				</MyContainer>

				<Box position={'relative'}>
					<Box
						display={{ base: 'none', md: 'block' }}
						maxHeight={'3rem'}
						position={'absolute'}
						right={'100'}
						top={'-20'}
					>
						<Image
							filter={'auto'}
							h={'100'}
							invert={useColorModeValue(0, 100)}
							src={'/arrow.png'}
						/>
					</Box>

					<HeartBeat>
						<Tree num={100} />
					</HeartBeat>
				</Box>
				<MyContainer>
					<MyLink
						href={'/apps'}
						fontWeight={'bold'}
						fontFamily={'Alice'}
						textAlign={'center'}
					>
						Look at my work
					</MyLink>
				</MyContainer>
				<Breathe>
					<VStack py={4}>
						<MyLink
							href={
								'https://gorillasun.de/blog/radial-perlin-noise-and-generative-tree-rings'
							}
							fontFamily={'Poppins'}
							fontSize={{ base: 'sm', md: 'sm' }}
							writingMode={'vertical-lr'}
						>
							Generative circle work enspired by AHMAD MOUSSA's Perlin noise rings
						</MyLink>
					</VStack>
				</Breathe>
			</VStack>
		</>
	)
}
