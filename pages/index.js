import { VStack } from '@chakra-ui/react'
import Appear from '~/components/base/motion/framerMotion/Appear'
import Scroll from '~/components/base/motion/framerMotion/ScrollProgress'
import ScrollToTop from '~/components/base/motion/ScrollToTop'
import Intro from '~/components/landingPage/Intro'
import Title from '~/components/landingPage/Title'
import Brain from '~/components/p5/hero/Brain'

export default function Home() {
	return (
		<VStack flex={'1'} alignSelf='stretch' justify='stretch' px={4} py={'4'} spacing={'8'}>
			<ScrollToTop />
			<Scroll />
			<Title />
			<VStack flex={'1'} alignSelf='stretch' justify='stretch' minHeight={'60vh'} px={'4'}>
				<Brain />
			</VStack>
			<Intro />
		</VStack>
	)
}
