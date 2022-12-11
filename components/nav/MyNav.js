import { HStack, Icon, Spacer, Text } from '@chakra-ui/react'
import React from 'react'
import { SiCircle } from 'react-icons/si'
import MyLink from '../MyLink'

function MyNav() {
	const iconProps = {
		fontSize: '3xl',
		color: 'gray.300',
		_dark: { color: 'gray.100' },
	}
	const hProps = {
		px: '4',
		py: '2',
		w: '100%',
		color: 'gray.400',
		spacing: '8',
		textTransform: 'uppercase',
		fontSize: 'sm',
	}
	return (
		<HStack {...hProps}>
			<MyLink href={'/'}>
				<Icon as={SiCircle} {...iconProps} />
			</MyLink>
			<Spacer />
			<Text>about</Text>
			<Text>dev stuff</Text>
			<MyLink href={'/characters'}>
				<Text>character design</Text>
			</MyLink>
			<Text>paintings</Text>
		</HStack>
	)
}

export default MyNav
