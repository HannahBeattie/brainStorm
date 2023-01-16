import { Heading } from '@chakra-ui/react'
import React from 'react'
import Appear from '../framerMotion/Appear'

function HelloWorld() {
	return (
		<Appear width={{ width: '100vw' }}>
			<Heading
				fontWeight={'900'}
				fontFamily={'Alice'}
				fontSize={{ base: 80, sm: 80, md: 90 }}
				textAlign={{ base: 'center', sm: 'auto' }}
				py={{ base: 4, md: 8 }}
				pb={{ md: 10, base: 10 }}
				lineHeight={{ base: '0.9', md: 1 }}
			>
				Hello World
			</Heading>
		</Appear>
	)
}

export default HelloWorld
