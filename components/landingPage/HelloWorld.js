import { HStack, VStack } from '@chakra-ui/react'
import {
	animate,
	motion,
	useDragControls,
	useMotionValue,
	useSpring,
	useTransform,
} from 'framer-motion'
import Appear from '../framerMotion/Appear'
import Track from '../framerMotion/Track'
import MapLetters from './MapLetters'

export default function HelloWorld() {
	const dragControls = useDragControls()

	function startDrag(event) {
		dragControls.start(event, { snapToCursor: true })
	}

	return (
		<Appear width={{ width: '100vw' }}>
			{/* <motion.div
				drag
				dragConstraints={{ left: 0, right: 0, top: 1, bottom: 1 }}
				dragElastic={0.01}
				dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
				whileTap={{ rotate: [0, 1, -1, 0] }}
				onTapStart={startDrag}
				dragDirectionLock
			>
				<VStack
					onTapStart={startDrag}
					py={{ base: 4, md: 8 }}
					pb={{ base: 10 }}
					display={{ base: 'flex', md: 'none' }}
					spacing={{ base: 0, md: 8 }}
					flex={'1'}
					alignItems={'center'}
					justifyContent={'center'}
					direction={{ base: 'column', md: 'row' }}
					className={'specialCaseNoSelect'}
					area-label={'Animated Text reading : "Hello World"'}
				>
					<MapLetters />
				</VStack>
			</motion.div> */}
			<HStack
				py={{ base: 4, md: 8 }}
				pb={{ base: 10 }}
				display={{ base: 'none', md: 'center' }}
				spacing={{ base: 0, md: 8 }}
				flex={'1'}
				alignItems={'center'}
				justifyContent={'center'}
				direction={{ base: 'column', md: 'row' }}
			>
				<MapLetters />
			</HStack>
		</Appear>
	)
}
