import { Box, Heading, useColorModeValue, VStack } from '@chakra-ui/react'
import Appear from '~/components/base/motion/framerMotion/Appear'
import FadeIn from '~/components/base/motion/framerMotion/FadeIn'
import Scroll from '~/components/base/motion/framerMotion/ScrollProgress'
import ScrollToTop from '~/components/HOC/ScrollToTop'
import Intro from '~/components/landingPage/Intro'
import Brain from '~/components/p5animations/hero/Brain'
import { motion } from 'framer-motion'
import HeartBeat from '~/components/base/motion/framerMotion/HeartBeat'
export default function Home() {
	return (
		<FadeIn>
			<VStack flex={'1'} alignSelf='stretch' justify='stretch' spacing={{ md: 8 }}>
				<ScrollToTop />
				<Scroll />
				<Appear>
					<Heading
						fontWeight={'900'}
						fontFamily={'Alice'}
						fontSize={{ md: 90, base: 100 }}
						textAlign={{ base: 'center', sm: 'auto' }}
					>
						Hello World
					</Heading>
				</Appear>

				<VStack
					height={{ md: '500px', base: '300px' }}
					width={{ md: '500px', base: '300px' }}
					borderRadius={'100%'}
					overflow={'hidden'}
				>
					<Brain />
				</VStack>
				<Intro />
			</VStack>
		</FadeIn>
	)
}
