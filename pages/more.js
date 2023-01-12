import { Text, VStack } from '@chakra-ui/react'
import React from 'react'
import HelloWorld from '~/components/landingPage/HelloWorld'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function More() {
	return (
		<VStack
			className={'gradient'}
			flex={'1'}
			alignSelf='stretch'
			justify='stretch'
			px={4}
			py={'4'}
			spacing={'8'}
		>
			<HelloWorld color={'white'}>more</HelloWorld>
		</VStack>
	)
}
