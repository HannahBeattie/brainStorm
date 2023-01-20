import ScrollProgress from '~/components/framerMotion/ScrollProgress'
import ScrollToTop from '~/components/framerMotion/ScrollToTop'
import PageWrapper from '~/components/HOC/PageWrapper'
import HelloWorld from '~/components/landingPage/HelloWorld'

import { motion } from 'framer-motion'
import LandingPage from '~/components/landingPage/LandingPage'
import VineWorld from '~/components/p5/hero/VineWorld'
import { Image, VStack } from '@chakra-ui/react'

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
			<LandingPage />

			<Image
				alt={'A vector image of a grassy hill '}
				src={'/hill.png'}
				width={'100vw'}
				position={'absolute'}
				bottom={0}
				zIndex={-5}
			/>
		</PageWrapper>
	)
}

Home.noFooter = true
