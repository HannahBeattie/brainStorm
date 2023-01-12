import {
	Box,
	Center,
	Container,
	Divider,
	Grid,
	GridItem,
	Heading,
	HStack,
	Image,
	Spacer,
	Text,
	VStack,
} from '@chakra-ui/react'
import Focus from '~/components/base/motion/Focus'
import Appear from '~/components/base/motion/framerMotion/Appear'
import Breathe from '~/components/base/motion/framerMotion/Breathe'
import FadeIn from '~/components/base/motion/framerMotion/FadeIn'
import Pulse from '~/components/base/motion/framerMotion/Pulse'
import StyledNextLink from '~/components/base/StyledNextLink'

export default function Web() {
	return (
		<>
			<FadeIn>
				<VStack spacing={'8'} justify={'stretch'} flex={'1'} py={8}>
					<Heading>Web Development</Heading>
					<Appear>
						<Container alignSelf={'center'}>
							<VStack spacing={'4'}>
								<Text align={'start'} fontFamily={'Poppins'}>
									Since graduating at Dev Acadamy in April 2022, I have been
									focused on sharpning my skillset and adapting it to new tools,
									as well as developing a clear set of asthetic principals.
								</Text>
								<Text align={'start'} fontFamily={'Poppins'}>
									I am interested in clean, functional design that includes
									suprising, creative and humorous moments.
								</Text>
								<Text align={'start'} fontFamily={'Poppins'}>
									Rather than leaning into gimmic or flashy, overpowering
									elements, that can intrude on the functionality and
									acceccability of a site, I am curious about the ways that
									minimal, functional language can be combined with optional,
									whimsical interactions.
								</Text>
								<Text align={'start'} fontFamily={'Poppins'}>
									I think most people are exausted by intrusive, impersonal,
									cynical advertising.
								</Text>
								<Text align={'start'} fontFamily={'Poppins'}>
									Increasingly there is a desire for something playful, personal
									and real.
								</Text>
								<Text align={'start'} fontFamily={'Poppins'}>
									The tech landscape provides us with so many exciting tools of
									connection.
								</Text>
								<Text align={'start'} fontFamily={'Poppins'}>
									I am excited about creating things that feel meaningful,
									exciting and
								</Text>
							</VStack>
						</Container>
					</Appear>
					<Divider />

					<VStack flex={'1'} spacing={'4'}>
						<Heading>Not a real website</Heading>
						<VStack>
							<Text>
								An app that uses a headless CMS & dynamic routes to display images
							</Text>
							<Grid templateColumns={{ md: 'repeat(2, 1fr)' }} p={10}>
								<GridItem>
									<Focus>
										<StyledNextLink
											target={'blank'}
											href={
												'https://not-a-real-website-m3esc60c0-daddydev.vercel.app/'
											}
										>
											<Image
												alt={
													'The mobile landing page of the not-a-real-website next app'
												}
												boxShadow={'dark'}
												borderColor={'grayAlpha.100'}
												borderRadius={'md'}
												src={'/apps/not.png'}
												_hover={{ boxShadow: 'dark-lg' }}
											/>
										</StyledNextLink>
									</Focus>
								</GridItem>
								<GridItem>
									<VStack
										flex={'1'}
										py={20}
										borderRadius={'20'}
										boxShadow={'3xl'}
										bg={'grayAlpha.100'}
										h={'100%'}
									>
										<VStack spacing={10}>
											<VStack flex={'1'} px={20} spacing={4}>
												<Heading>About</Heading>
												<Text>
													After heading about dynamic routes and being
													thoroughly confused and excited about how they
													worked, I decided I wanted to try them out.
												</Text>
												<Text>
													I had also been curious about headless CMS
													intergration, so I decided to kill to birds with
													one stone and create an app, with which to learn
													both.
												</Text>
											</VStack>
											<Spacer />
											<VStack spacing={0}>
												<Heading py={4}>Links</Heading>
												<Breathe>
													<StyledNextLink
														fontStyle={'italic'}
														_hover={{ textDecoration: 'underline' }}
														fontSize={'xl'}
														target={'blank'}
														href={
															'https://not-a-real-website-m3esc60c0-daddydev.vercel.app/'
														}
													>
														Live Demo
													</StyledNextLink>
												</Breathe>
												<Breathe>
													<StyledNextLink
														fontStyle={'italic'}
														target={'blank'}
														_hover={{ textDecoration: 'underline' }}
														fontSize={'xl'}
														href={
															'https://github.com/HannahBeattie/not-a-real-website/find/main'
														}
													>
														Source Code
													</StyledNextLink>
												</Breathe>
											</VStack>
										</VStack>
									</VStack>
								</GridItem>
							</Grid>
						</VStack>
					</VStack>
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
