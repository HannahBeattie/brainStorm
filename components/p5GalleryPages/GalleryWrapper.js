import {
	Divider,
	HStack,
	Spacer,
	Stack,
	Text,
	useBreakpointValue,
	useColorModeValue,
	VStack,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { useSwipeable } from 'react-swipeable'
import StyledNextLink from '../base/StyledNextLink'
import FadeIn from '../HOC/FadeIn'
import { usePrevNext } from '../hooks/usePrevNext'

import P5Nav from './P5Nav'
import { P5NavItems } from './psNavItems'

export default function GalleryWrapper({ children, title, column1, column2, column3, no, key }) {
	const pages = P5NavItems

	const { prev, next } = usePrevNext(pages.map((page) => page.href))
	const router = useRouter()

	const handlers = useSwipeable({
		onSwipedRight: () => router.push(prev),
		onSwipedLeft: () => router.push(next),
	})
	useEffect(() => {
		const keyPressed = ({ key }) =>
			key === 'ArrowRight' ? router.push(next) : key === 'ArrowLeft' && router.push(prev)
		window.addEventListener('keydown', keyPressed)
		return () => window.removeEventListener('keydown', keyPressed)
	}, [next, prev, router])

	const headingProps = {
		color: useColorModeValue('blackAlpha.800', 'grayAlpha.900'),
		fontSize: 'sm',
		textTransform: 'uppercase',
		letterSpacing: '0.1em',
		fontFamily: 'SF Pro',
	}

	const containerProps = {
		flex: 1,
		spacing: 0,
		px: { md: 8, base: 12 },
		py: { md: 4, base: 2 },
		spacing: 4,
		borderRadius: 'md',
	}
	const stackProps = {
		alignContent: 'space-between',
		px: { md: 8 },
	}
	const dividerProps = {
		orientation: useBreakpointValue({ md: 'vertical' }),
		h: { md: 200 },

		border: '1px',
	}
	const titleProps = {
		textAlign: 'center',
		fontFamily: 'SF Pro',
		textTransform: 'uppercase',
		letterSpacing: '0.8em',
	}

	return (
		<FadeIn>
			<VStack
				px={{ sm: 4, md: 8 }}
				alignItems={'stretch'}
				pb={{ base: 4 }}
				py={{ md: 4 }}
				flex={1}
				{...handlers}
			>
				<P5Nav />
				{children}
				<Text {...titleProps}>{title}</Text>
				{!no && <Divider display={{ md: 'none' }} {...dividerProps} />}
				{!no && (
					<Stack direction={{ base: 'column', md: 'row' }} {...stackProps}>
						<VStack {...containerProps}>
							<Text {...headingProps}>about</Text>
							{column1}
						</VStack>
						<Divider {...dividerProps} />
						<VStack {...containerProps}>
							<Text {...headingProps}>notes</Text>
							{column2}
						</VStack>
						<Divider {...dividerProps} />
						<VStack {...containerProps}>
							<Text {...headingProps}>details</Text>
							{column3}
						</VStack>
					</Stack>
				)}
				{!no && <Divider display={{ md: 'none' }} {...dividerProps} />}
				{!no && (
					<HStack
						px={{ base: 4 }}
						flex={1}
						alignItems={'center'}
						justifyContent={'center'}
					>
						<StyledNextLink href={prev}>
							<FaArrowLeft />
						</StyledNextLink>
						<Spacer />

						<Spacer />
						<StyledNextLink href={next}>
							<FaArrowRight />
						</StyledNextLink>
					</HStack>
				)}
			</VStack>
		</FadeIn>
	)
}
