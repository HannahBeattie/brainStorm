import { Heading } from '@chakra-ui/react'
import React from 'react'
import Appear from '../framerMotion/Appear'

function HelloWorld() {
	return (
		<Appear width={{ width: '100vw' }}>
			<Heading
				fontWeight={'900'}
				fontFamily={'Alice'}
				fontSize={{ base: 80, sm: 100, md: 90, lg: 110 }}
				textAlign={{ base: 'center', sm: 'auto' }}
				py={{ base: 4, sm: 6, md: 8, lg: 10 }}
				pb={{ base: 10, sm: 12, md: 10 }}
				lineHeight={{ base: '0.9', md: 1 }}
			>
				Hello World
			</Heading>
		</Appear>
	)
}

export default HelloWorld
