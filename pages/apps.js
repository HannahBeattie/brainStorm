import { Container, Grid, Heading, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import Slide from '~/components/base/templates/Slide'
import Projects from '~/components/Portfolio'

export default function Web() {
	return (
		<VStack spacing={'8'} justify={'center'} py={8}>
			<Heading>Web Development</Heading>
			<Container alignSelf={'center'}>
				<VStack spacing={'4'}>
					<Text align={'start'} fontFamily={'Poppins'}>
						Since graduating at Dev Acadamy in April 2022, I have been focused on
						sharpning my skillset and adapting it to new tools, as well as developing a
						clear set of asthetic principals.
					</Text>
					<Text align={'start'} fontFamily={'Poppins'}>
						I am interested in clean, functional design that includes suprising,
						creative and humorous moments.
					</Text>
					<Text align={'start'} fontFamily={'Poppins'}>
						Rather than leaning into gimmic or flashy, overpowering elements, that can
						intrude on the functionality and acceccability of a site, I am curious about
						the ways that minimal, functional language can be combined with optional,
						whimsical interactions.
					</Text>
					<Text align={'start'} fontFamily={'Poppins'}>
						I think most people are exausted by intrusive, impersonal, cynical
						advertising.
					</Text>
					<Text align={'start'} fontFamily={'Poppins'}>
						Increasingly there is a desire for something playful, personal and real.
					</Text>
					<Text align={'start'} fontFamily={'Poppins'}>
						The tech landscape provides us with so many exciting tools of connection.
					</Text>
					<Text align={'start'} fontFamily={'Poppins'}>
						I am excited about creating things that feel meaningful, exciting and
					</Text>
				</VStack>
			</Container>
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
				<Slide
					idx={10}
					buttonText={'Demo'}
					title={'Headless CMS Demo'}
					sub={'2022'}
					src={'/apps/mrGood.jpeg'}
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
