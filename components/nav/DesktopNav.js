import { Box, HStack, useColorModeValue } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import StyledNextLink from '~/components/base/StyledNextLink'

const wrapProps = {
	display: { base: 'none', lg: 'flex' },
	fontSize: { sm: 'sm', md: 'md' },
	spacing: { sm: '4', md: '8' },
}

const tabProps = {
	position: 'relative',
	cursor: 'pointer',
	fontFamily: 'SF Pro',
	letterSpacing: { md: '0.1em' },
}

export default function DesktopNav({ items }) {
	const router = useRouter()
	const currentRoute = router.pathname
	const col = useColorModeValue('teal', 'red')

	return (
		<HStack {...wrapProps}>
			{items.map(({ href, title }, idx) => (
				<Box key={idx} {...tabProps} tabIndex={0}>
					<motion.div whileHover={{ scale: 1.05 }} transition={{ ease: 'easeInOut' }}>
						<StyledNextLink
							fontFamily={'SF Pro'}
							href={href}
							color={
								href === currentRoute
									? useColorModeValue('teal', 'red')
									: useColorModeValue('gray.600', 'gray.200')
							}
							_hover={{ color: useColorModeValue('black', 'white') }}
							fontWeight={href === currentRoute ? 500 : 400}
						>
							{title}
						</StyledNextLink>
					</motion.div>

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
