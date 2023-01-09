import { VStack } from '@chakra-ui/react'
import { motion, useScroll } from 'framer-motion'
import FadeIn from '~/components/animate/FadeIn'
import Scroll from '~/components/animate/Scroll'
import ScrollToTop from '~/components/base/ScrollToTop'
import First from '~/components/static/First'
import Seccond from '~/components/static/Seccond'
import Third from '~/components/static/Third'

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
