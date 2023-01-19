import { Grid, GridItem, Image } from '@chakra-ui/react'
import getGridProps from '~/components/hooks/getGridProps'
import Appear from '../framerMotion/Appear'
export default function WaterColModel() {
	const items = [
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
	)
}
