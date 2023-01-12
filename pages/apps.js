import { Grid, GridItem, Heading, Image, Spacer, Text, VStack } from '@chakra-ui/react'
import XIt from '~/components/apps/Exit'
import Intro from '~/components/apps/Intro'
import Monkey from '~/components/apps/Monkey'
import NotAReal from '~/components/apps/NotAReal'
import Focus from '~/components/base/motion/Focus'
import Breathe from '~/components/base/motion/framerMotion/Breathe'
import FadeIn from '~/components/base/motion/framerMotion/FadeIn'
import StyledNextLink from '~/components/base/StyledNextLink'

export default function Web() {
	return (
		<>
			<FadeIn>
				<VStack spacing={'8'} justify={'stretch'} flex={'1'} py={8}>
					<Intro />
					<Monkey />
					<NotAReal />
					<XIt />
				</VStack>
			</FadeIn>
		</>
	)
}

{
	/* <SlideIn>
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
							idx={2}
							buttonText={'Demo'}
							title={'An app to demonstraite'}
							sub={'2022'}
							src={'/apps/mrGood.jpeg'}
							alt={'todo'}
							href={'/'}
							text={'An example website using Contentful'}
							link2={'/'}
							linkTitle={'Link to Github Repo'}
						/>
					</Grid>
				</SlideIn>
				<SlideIn xVal={-300}>
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
							idx={1}
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
				</SlideIn> */
}
