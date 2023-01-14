import { HStack, Spacer, Text } from '@chakra-ui/react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

import StyledNextLink from '../base/StyledNextLink'
import { usePrevNext } from '../hooks/usePrevNext'
import { AnimationPages } from './Pages'
const pages = AnimationPages

export default function PrevNext({ children, props }) {
	const { prev, next } = usePrevNext(pages.map((page) => page.href))
	const stackProps = {
		p: '0',
		alignItems: 'stretch',
		fontSize: { base: 'sm', md: 'md' },
		...props,
	}
	const textArroProps = {
		color: 'grayAlpha.900',
	}
	return (
		<HStack {...stackProps}>
			<StyledNextLink href={prev}>
				<FaArrowLeft {...textArroProps} />
			</StyledNextLink>

			<Spacer />
			{children}
			<Spacer />

			<StyledNextLink href={next}>
				<FaArrowRight {...textArroProps} />
			</StyledNextLink>
		</HStack>
	)
}
