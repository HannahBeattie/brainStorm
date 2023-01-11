import { Text, VStack } from '@chakra-ui/react'
import MyLink from '~/components/base/StyledNextLink'
import MyContainer from '~/components/base/templates/NarrowStack'
import Tree from '../p5/hero/Tree'

export default function Intro() {
	return (
		<>
			<MyContainer>
				<Text>I am Hannah,</Text>
				<Text>An artist, insect-enthusiast and Dev from New Zealand.</Text>
				<Text>I am interested in creating playful, person-first designs...</Text>
			</MyContainer>
			<Tree num={1} />
			<MyContainer>
				<Text>...suprising user interactions & holistic, accessable applications.</Text>
				<Text>
					I would describe my coding style as a mixture between curiosity-based play and
					clean, minimal functionality.
				</Text>
				<Text>
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
			<Text textAlign={'center'}>
				<MyLink href={'/apps'} fontStyle={'italic'}>
					Check out my work.
				</MyLink>
			</Text>
			<VStack flex={'1'}>
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
		</>
	)
}
