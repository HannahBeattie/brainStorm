import { VStack } from '@chakra-ui/react'
import { motion, useScroll } from 'framer-motion'
import FadeIn from '~/components/base/motion/framerMotion/FadeIn'
import Scroll from '~/components/base/motion/framerMotion/ScrollProgress'
import ScrollToTop from '~/components/HOC/ScrollToTop'
import SlideIn from '~/components/HOC/SlideIn'
import First from '~/components/p5animations/static/First'
import Seccond from '~/components/p5animations/static/Seccond'
import Third from '~/components/p5animations/static/Third'

export default function Static() {
	const { scrollYProgress } = useScroll()
	return (
		<FadeIn>
			<ScrollToTop />
			<Scroll />
			<VStack flex={'1'} alignSelf='stretch' justify='center' py={8} spacing={8}>
				<First />
				<Seccond />
				<Third />
			</VStack>
		</FadeIn>
	)
}
