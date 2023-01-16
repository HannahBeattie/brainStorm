import { Container, Grid, GridItem, Image, Text, Heading } from '@chakra-ui/react'
import getGridProps from '~/components/hooks/getGridProps'
import { ImageModal, useImageModal } from '~/components/hooks/UseImageModal'
import StyledNextLink from '~/components/base/StyledNextLink'

export default function Seccond() {
	let items = [
		{
			src: '/static/10.png',
		},
		{
			src: '/static/11.jpeg',
		},
		{
			src: '/static/13.jpeg',
		},
	]
	return (
		<>
			<Container>
				<Heading>Tests: Object Class Method</Heading>
				<Text>
					Here, I have been playing around with creating an Object Class with a range of
					random color and line-width variables.
				</Text>
				<Text>
					The first two images are a response to a prompt by the{' '}
					<i>
						<StyledNextLink
							href='https://www.youtube.com/watch?v=c3TeLi6Ns1E'
							fontStyle={'italic'}
							fontWeight={'bold'}
						>
							Coding Train's{' '}
						</StyledNextLink>
					</i>
					Daniel Shiffman to create a basic drawing app.
				</Text>
				<Text>
					In this drawing app, the color of the object changes on click, based on a
					function that feeds the object a set of random color variables, within a
					small-ish range.
				</Text>
				<Text>
					The third image is an experement in which I tweaked the number of points I gave
					each object, because I wanted to try to create stars.
				</Text>
			</Container>

			<Grid
				gap={{ md: 5, base: '4' }}
				maxW='6xl'
				py={{ md: '6', base: '0' }}
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
		</>
	)
}
