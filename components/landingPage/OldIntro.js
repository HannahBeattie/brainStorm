import { Box, Heading, Image, Text, useColorModeValue, VStack } from '@chakra-ui/react'
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion'
import StyledNextLink from '~/components/base/StyledNextLink'
import TextContainer from '~/components/base/templates/TextContainer'
import ButtonFocus from '../framerMotion/ButtonFocus'
import { EnterStage } from '../framerMotion/EnterStage'
import Pulse from '../framerMotion/Pulse'
import Tree from '../p5/hero/Tree'

export default function OLDIntro() {
	return (
		<>
			<VStack spacing={'16'} pt={{ md: 40, base: 32 }} flex={'1'} alignItems={'stretch'}>
				<TextContainer fontFamily={'Lora'}>
					<Heading fontFamily={'Alice'}>I am Hannah.</Heading>
					<Text>An artist, insect enthusiast and Dev from New Zealand.</Text>
				</TextContainer>

				<Tree num={1} right={'true'} />

				<TextContainer>
					<Text>
						I am interested in storytelling and creating holistic, person-first designs
						...
					</Text>
				</TextContainer>
				<Tree num={3} />

				<TextContainer>
					<Text>
						...that take into account the diversity of experience and access styles...
					</Text>
				</TextContainer>
				<Tree num={2} />
				<TextContainer>
					<Text>...while retaining a sense of experimentation, humour and play...</Text>
				</TextContainer>
				<Tree num={1} />
				<TextContainer>
					<Text>
						My coding style is a mixture between curiosity-driven experementation and
						clean, minimal functionality ---
					</Text>{' '}
					<Text pt={8}>
						<i>It doesn't matter how flashy something is if it can't be used.</i>
					</Text>
					<Text pt={8}>
						One of my favourite things about coding is the ability to create surprising,
						personal moments of user interaction that cut through the droll buzz of data
						fatigue most of us carry.
					</Text>
				</TextContainer>

				<Tree num={2} />
				<TextContainer>
					<Text>
						My background as an interdisciplinary artist has always involved testing and
						re-testing methods and tools to observe patterns and possibilities.
					</Text>
					<Text pt={8}>Coding is much the same, only less messy.</Text>
				</TextContainer>
				<Tree num={1} />
				<TextContainer>
					<Text>
						I am excited to continue to learn new tools, languages and frameworks with
						which to refine my practice and enrich my abilities; Allowing me to
						contribute to a digital landscape that is kinder, more diverse, more
						deliberate and highly responsive.
					</Text>{' '}
				</TextContainer>

				<TextContainer>
					<Text>So...whatch this space.</Text>
				</TextContainer>

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

					<Pulse>
						<Tree num={100} />
					</Pulse>
				</Box>

				<ButtonFocus>
					<TextContainer>
						<StyledNextLink
							fontSize={{ base: '3xl' }}
							px={{ base: 10 }}
							href={'/apps'}
							textAlign={'center'}
							fontFamily={'ALICE'}
						>
							Check out my work
						</StyledNextLink>
					</TextContainer>
				</ButtonFocus>

				<VStack py={8} spacing={4}>
					<StyledNextLink
						href={'/contact'}
						maxW={{ base: '20em', md: '34em' }}
						textAlign={'center'}
					>
						<Text textAlign={{ base: 'center', md: 'auto' }} fontSize={'md'}>
							I am currently interested in learning how to write mobile applications.
							If you are curious about this or have resources to share, feel free to{' '}
							<i>reach out</i>.
						</Text>
					</StyledNextLink>
					<StyledNextLink
						maxW={{ base: '20em', md: '34em' }}
						textAlign={'center'}
						href={
							'https://gorillasun.de/blog/radial-perlin-noise-and-generative-tree-rings'
						}
						fontFamily={'SF Pro'}
						fontSize={{ base: 'sm', md: 'xs' }}
					>
						Generative circle work enspired by AHMAD MOUSSA's Perlin noise rings
					</StyledNextLink>
				</VStack>
			</VStack>
		</>
	)
}
