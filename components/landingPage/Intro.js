import { Box, Heading, Image, Text, useColorModeValue, VStack } from '@chakra-ui/react'
import MyLink from '~/components/base/StyledNextLink'
import MyContainer from '~/components/base/templates/NarrowStack'
import LinkWrapper from '../base/LinkWrapper'
import ButtonFocus from '../base/motion/framerMotion/ButtonFocus'
import HeartBeat from '../base/motion/framerMotion/HeartBeat'
import Tree from './p5animations/hero/Tree'

export default function Intro() {
	return (
		<>
			<VStack spacing={'16'} pt={{ md: 32, base: 32 }} flex={'1'} alignItems={'stretch'}>
				<MyContainer fontFamily={'Lora'}>
					<Heading fontFamily={'Alice'}>I am Hannah.</Heading>
					<Text>An artist, insect enthusiast and Dev from New Zealand.</Text>
				</MyContainer>

				<Tree num={1} />
				<MyContainer>
					<Text>
						I am interested in storytelling and creating holistic, person-first designs
						...
					</Text>
				</MyContainer>
				<Tree num={2} />

				<MyContainer>
					<Text>
						...that take into account the diversity of experience and access styles ...
					</Text>
				</MyContainer>
				<Tree num={2} />
				<MyContainer>
					<Text>...while retaining a sense of experimentation, joy and humour.</Text>
				</MyContainer>
				<Tree num={2} />
				<MyContainer>
					<Text>
						My coding style is a mixture of curiosity-driven play and clean, minimal
						functionality, with the through line being that it doesn&apos;t matter how
						flashy something looks if it can&apos;t be accessed.
					</Text>{' '}
					<Text>
						One of my favourite things about coding is creating surprising and playful
						moments of user interaction that cut through the quotient of data fatigue we
						all carry and have come to expect.
					</Text>
				</MyContainer>

				<Tree num={2} />
				<MyContainer>
					<Text>
						My background as an interdisciplinary artist has always involved testing and
						re-testing methods and tools to observe patterns and possibilities.
					</Text>
					<Text>
						Coding is much the same, only with digital rather than physical applicative
						methods.
					</Text>
				</MyContainer>
				<Tree num={1} />
				<MyContainer>
					<Text>
						I am excited to continue to learn new tools, languages and frameworks with
						which to refine my practice.
					</Text>
					<Text>
						And contribute to a digital landscape that is diverse, deliberate and highly
						responsive.
					</Text>
				</MyContainer>

				<MyContainer>
					<Text>So...whatch this space.</Text>
				</MyContainer>

				<Box position={'relative'}>
					<Box
						maxHeight={{ base: '5px', md: '2rem' }}
						position={'absolute'}
						right={{ base: '13vw', sm: '10vw', md: '100' }}
						top={{ base: '-20', md: '-20' }}
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
					<Text>
						I am currently interested in learning how to write mobile applications.
					</Text>
					<Text as='div'>
						If you are curious about this or have resources to share, feel free to
						<LinkWrapper href={'/contact'}>
							<i>reach out.</i>
						</LinkWrapper>
					</Text>
				</MyContainer>

				<ButtonFocus>
					<MyContainer>
						<MyLink
							fontSize={{ base: '3xl' }}
							px={{ base: 10 }}
							href={'/apps'}
							textAlign={'center'}
							fontFamily={'ALICE'}
						>
							Check out my work
						</MyLink>
					</MyContainer>
				</ButtonFocus>
				<VStack>
					<MyLink
						maxW={{ base: '20em', md: '34em' }}
						textAlign={'center'}
						href={
							'https://gorillasun.de/blog/radial-perlin-noise-and-generative-tree-rings'
						}
						fontFamily={'Poppins'}
						fontSize={{ base: 'sm', md: 'xs' }}
					>
						Generative circle work enspired by AHMAD MOUSSA's Perlin noise rings
					</MyLink>
				</VStack>
			</VStack>
		</>
	)
}
