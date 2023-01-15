import { Container, Grid, GridItem, Heading, Image, Text, VStack } from '@chakra-ui/react'
import getGridProps from '~/components/hooks/getGridProps'
import IntroCard from './base/templates/IntroCard'
import Appear from './framerMotion/Appear'
import PageWrapper from './HOC/PageWrapper'

export default function WaterColors() {
	let items = [
		{
			src: '/waterCol/1.JPG',
		},
		{
			src: '/waterCol/4.JPG',
		},

		{
			src: '/waterCol/5.JPG',
		},
		{
			src: '/waterCol/6.JPG',
		},

		{
			src: '/waterCol/8.JPG',
		},
		{
			src: '/waterCol/3.JPG',
		},
		{
			src: '/waterCol/2.JPG',
		},
		{
			src: '/waterCol/9.JPG',
		},
		{
			src: '/waterCol/10.JPG',
		},
	]
	return (
		<>
			<Appear width={{ width: '100vw' }}>
				<IntroCard heading={'WaterColors'}>
					<Text>
						One of my hobbies for the last few years has been water color painting.
					</Text>
					<Text>
						I was particularly drawn to watercolors because of the lack of control and
						experiance I had with them.
					</Text>
					<Text>
						As someone who tends towards perfectionism, watecolors are a great way to
						relinquish control.
					</Text>
					<Text>
						They are are, by nature, a fast-drying medium with a huge range of chaotic,
						uncontrolable factors. For instance; Water and pigment mix diffirently
						according to humidity, the grain of the paper and the motion of the pen.
					</Text>
					<Text>
						Diffirent brands of paints may dry diffirntly and the color of the pigment
						looks significantly diffirent dry to wet.
					</Text>
					<Text>
						Because of this, I see the process of painting as more to do with noticing
						what the watercolors are doing and responding to that, rather than trying to
						'control' them.
					</Text>
				</IntroCard>
			</Appear>

			<Appear>
				<Grid
					gap={{ md: 5, base: '4' }}
					maxW='5xl'
					py={{ md: '4', base: '0' }}
					templateColumns={{ md: 'repeat(3, 1fr)' }}
					templateRows={{
						md: `repeat(${Math.floor((items.length * 2) / 3)}, 300px)`,
					}}
				>
					{items.map((items, idx) => (
						<GridItem key={idx} {...getGridProps(idx)}>
							<Image
								borderRadius={'md'}
								w='100%'
								boxShadow={'dark'}
								h='100%'
								flex='1'
								alt={`index ${idx}`}
								src={items.src}
								fit='cover'
							/>
						</GridItem>
					))}
				</Grid>
			</Appear>
		</>
	)
}
