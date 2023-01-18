import { VStack } from '@chakra-ui/react'
import React from 'react'
import FadeIn from './FadeIn'

export default function PageWrapper({ children, props }) {
	return (
		<FadeIn>
			<VStack
				flex={'1'}
				alignSelf='stretch'
				justify='center'
				pt={{ base: 0, md: 4 }}
				py={{ base: 0, md: 'undefined' }}
				spacing={{ base: 0 }}
				{...props}
			>
				{children}
			</VStack>
		</FadeIn>
	)
}
