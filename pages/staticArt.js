import { Heading, Text, VStack } from '@chakra-ui/react'
import { useScroll, motion } from 'framer-motion'
import FadeIn from '~/components/animate/FadeIn'
import LightMode from '~/components/nav/LightMode'
import FlowField from '~/components/p5Motion/FlowField'
import Grass from '~/components/p5Motion/grass'
import Sketches from '~/components/p5Motion/Sketches2'
import SketchTabs from '~/components/p5Motion/SketchTabs'
import Smoak from '~/components/p5Motion/Smoak'
import Wiggle from '~/components/p5Motion/wiggle'
import Worms from '~/components/p5Motion/worms'
import First from '~/components/static/First'
import Seccond from '~/components/static/Seccond'
import Third from '~/components/static/Third'

export default function Static() {
	const { scrollYProgress } = useScroll()
	return (
		<FadeIn>
			<motion.div className='progress' style={{ scaleX: scrollYProgress }} />
			<LightMode />

			<VStack alignItems='center' px={{ base: 4, md: 10 }} spacing={8}>
				<First />
				<Seccond />
				<Third />
			</VStack>
		</FadeIn>
	)
}
