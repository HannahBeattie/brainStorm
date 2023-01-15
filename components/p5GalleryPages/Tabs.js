import { Box, HStack, useColorModeValue } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import StyledNextLink from '~/components/base/StyledNextLink'
import { usePrevNext } from '../hooks/usePrevNext'
import { p5Tabs } from '../nav/Pages'

const wrapProps = {
	justify: 'center',
	fontSize: { sm: 'sm', md: 'md' },
	spacing: { sm: '4', md: '8' },
	pb: { md: 4 },
}

const tabProps = {
	position: 'relative',
	cursor: 'pointer',
	fontFamily: 'SF Pro',
	letterSpacing: { md: '0.1em' },
	px: 4,
}

export default function Tabs() {
	const items = p5Tabs
	const router = useRouter()
	const currentRoute = router.pathname
	const col = useColorModeValue('teal', 'red')
	const { prev, next } = usePrevNext(items.map((item) => item.href))

	return (
		<HStack {...wrapProps} alignContent={'center'}>
			{items.map(({ href, title }, idx) => (
				<Box key={idx} {...tabProps} tabIndex={0}>
					<StyledNextLink
						href={href}
						color={
							href === currentRoute
								? useColorModeValue('teal', 'red')
								: useColorModeValue('gray.900', 'gray.200')
						}
						fontWeight={href === currentRoute ? 500 : 400}
					>
						{title}
					</StyledNextLink>

					{href === currentRoute ? (
						<motion.div
							style={{
								position: 'absolute',
								bottom: '-1px',
								left: '0px',
								right: 0,
								height: '2.px',
								background: col,
								zIndex: 0,
							}}
						/>
					) : null}
				</Box>
			))}
		</HStack>
	)
}
