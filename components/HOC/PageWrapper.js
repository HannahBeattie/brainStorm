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
				py={{ base: 4, md: 8 }}
				{...props}
			>
				{children}
			</VStack>
		</FadeIn>
	)
}
