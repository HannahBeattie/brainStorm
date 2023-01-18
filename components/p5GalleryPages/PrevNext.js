import { HStack, Spacer } from '@chakra-ui/react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import StyledNextLink from '../base/StyledNextLink'
import { usePrevNext } from '../hooks/usePrevNext'
import { P5NavItems } from './psNavItems'

export default function PrevNext({ children, props }) {
	const pages = P5NavItems
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
