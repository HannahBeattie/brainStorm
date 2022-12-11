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
				rowGap={{ md: '8' }}
				templateColumns={{
					base: 'repeat(1, 1fr)',
					md: 'repeat(3, 1fr)',
				}}
				templateRows={{
					base: `repeat 200px 300px)`,
					md: `repeat 280px)`,
				}}
			>
				<SlideX
					idx={10}
					buttonText={'Demo'}
					title={'Headless CMI Demo'}
					sub={'2022'}
					src={'/portfolio/mrGood.jpeg'}
					alt={'todo'}
					href={'/'}
					text={'An example website using Contentful'}
					link2={'/'}
					linkTitle={'Link to Github Repo'}
				/>
			</Grid>
			<Projects />
		</VStack>
	)
}
