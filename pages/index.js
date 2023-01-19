import { VStack } from '@chakra-ui/react'
import ScrollProgress from '~/components/framerMotion/ScrollProgress'
import ScrollToTop from '~/components/framerMotion/ScrollToTop'
import PageWrapper from '~/components/HOC/PageWrapper'
import HelloWorld from '~/components/landingPage/HelloWorld'
import Intro from '~/components/landingPage/Intro'
import VineWorld from '~/components/p5/hero/VineWorld'
import { motion } from 'framer-motion'

export default function Home() {
	return (
		<PageWrapper>
			<ScrollToTop />
			<ScrollProgress />
			<HelloWorld />

			<motion.div
				initial={{ scale: 0, opacity: 0 }}
				whileInView={{
					opacity: 1,
				}}
				transition={{ duration: 1.5, ease: 'easeIn' }}
			>
				<VineWorld />
			</motion.div>

			<VStack>
				<Intro />
			</VStack>
		</PageWrapper>
	)
}

Home.noFooter = true
