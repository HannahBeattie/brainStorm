import { Box, Image, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import Snail from '../framerMotion/Snail'

export default function MovingSnail() {
	return (
		<Box className='specialCaseNoSelect' p={4}>
			<Snail>
				<Image
					className='specialCaseNoSelect'
					userSelect={'none'}
					pointerEvents={'none'}
					filter={'auto'}
					invert={useColorModeValue(0, 100)}
					h={100}
					alt={'Snail line drawing'}
					src={'/snail.png'}
				/>
			</Snail>
		</Box>
	)
}
