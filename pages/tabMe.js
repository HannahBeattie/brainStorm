// import { Box, useColorModeValue } from '@chakra-ui/react'
// import { motion } from 'framer-motion'
// import React from 'react'
// import StyledNextLink from '~/components/base/StyledNextLink'

// const wrapProps = {
// 	display: 'flex',
// 	alignItems: 'center',
// 	padding: '8px 16px',
// 	borderRadius: '8px',
// 	width: 'fit-content',
// 	gap: '32px',
// }

// const tabProps = {
// 	position: 'relative',
// 	cursor: 'pointer',
// 	fontFamily: 'poppins',
// 	letterSpacing: '0.1em',
// }

// export default function TabMe({items}) {
// 	const [selected, setSelected] = React.useState(null)

// 	return (
// 		<Box {...wrapProps}>
// 			{items.map(({ href, title }, idx) => (
// 				<Box key={idx} {...tabProps} onClick={() => setSelected(title)} tabIndex={0}>
// 					<StyledNextLink href={'/tabMe'} fontWeight={selected === title ? '500' : '400'}>
// 						{title}
// 					</StyledNextLink>

// 					{selected === title ? (
// 						<motion.div
// 							style={{
// 								position: 'absolute',
// 								bottom: '-1px',
// 								left: '0px',
// 								right: 0,
// 								height: '2px',
// 								background: 'gray',
// 								zIndex: 0,
// 							}}
// 							layoutId='underline'
// 						/>
// 					) : null}
// 				</Box>
// 			))}
// 		</Box>
// 	)
// }
