import { Container, Divider, Grid, Heading, HStack, Image, Text, VStack } from '@chakra-ui/react'
import MinimalLayout from '~/components/apps/MinimalLayout'
import FadeIn from '~/components/base/motion/framerMotion/FadeIn'
import Slide from '~/components/base/templates/Slide'

export default function Web() {
	return (
		<>
			<FadeIn>
				<VStack flex={'1'} spacing={'8'} pt={{ md: 8 }}>
					<VStack>
						<Heading fontSize={'8xl'}>Hello</Heading>
						<Container>
							<VStack fontSize={'lg'} fontWeight={'light'}>
								<Text>Here are a few of my recent projects.</Text>
							</VStack>
						</Container>
					</VStack>
					<MinimalLayout
						linkText={'studiomonkey.io'}
						src={'/apps/studioMonkey.png'}
						alt={'Still of studiomonkey.io'}
						title={'studioMonkey'}
						href={'https://www.studiomomo.io'}
					>
						<Text>
							Studio Monkey is a premier VFX management tool used my many high profile
							studios. I worked in close dialog with CEO Zach Tucker to create a
							visual brand identity, logo and website aesthetic that fit the ethos and
							intention of the company — functional, minimal, playful and highly
							customer-focused. The website was a collaboration between myself and
							Mikey Lemmon who handled the backend functionality and software
							integration, while I focused on the landing page and sustaining a
							constant visual and colour story.
						</Text>
					</MinimalLayout>
					<MinimalLayout
						linkText={'X-it'}
						src={'/apps/xitApp.png'}
						alt={'Still x-it homepage'}
						title={'X-it'}
						href={'https://x-it.vercel.app'}
					>
						<Text>
							X-it is a lightweight plug-in that allows users to vote ‘out’ of
							upcoming calendar events, anonymously.
						</Text>

						<Text>
							This project (and accompanying website) constituted my final (solo)
							submission for Dev Academy Aotearoa.
						</Text>

						<Text>
							X-it will continue to evolve, with the collaborative effort of Mikey
							Lemmon.
						</Text>
					</MinimalLayout>

					<MinimalLayout
						linkText={'X-it'}
						src={'/apps/not.png'}
						alt={'Still of not-a-real-website'}
						title={'Not a real website'}
						href={'https://not-a-real-website-m3esc60c0-daddydev.vercel.app/'}
					>
						<Text>
							Welcome to Not a real website, an application that uses NEXT.js and
							Contentful, a headless CMS, to demonstrate how these tools may be used
							for something that is a real website.
						</Text>
					</MinimalLayout>
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
							idx={2}
							buttonText={'Open'}
							title={<i>Not-a-real-demo</i>}
							sub={'With contentful and Next.js'}
							src={'/apps/dynamic.png'}
							alt={'todo'}
							href={'https://not-a-real-website.vercel.app/'}
							text={'Example website'}
							link2={'https://github.com/HannahBeattie/not-a-real-website/find/main'}
							linkTitle={'See source code'}
						/>
					</Grid>
				</VStack>
			</FadeIn>
		</>
	)
}
