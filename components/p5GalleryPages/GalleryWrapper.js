import { Divider, HStack, Stack, Text, useBreakpointValue, VStack } from '@chakra-ui/react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import StyledNextLink from '../base/StyledNextLink'
import { usePrevNext } from '../hooks/usePrevNext'
import { p5Tabs } from '../nav/Pages'
import P5Nav from './Tabs'

export default function GalleryWrapper({ children, title, column1, column2, column3 }) {
	const pages = p5Tabs
	const dividerOrientation = useBreakpointValue({ md: 'vertical' })
	const { prev, next } = usePrevNext(pages.map((page) => page.href))
	const headingProps = {
		color: 'grayAlpha.900',
		fontSize: 'sm',
		textTransform: 'uppercase',
	}

	const divHeight = 145
	return (
		<VStack px={8} alignItems={'stretch'} py={4}>
			<P5Nav />
			{children}
			<Text textAlign={'center'}>{title}</Text>
			<Stack direction={{ base: 'column', md: 'row' }} alignItems='stretch'>
				<VStack spacing={0} flex='1'>
					<Text {...headingProps}>about</Text>
					{column1}
				</VStack>
				<Divider orientation={dividerOrientation} h={{ md: divHeight }} />
				<VStack spacing={0} flex='1'>
					<Text {...headingProps}>notes</Text>
					{column2}
				</VStack>
				<Divider orientation={dividerOrientation} h={{ md: divHeight }} />
				<VStack spacing={0} flex='1'>
					<Text {...headingProps}>details</Text>
					{column3}
				</VStack>
				<Divider
					display={{ md: 'none' }}
					orientation={dividerOrientation}
					h={{ md: divHeight }}
				/>
			</Stack>
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
