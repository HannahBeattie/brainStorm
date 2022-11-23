import { Grid, VStack } from '@chakra-ui/react'
import React from 'react'
import SlideX from '~/components/base/SlideX'
import Projects from '~/components/web/Projects'

export default function Web() {
	return (
		<VStack alignItems={'stretch'} spacing={'8'}>
			<Grid
				pt={{ sm: 16 }}
				px={{ sm: 8 }}
				rowGap={{ sm: '8' }}
				templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }}
				templateRows={{
					base: `repeat 200px 300px)`,
					md: `repeat 280px)`,
				}}
			>
				<SlideX
					idx={10}
					buttonText={'trap'}
					title={'todo! fill'}
					sub={'2022'}
					src={'/replace.png'}
					alt={'todo'}
					href={'/'}
					text={'this is filler text!'}
				/>
			</Grid>
			<Projects />
		</VStack>
	)
}
