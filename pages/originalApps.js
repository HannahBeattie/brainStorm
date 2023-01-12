import { Container, Grid, GridItem, Heading, Image, Spacer, Text, VStack } from '@chakra-ui/react'
import XIt from '~/components/refator me/Exit'
import Intro from '~/components/apps/Intro'
import Monkey from '~/components/apps/Monkey'
import PhoneLayout from '~/components/apps/PhoneLayout'
import Focus from '~/components/base/motion/Focus'
import Breathe from '~/components/base/motion/framerMotion/Breathe'
import FadeIn from '~/components/base/motion/framerMotion/FadeIn'
import StyledNextLink from '~/components/base/StyledNextLink'
import Slide from '~/components/base/templates/Slide'

export default function Web() {
	return (
		<>
			<FadeIn>
				<VStack>
					<Heading fontSize={'8xl'}>Apps</Heading>
					<Grid gridRowGap={'8'} columnGap={'4'} templateColumns={{ md: 'repeat(2)' }}>
						<GridItem colSpan={'2'}>
							{/* <VStack>
								<Heading>Hello</Heading>
							</VStack> */}
						</GridItem>
						<PhoneLayout
							project={'X-it'}
							linkTitle={'X-it website'}
							src={'/apps/xitApp.png'}
							alt={'xit still'}
							projcetDescription={'hello'}
						/>
						<GridItem colSpan={'2'}>
							{/* <VStack>
								<Heading>Hello</Heading>
							</VStack> */}
						</GridItem>

						<PhoneLayout
							project={'Studio Monkey'}
							linkTitle={'studiomonkey.io'}
							src={'/apps/studioMonkey.png'}
							alt={'studio monkey website still'}
							projcetDescription={'hello'}
						/>
					</Grid>
					<GridItem colSpan={'2'}>
						{/* <VStack>
							<Heading>Hello</Heading>
						</VStack> */}
					</GridItem>
					<VStack p={4}>
						<Grid
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
								buttonText={'Live Demo'}
								title={'Headless CMS Demo'}
								sub={'2022'}
								src={'/apps/dynamic.png'}
								alt={'todo'}
								href={'/'}
								text={'An example website using Contentful'}
								link2={'/'}
								linkTitle={'Link to Github Repo'}
							/>
						</Grid>
					</VStack>
				</VStack>
			</FadeIn>
		</>
	)
}
