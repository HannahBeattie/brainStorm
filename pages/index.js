import { Heading, VStack } from '@chakra-ui/react'
import Scroll from '~/components/base/motion/framerMotion/ScrollProgress'
import ScrollToTop from '~/components/base/motion/ScrollToTop'
import Intro from '~/components/landingPage/Intro'
import Brain from '~/components/p5/hero/Brain'

export default function Home() {
	return (
		<VStack flex={'1'} alignSelf='stretch' justify='stretch' px={4} py={'4'} spacing={'8'}>
			<ScrollToTop />
			<Scroll />
			<Heading
				fontWeight={'800'}
				fontFamily={'Lora'}
				fontSize={{ md: 100, base: 100 }}
				textAlign={{ base: 'center', sm: 'auto' }}
			>
				Hello World!
			</Heading>
			<VStack flex={'1'} alignSelf='stretch' justify='stretch' minHeight={'60vh'} px={'4'}>
				<Brain />
			</VStack>
			<Intro />
		</VStack>
	)
}
