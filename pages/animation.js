import { Heading, VStack } from '@chakra-ui/react'
import { motion, useScroll } from 'framer-motion'
import MyLink from '~/components/MyLink'
import LightMode from '~/components/nav/LightMode'
import SketchTabs from '~/components/p5Motion/SketchTabs'

export default function Static() {
	return (
		<>
			<LightMode />

			<VStack justify={'stretch'} flex={'1'} alignSelf='stretch' py={'8'} spacing={'8'}>
				<Heading>Generative art made with p5</Heading>
				<SketchTabs />
				<MyLink href={'/staticArt'} _hover={{ textDecoration: 'underline' }}>
					<i>See static p5. Works</i>
				</MyLink>
			</VStack>
		</>
	)
}
