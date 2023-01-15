import { Heading, VStack } from '@chakra-ui/react'
import Appear from '~/components/base/motion/framerMotion/Appear'
import FadeIn from '~/components/base/motion/framerMotion/FadeIn'
import Scroll from '~/components/base/motion/framerMotion/ScrollProgress'
import ScrollToTop from '~/components/HOC/ScrollToTop'
import Intro from '~/components/landingPage/Intro'
import Brain from '~/components/landingPage/p5animations/hero/Brain'

export default function Home() {
	return (
		<FadeIn>
			<VStack flex={'1'} alignSelf='stretch' justify='stretch' spacing={{ base: 8 }}>
				<ScrollToTop />
				<Scroll />
				<Appear>
					<Heading
						fontWeight={'900'}
						fontFamily={'Alice'}
						fontSize={{ base: 80, sm: 80, md: 90 }}
						textAlign={{ base: 'center', sm: 'auto' }}
					>
						Hello World
					</Heading>
				</Appear>

				<VStack
					my={{ sm: 16 }}
					height={{ base: '300px', md: '500px' }}
					width={{ base: '300px', md: '500px' }}
				>
					<Brain />
				</VStack>
				<Intro />
			</VStack>
		</FadeIn>
	)
}
