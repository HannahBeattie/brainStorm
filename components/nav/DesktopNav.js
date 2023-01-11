import { Box, Button, HStack, LinkBox, Tab, useColorModeValue } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React from 'react'
import StyledNextLink from '~/components/base/StyledNextLink'

const wrapProps = {
	display: { base: 'none', sm: 'flex' },
	fontSize: 'md',
	spacing: '8',
}

const tabProps = {
	position: 'relative',
	cursor: 'pointer',
	fontFamily: 'poppins',
	letterSpacing: '0.1em',
}

export default function DesktopNav({ items }) {
	const col = useColorModeValue('black', 'white')
	const [selected, setSelected] = React.useState('')

	return (
		<HStack {...wrapProps}>
			{items.map(({ href, title }, idx) => (
				<Box key={idx} {...tabProps} onClick={() => setSelected(title)} tabIndex={0}>
					<StyledNextLink
						href={href}
						color={
							selected === title
								? useColorModeValue('black', 'white')
								: useColorModeValue('gray.900', 'white')
						}
						fontWeight={selected === title ? 400 : 300}
					>
						{title}
					</StyledNextLink>

					{selected === title ? (
						<motion.div
							style={{
								position: 'absolute',
								bottom: '-1px',
								left: '0px',
								right: 0,
								height: '1.px',
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
