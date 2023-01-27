import { Divider, Grid, Text, Tooltip, VStack } from '@chakra-ui/react'
import AppFeature from '~/components/pages/apps/AppFeature'
import LinkWrapper from '~/components/base/LinkWrapper'
import IntroCard from '~/components/base/templates/IntroCard'
import Slide from '~/components/base/templates/Slide'
import Appear from '~/components/pages/framerMotion/Appear'
import ScrollToTop from '~/components/pages/framerMotion/ScrollToTop'
import PageWrapper from '~/components/HOC/PageWrapper'
import StyledNextLink from '~/components/base/StyledNextLink'

export default function Web() {
	let pt = 4
	let spacing = 4
	let lineH = 8
	let textProps = {
		lineHeight: lineH,
		spacing: spacing,
		fontWeight: 'medium',
	}
	return (
		<>
			<PageWrapper>
				<ScrollToTop />
				<VStack>
					<IntroCard heading={'Apps'}>
						<Text fontSize={'xl'} fontWeight={'lg'}>
							These are some of the projects that I have completed since graduating
							from Dev Academy in April, 2022.
						</Text>
						<Text pt={pt}>
							I have also been playing around with authentication using{' '}
							<b>firebase</b> and <b>React Firebase Hooks</b>.
						</Text>
						<Text>
							{' '}
							I have been making a simple mood-tracking app that allows users to
							log-in and track their moods, as well as displaying their previosly
							tracked moods.
						</Text>
						<Tooltip
							label={
								'Special thanks to Mikey Lemmon for helping me refactor & combine my db hooks.'
							}
						>
							<Text>
								You can find the unfinished project on
								<StyledNextLink
									href={'https://github.com/HannahBeattie/firebaseLogin'}
									fontWeight={'bold'}
								>
									{' '}
									my github.*
								</StyledNextLink>
							</Text>
						</Tooltip>

						<Text pb={8}>
							I am also tentatively dipping my toes into the world of React Native,
							with a looming sense of excitement and dread.
						</Text>
					</IntroCard>
				</VStack>
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
						<VStack {...textProps}>
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
						<VStack {...textProps}>
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
						linkText={'Live Demo'}
					>
						<VStack {...textProps}>
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
							<LinkWrapper
								href={'https://github.com/HannahBeattie/not-a-real-website'}
							>
								Source Code
							</LinkWrapper>
						</VStack>
					</AppFeature>
				</Appear>
			</PageWrapper>
		</>
	)
}
