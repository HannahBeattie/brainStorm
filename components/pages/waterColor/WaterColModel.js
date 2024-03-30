import { Grid, GridItem, Image } from '@chakra-ui/react'
import getGridProps from '~/components/hooks/getGridProps'
import Appear from '../framerMotion/Appear'

export default function WaterColModel() {
	const items = [
		{
			src: '/waterCol/11.jpg',
			alt: 'A watercolor of a couple sleeping',
		},
		{
			src: '/waterCol/1.JPG',
			alt: 'A watercolor of a couple sleeping',
		},
		{
			src: '/waterCol/4.JPG',
			alt: 'A watercolor of two sets of feet from side on. One set balances on their toes.',
		},

		{
			src: '/waterCol/5.JPG',
			alt: 'A watercolor of a frong amongst leaves.',
		},
		{
			src: '/waterCol/6.JPG',
			alt: 'A watercolor of a female house sparrow',
		},

		{
			src: '/waterCol/8.JPG',
			alt: 'A watercolor of a Kingfisher',
		},
		{
			src: '/waterCol/3.JPG',
			alt: 'A watercolor of leaves with gold leaf detail.',
		},
		{
			src: '/waterCol/2.JPG',
			alt: 'A watercolor of a Kingfisher',
		},
		{
			src: '/waterCol/9.JPG',
			alt: 'A watercolor of cacti',
		},
		{
			src: '/waterCol/10.JPG',
			alt: 'A watercolor of a sleeping man, with a hand placed on his head.',
		},
	]
	return (
		<Appear>
			<Grid
				aria-label='Watercolor Images'
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
							alt={items.alt}
							src={items.src}
							fit='cover'
						/>
					</GridItem>
				))}
			</Grid>
		</Appear>
	)
}
