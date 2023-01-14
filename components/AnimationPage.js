import {
	Box,
	Container,
	Divider,
	HStack,
	Stack,
	Text,
	useBreakpointValue,
	useMediaQuery,
	VStack,
} from '@chakra-ui/react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import PrevNext from '~/components/nav/PrevNext'
import FadeIn from './base/motion/framerMotion/FadeIn'
import StyledNextLink from './base/StyledNextLink'
import SlideIn from './HOC/SlideIn'
import { WipeIn } from './HOC/WipeIn'
import { usePrevNext } from './hooks/usePrevNext'
import P5Nav from './nav/P5Nav'
import { AnimationPages } from './nav/Pages'

const pages = AnimationPages
export default function AnimationPage({ title, children, par3, par2, par1 }) {
	const dividerOrientation = useBreakpointValue({ md: 'vertical' })
	const { prev, next } = usePrevNext(pages.map((page) => page.href))
	return (
		<SlideIn>
			<VStack flex={'1'} align={'stretch'} py={8}>
				<P5Nav />
				<VStack>
					{children}
					<Text>{title}</Text>
				</VStack>
				<Divider />

				<Stack px={8} direction={{ base: 'column', md: 'row' }} alignItems='stretch'>
					<VStack spacing={0} flex='1'>
						{par1}
					</VStack>
					<Divider orientation={dividerOrientation} h={{ md: 150 }} />
					<VStack spacing={0} flex='1'>
						{par2}
					</VStack>
					<Divider orientation={dividerOrientation} h={{ md: 150 }} />
					<VStack spacing={0} flex='1'>
						{par3}
					</VStack>
					<Divider
						display={{ md: 'none' }}
						orientation={dividerOrientation}
						h={{ md: 150 }}
					/>
				</Stack>
				<HStack alignItems={'stretch'} px={8} justifyContent={'space-between'}>
					<StyledNextLink href={prev}>
						<FaArrowLeft />
					</StyledNextLink>
					<StyledNextLink href={next}>
						<FaArrowRight />
					</StyledNextLink>
				</HStack>
			</VStack>
		</SlideIn>
	)
}
