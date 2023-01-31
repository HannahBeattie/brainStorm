import { Box, Divider, Image, Spacer, Text, Tooltip, VStack } from '@chakra-ui/react'
import Head from 'next/head'
import LinkWrapper from '~/components/base/LinkWrapper'
import StyledNextLink from '~/components/base/StyledNextLink'
import IntroCard from '~/components/base/templates/IntroCard'
import PageWrapper from '~/components/HOC/PageWrapper'
import AppFeature from '~/components/pages/apps/AppFeature'
import Appear from '~/components/pages/framerMotion/Appear'
import ScrollToTop from '~/components/pages/framerMotion/ScrollToTop'

export default function Web() {
	let pt = 4
	let spacing = 4
	let lineH = 8
	let textProps = {
		lineHeight: lineH,
		spacing: spacing,
		fontWeight: 'medium',
		alignItems: 'stretch',
	}
	const addToLinkProps = {
		fontWeight: 'xl',
		textDecoration: 'underline',
		_hover: { textDecoration: 'underline' },
		target: 'blank',
	}
	return (
		<>
			<Head>
				<title>Apps / Projects</title>
				<meta name='description' content='Portfolio website' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<PageWrapper>
				<ScrollToTop />
				<VStack>
					<IntroCard heading={'Apps'}>
						<Text fontSize={'xl'} fontWeight={'lg'} pb={{ md: 0, base: 4 }}>
							These are some of the projects that I have completed since graduating
							from Dev Academy in April, 2022.
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
						showCredit={'true'}
						subtitle={'Organise early. Organise often.'}
					>
						<VStack {...textProps}>
							<Text>
								Created by VFX Supervisor{' '}
								<StyledNextLink
									href={'https://www.imdb.com/name/nm1005090/'}
									{...addToLinkProps}
								>
									Zach Tucker
								</StyledNextLink>
								, Studio Monkey is a suite of tools and integrations that enable
								film and television studios to automate management of their
								production data, and it is rapidly being adopted and relied on by
								many of the biggest media companies in the world — I&apos;m not at
								liberty to divulge which ones, but they&apos;re names you&apos;d
								instantly recognise!
							</Text>
							<Text>
								Faced with ever-accelerating demand, Studio Monkey needed a new
								website to host documentation and handle intake of potential new
								clients, as well as to better establish brand identity. After
								helping Zach to identify the core asthetic philosophies, values, and
								ideas that he had in mind, I provided him with a wide set of initial
								concepts for logos, colour, and typography, and then worked with him
								to reduce, focus, and refine his favourite concepts down to the
								final form — a clean, playful design that captures the feelings of
								lightness and reliable-professionality he was hoping to convey.
							</Text>
							<Text>
								With the design sorted, my collaborator Mikey and I set about
								building the website using Next.js, with Vercel for hosting. We used
								the gitflow approach for repository management, utilising GitHub PRs
								to perform code review on all changes before merging into the
								development branch.
							</Text>
							<Text>
								I was responsible for implementing the landing page and core layout
								for the site, and used{' '}
								<StyledNextLink href={'https://chakra-ui.com/'} {...addToLinkProps}>
									Chakra UI
								</StyledNextLink>{' '}
								to create a library of accessible, mobile-friendly components to
								enable the site to be expanded in the future in a way that is
								maintainable and stylistically consistent.
							</Text>
							<Text>
								This was my first job as a web developer, and I am pretty satisfied
								with the results.
							</Text>
						</VStack>
					</AppFeature>
				</Appear>
				<Divider />
				<Appear style={{ width: '100%' }}>
					<AppFeature
						linkText={'x-it.vercel.app'}
						src={'/apps/xitApp.png'}
						alt={'Still x-it homepage'}
						title={'x-it'}
						subtitle={'Your solution to unwanted meetings'}
						href={'https://x-it.vercel.app'}
						linkText2={'Source Code'}
						href2={'https://github.com/HannahBeattie/x-it'}
					>
						<VStack {...textProps}>
							<Text>
								For my final (solo) project at dev academy wellington I decided to
								turn my social anxiety into an app.
							</Text>
							<Text>
								x-it is a lightweight calendar plugin (specifically: a Google
								Workspace Add-on) written in Google Apps Script.
							</Text>
							<Text>
								I also created a launch website and ad (with liberal use of free
								stock videos from pexels.com), which pokes a little good-humoured
								fun at the advertising conventions around social media tech
								start-ups; By using those same conventions to present something that
								could easily be considered a form of antisocial media.
							</Text>
							<Text>
								Under the hood, x-it uses{' '}
								<LinkWrapper href={'https://fauna.com/'} {...addToLinkProps}>
									fauna DB
								</LinkWrapper>{' '}
								and{' '}
								<LinkWrapper href={'https://graphql.org/'} {...addToLinkProps}>
									Graph QL
								</LinkWrapper>
								.
							</Text>
							<Text pt={pt}>
								I haven&apos;t published the Workspace Add-On to the Google
								marketplace yet, but you can get it up and running by following the
								instructions in the Installation section of the repo&apos;s README.
							</Text>
						</VStack>
					</AppFeature>
				</Appear>
				<Divider />
				<Appear style={{ width: '100%' }}>
					<AppFeature
						subtitle={'A love letter to Next.js'}
						src={'/apps/not.png'}
						alt={'Still of not-a-real-website homepage'}
						title={'Not a real website'}
						href={'https://not-a-real-website.vercel.app/'}
						linkText={'Live Demo'}
						linkText2={'Source Code'}
						href2={'https://github.com/HannahBeattie/not-a-real-website'}
					>
						<VStack {...textProps}>
							<Text>
								Not a real website is a Next.js app that I created to practice using
								GraphQL and a headless CMS. The site generates dynamic routes based
								on data stored in Contentful.
							</Text>
							<Text>
								I took the opportunity to create some custom components, play with
								style, and experiment with creating a site that adapts dynamically
								to content served from a headless CMS.
							</Text>
							<Text>
								Hint: Try toggling light and dark mode to switch from business mode
								to casual.
							</Text>
						</VStack>
					</AppFeature>
				</Appear>
				<Divider />
				<Spacer p={{ base: 4, md: 2 }} />
				<IntroCard heading={'Current projects'}>
					<Text>
						For the last couple of weeks weeks, I have been learning about data syncing
						and authentication, using <b>firebase auth services</b> and{' '}
						<b>firebase realtime database</b>.
					</Text>
					<Text>I am making a simple mood-tracking app with Next.js and Typescript.</Text>

					<Text>
						Currently, users can log-in with google, track their current mood and leave
						a small note.
					</Text>
					<Box py={{ md: 8, base: 4 }}>
						<Image
							boxShadow={'lg'}
							src={'/apps/one.png'}
							alt={'mood app'}
							borderRadius={'10'}
						/>
					</Box>
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

					<Text pt={pt}>
						I have also been dipping my toes (gingerly) into the world of react native,
						using expo and <b>native base</b>.
					</Text>
				</IntroCard>
			</PageWrapper>
		</>
	)
}
