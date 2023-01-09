import { Box, Heading, Text, VStack } from '@chakra-ui/react'
import { useScroll } from 'framer-motion'
import Appear from '~/components/animate/Appear'
import Scroll from '~/components/animate/Scroll'
import MyContainer from '~/components/base/MyContainer'
import ScrollToTop from '~/components/base/ScrollToTop'
import { useMediaQuery } from '~/components/hooks/useMediaQuery'
import MyLink from '~/components/MyLink'
import Brain from '~/components/p5/Brain'
import Tree from '~/components/p5/Tree'

export default function Home() {
	return (
		<Appear>
			<ScrollToTop />
			<Scroll />
			<VStack pt={{ base: 4, sm: 4, md: 16 }} pb={{ base: 8, sm: 4, md: 8 }}>
				<Heading
					fontWeight={'800'}
					fontFamily={'Lora'}
					fontSize={{ md: 100, base: 100 }}
					textAlign={{ base: 'center', sm: 'auto' }}
				>
					Hello World!
				</Heading>
			</VStack>
			<Box pb={{ sm: 30 }}>
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
			<Text textAlign={'center'} py={'4'}>
				<MyLink href={'/web'} fontStyle={'italic'}>
					Check out my work.
				</MyLink>
			</Text>
			<VStack py={'4'} flex={'1'}>
				<MyLink
					href={
						'https://gorillasun.de/blog/radial-perlin-noise-and-generative-tree-rings'
					}
					fontStyle={'italic'}
					fontSize={'xs'}
				>
					RADIAL work enspired by AHMAD MOUSSA's Generative Tree Rings.
				</MyLink>
			</VStack>
		</Appear>
	)
}
