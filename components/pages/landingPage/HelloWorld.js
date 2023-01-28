import { HStack, VStack } from '@chakra-ui/react'
import Appear from '../framerMotion/Appear'
import MapLetters from './MapLetters'

export default function HelloWorld() {
	return (
		<>
			<VStack
				pb={{ base: 8 }}
				display={{ base: 'flex', md: 'none' }}
				spacing={{ base: 0, md: 8 }}
				flex={'1'}
				alignItems={'center'}
				justifyContent={'center'}
				direction={{ base: 'column', md: 'row' }}
				className={'specialCaseNoSelect'}
				area-label={'Animated Text reading : "Hello World"'}
			>
				<MapLetters />
			</VStack>

			<HStack
				pt={8}
				pb={12}
				display={{ base: 'none', md: 'center' }}
				spacing={{ base: 0, md: 8 }}
				flex={'1'}
				alignItems={'center'}
				justifyContent={'center'}
				direction={{ base: 'column', md: 'row' }}
			>
				<MapLetters />
			</HStack>
		</>
	)
}
