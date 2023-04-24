import { Box, HStack, useColorModeValue } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import StyledNextLink from '~/components/base/StyledNextLink'
import { P5NavItems } from './psNavItems'

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
	py: { base: 0 },
	mt: { base: 0 },
}

export default function P5Nav() {
	const items = P5NavItems
	const router = useRouter()
	const currentRoute = router.pathname
	const col = useColorModeValue('teal', 'teal')
	const col2 = useColorModeValue('teal', 'teal')
	const col3 = useColorModeValue('gray.900', 'gray.200')

	return (
		<HStack {...wrapProps} alignContent={'center'}>
			{items.map(({ href, title }, idx) => (
				<Box key={idx} {...tabProps} tabIndex={0}>
					<StyledNextLink
						href={href}
						color={href === currentRoute ? col2 : col3}
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
