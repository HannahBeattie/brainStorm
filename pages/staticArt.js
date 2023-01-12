import { VStack } from '@chakra-ui/react'
import { motion, useScroll } from 'framer-motion'
import FadeIn from '~/components/base/motion/framerMotion/FadeIn'
import Scroll from '~/components/base/motion/framerMotion/ScrollProgress'
import ScrollToTop from '~/components/HOC/ScrollToTop'
import SlideIn from '~/components/HOC/SlideIn'
import First from '~/components/p5/static/First'
import Seccond from '~/components/p5/static/Seccond'
import Third from '~/components/p5/static/Third'

export default function Static() {
	const { scrollYProgress } = useScroll()
	return (
		<FadeIn>
			<ScrollToTop />
			<Scroll />
			<VStack alignItems='center' px={{ base: 4, md: 10 }} spacing={8}>
				<First />
				<Seccond />
				<Third />
			</VStack>
		</FadeIn>
	)
}
