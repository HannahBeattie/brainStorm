import { Box, Container, Heading, Text, VStack } from '@chakra-ui/react'
import MyLink from '~/components/base/StyledNextLink'
import MyContainer from '~/components/base/templates/NarrowStack'
import Breathe from '../base/motion/framerMotion/Breathe'
import HeartBeat from '../base/motion/framerMotion/HeartBeat'
import Tree from '../p5/hero/Tree'

export default function Intro() {
	return (
		<>
			<VStack spacing={'16'} pt={{ md: 32, base: '32' }}>
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
						...taking into account accessability and diverse engagement styles...
					</Text>
				</MyContainer>
				<MyContainer>
					<Tree num={2} />
					<Text>
						...as well as playfulness, humour and the ability to suprise and delight
						with unexpectedly interactive interfaces.
					</Text>
				</MyContainer>
				<Tree num={3} />
				<MyContainer>
					<Text>
						My coding style is a mixture of curiosity driven play and clean, minimal
						functionality...
					</Text>
					<Tree num={3} />
					<Text>I like to understand how things work.</Text>
					<Tree num={3} />
					<Text>
						As an interdisiplanary artist, this tends to involve testing and re-testing
						methods and observing subsequent patterns and possibilities, so that I can
						constantly add tools to my proverbial tool kit.
					</Text>
				</MyContainer>
				<Tree num={4} />

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
				<HeartBeat>
					<Tree num={100} />
				</HeartBeat>
				<MyContainer>
					<MyLink href={'/apps'} fontWeight={'bold'} fontFamily={'Alice'}>
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
