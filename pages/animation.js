import { Heading, VStack } from '@chakra-ui/react'
import MyLink from '~/components/base/StyledNextLink'
import Scroll from '~/components/base/motion/framerMotion/ScrollProgress'
import SketchTabs from '~/components/p5/moving/SketchTabs'
import SlideIn from '~/components/HOC/SlideIn'
import FadeIn from '~/components/base/motion/framerMotion/FadeIn'

export default function Static() {
	return (
		<FadeIn>
			<VStack justify={'stretch'} flex={'1'} alignSelf='stretch' py={'8'} spacing={'8'}>
				<Scroll />
				<VStack justify={'stretch'} flex={'1'} alignSelf='stretch' py={'8'} spacing={'8'}>
					<Heading>Generative art made with p5</Heading>
					<SketchTabs />
					<MyLink href={'/staticArt'} _hover={{ textDecoration: 'underline' }}>
						<i>See static p5. Works</i>
					</MyLink>
				</VStack>
			</VStack>
		</FadeIn>
	)
}
