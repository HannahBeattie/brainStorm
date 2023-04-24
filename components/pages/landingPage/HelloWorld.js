import { HStack, VStack } from '@chakra-ui/react'
import Appear from '../framerMotion/Appear'
import MapLetters from './MapLetters'

export default function HelloWorld() {
	return (
		<>
			<VStack
				pt={{ base: 14, sm: 0 }}
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
				pt={{ sm: 0, md: 4, lg: 8 }}
				pb={{ md: 8 }}
				display={{ base: 'none', md: 'center' }}
				spacing={{ md: 8 }}
				flex={'1'}
				alignItems={'center'}
				justifyContent={'center'}
				direction={'row'}
			>
				<MapLetters />
			</HStack>
		</>
	)
}
