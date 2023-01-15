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
				spacing={0}
				pt={{ base: 0, md: 8 }}
				py={{ base: 4, md: 'undefined' }}
				{...props}
			>
				{children}
			</VStack>
		</FadeIn>
	)
}
