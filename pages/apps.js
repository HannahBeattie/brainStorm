import { Divider, Grid, Text, VStack } from '@chakra-ui/react'
import AppFeature from '~/components/apps/AppFeature'
import LinkWrapper from '~/components/base/LinkWrapper'
import IntroCard from '~/components/base/templates/IntroCard'
import Slide from '~/components/base/templates/Slide'
import Appear from '~/components/framerMotion/Appear'
import ScrollToTop from '~/components/framerMotion/ScrollToTop'
import PageWrapper from '~/components/HOC/PageWrapper'

export default function Web() {
	return (
		<>
			<PageWrapper>
				<ScrollToTop />
				<IntroCard heading={'Apps'}>
					<Text>
						These represent a few of the projects I have completed since graduating from
						Dev Academy Wellington in April of 2022.
					</Text>
				</IntroCard>
				<Divider />
				<Appear style={{ width: '100%' }}>
					<AppFeature
						linkText={'studiomonkey.io'}
						src={'/apps/studioMonkey.png'}
						alt={'Still of studiomonkey.io'}
						title={'Studio Monkey'}
						href={'https://www.studiomomo.io'}
						subtitle={'Brand identity & website'}
					>
						<VStack spacing={4}>
							<Text>
								I had the pleasure of creating a logo and colour storey for
								legendary VFS software company Studio Monkey, as well as
								collaborating with{' '}
								<LinkWrapper href='https://mikeylemmon.com/about'>
									Mikey Lemmon
								</LinkWrapper>{' '}
								to create a website in which users can request a demo---{' '}
								<i>with admin and backend features developed further by Mikey.</i>
							</Text>

							<Text>
								Based in Santa Monica, California, Studio Monkey makes products that
								are minimal, clean, highly intuitive and customer-focused.
							</Text>
							<Text>
								Because of extremely high volume of existing clientele, we were
								instructed not to include product descriptions or advertising of any
								kind on the site and instead create a platform that would funnel
								client information and requests to a studio monkey server.
							</Text>

							<Text>
								I worked in close dialogue with CEO Zach Tucker to create a logo and
								colour story that will continue to fit the brand as it grows and be
								instantly identifiable and highly adaptive, no matter the scale or
								media; We talked about creating something that would look good as a
								small-screen phone icon, as well as on a t-shirt or a hat. We
								settled on something minimal and clean, with an element of
								playfulness intrinsic to Studio Monkey.
							</Text>

							<Text>
								For the website, we generated code that would be highly maintainable
								and readable for others and made sure that the visual elements could
								remain intact as the site continued to evolve (for instance, adding
								a nav bar where we knew an admin panel would eventually go).
							</Text>
						</VStack>
					</AppFeature>
				</Appear>
				<Divider />
				<Appear style={{ width: '100%' }}>
					<AppFeature
						linkText={'X-it.vercel.app'}
						src={'/apps/xitApp.png'}
						alt={'Still x-it homepage'}
						title={'X-it'}
						subtitle={'Using my social anxiety to create a Google Plug-in'}
						href={'https://x-it.vercel.app'}
					>
						<VStack spacing={4}>
							<Text>
								For my final project as a student at Dev Academy Wellington, I
								wanted to push myself, so I opted to work alone and use a tool that
								we had not touched on in class; X-it is a lightweight plug-in
								written with &apos;Google&apos;Apps Script. When integrated into
								your G suite calendar, it allows users to anonymously &apos;opt
								out&apos; of upcoming events.
							</Text>

							<Text>
								If everyone &apos;opts out&apos;, it cancels the engagement and,
								with the correct permissions, informs users that the event has been
								cancelled via email.
							</Text>
							<Text>
								I also created a website and short video with the help of Pexles.com
								&apos;s free use stock footage, which can be viewed at the link
								below.
							</Text>
							<Text>
								While X-it is functional, it is in beta testing mode; I am
								interested in developing it further by adding data encryption as
								well as researching the possibilities of a similar IOS plug-in.
							</Text>
						</VStack>
					</AppFeature>
				</Appear>
				<Divider />
				<Appear style={{ width: '100%' }}>
					<AppFeature
						subtitle={'Leaning through doing'}
						src={'/apps/not.png'}
						alt={'Still of not-a-real-website'}
						title={'Not a real website'}
						href={'https://not-a-real-website.vercel.app/'}
					>
						<VStack spacing={4}>
							<Text>
								Not-a-real-project was an app that I created with the intention of
								learning how to use a headless CMS and generate dynamic API routes.
							</Text>
							<Text>
								I took the opportunity to create some custom components, play with
								style and consider how I might go about creating a site that could
								display and adapt to content later added by a client, through an
								admin panel.{' '}
							</Text>
							<Text>
								This was my first opportunity to consider how I might layout a
								codebase with multiple media types, that would remain maintainable.
							</Text>
							<Text>
								It also gave me an opportunity to consider how I might go about
								adapting components to different screen sizes, without replicating
								data and making it less maintainable later on.{' '}
							</Text>
							<Text fontWeight={'bold'} fontStyle={'italic'}>
								Check out demo and source code below.
							</Text>
						</VStack>
					</AppFeature>
				</Appear>

				<Appear>
					<Grid
						py={{ md: 2 }}
						px={{ md: 2 }}
						_hover={{ boxShaddow: 'dark-xl' }}
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
							buttonText={'Open demo'}
							title={<i>Not-a-real-demo</i>}
							sub={'With contentful and Next.js'}
							src={'/apps/dynamic.png'}
							alt={'todo'}
							href={'https://not-a-real-website.vercel.app/'}
							text={'Example website'}
							href2={'https://github.com/HannahBeattie/not-a-real-website'}
							link2Title={'See source code'}
						/>
					</Grid>
				</Appear>
			</PageWrapper>
		</>
	)
}
