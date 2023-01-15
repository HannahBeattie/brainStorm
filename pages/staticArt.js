import { VStack } from '@chakra-ui/react'
import { motion, useScroll } from 'framer-motion'
import FadeIn from '~/components/base/motion/framerMotion/FadeIn'
import IAmHov from '~/components/base/motion/framerMotion/IAmHov'
import Scroll from '~/components/base/motion/framerMotion/ScrollProgress'
import StyledNextLink from '~/components/base/StyledNextLink'
import ScrollToTop from '~/components/HOC/ScrollToTop'
import SlideIn from '~/components/HOC/SlideIn'
import First from '~/components/landingPage/p5animations/static/First'
import Seccond from '~/components/landingPage/p5animations/static/Seccond'
import Third from '~/components/landingPage/p5animations/static/Third'

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

				<StyledNextLink href={'/p5Animations'}>
					<i>Back to animation page</i>
				</StyledNextLink>
			</VStack>
		</FadeIn>
	)
}
