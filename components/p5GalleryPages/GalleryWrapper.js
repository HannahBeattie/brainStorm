import {
	Divider,
	HStack,
	Stack,
	Text,
	useBreakpointValue,
	useColorModeValue,
	VStack,
} from '@chakra-ui/react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import StyledNextLink from '../base/StyledNextLink'
import { usePrevNext } from '../hooks/usePrevNext'
import { p5Tabs } from '../nav/Pages'
import P5Nav from './Tabs'

export default function GalleryWrapper({ children, title, column1, column2, column3 }) {
	const pages = p5Tabs

	const { prev, next } = usePrevNext(pages.map((page) => page.href))
	const headingProps = {
		color: useColorModeValue('blackAlpha.800', 'grayAlpha.900'),
		fontSize: 'sm',
		textTransform: 'uppercase',
		letterSpacing: '0.1em',
		fontFamily: 'Poppins',
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
		fontFamily: 'Poppins',
		textTransform: 'uppercase',
		letterSpacing: '0.8em',
	}
	return (
		<VStack px={{ md: 8 }} alignItems={'stretch'} py={4} flex={1}>
			<P5Nav />
			{children}
			<Text {...titleProps}>{title}</Text>
			<Divider display={{ md: 'none' }} {...dividerProps} />
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
			<Divider display={{ md: 'none' }} {...dividerProps} />
			<HStack alignItems={'stretch'} justifyContent={'space-between'}>
				<StyledNextLink href={prev}>
					<FaArrowLeft />
				</StyledNextLink>

				<StyledNextLink href={next}>
					<FaArrowRight />
				</StyledNextLink>
			</HStack>
		</VStack>
	)
}
