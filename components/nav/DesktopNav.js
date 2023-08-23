import { Box, HStack, Spacer, useColorModeValue } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import StyledNextLink from '~/components/base/StyledNextLink'

const wrapProps = {
	px: { md: 4 },
	display: { base: 'none', lg: 'flex' },
	fontSize: { sm: 'sm', md: 'md' },
	spacing: { sm: '4', md: '8' },
}

const tabProps = {
	position: 'relative',
	cursor: 'pointer',
	letterSpacing: { md: '0.1em' },
}

export default function DesktopNav({ items }) {
	const col = useColorModeValue('teal', 'teal.400')
	const col1 = useColorModeValue('teal', 'teal.400')
	const col2 = useColorModeValue('gray.600', 'gray.200')
	const col3 = useColorModeValue('black', 'white')
	const router = useRouter()
	const currentRoute = router.pathname

	return (
		<HStack {...wrapProps}>
			{items.map(({ href, title }, idx) => (
				<Box key={idx} {...tabProps} tabIndex={0}>
					<motion.div whileHover={{ scale: 1.05 }} transition={{ ease: 'easeInOut' }}>
						<StyledNextLink
							href={href}
							color={href === currentRoute ? col1 : col2}
							_hover={{ color: col3 }}
							fontWeight={href === currentRoute ? 500 : 600}
							fontSize={'sm'}
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
			<Spacer />
		</HStack>
	)
}
