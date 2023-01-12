import { Heading, VStack } from '@chakra-ui/react'
import Appear from '~/components/base/motion/framerMotion/Appear'
import FadeIn from '~/components/base/motion/framerMotion/FadeIn'
import Scroll from '~/components/base/motion/framerMotion/ScrollProgress'
import ScrollToTop from '~/components/HOC/ScrollToTop'
import Intro from '~/components/landingPage/Intro'
import Brain from '~/components/p5/hero/Brain'

export default function Home() {
	return (
		<FadeIn>
			<VStack flex={'1'} alignSelf='stretch' justify='stretch' px={4} py={'4'} spacing={'8'}>
				<ScrollToTop />
				<Scroll />
				<Appear>
					<Heading
						fontWeight={'800'}
						fontFamily={'Lora'}
						fontSize={{ md: 100, base: 100 }}
						textAlign={{ base: 'center', sm: 'auto' }}
					>
						Hello World!
					</Heading>
				</Appear>
				<VStack
					flex={'1'}
					alignSelf='stretch'
					justify='stretch'
					minHeight={'60vh'}
					px={'4'}
				>
					<Brain />
				</VStack>
				<Intro />
			</VStack>
		</FadeIn>
	)
}
