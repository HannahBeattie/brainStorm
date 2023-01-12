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
import Intro from '~/components/apps/Intro'
import Focus from '~/components/base/motion/Focus'
import Appear from '~/components/base/motion/framerMotion/Appear'
import Breathe from '~/components/base/motion/framerMotion/Breathe'
import FadeIn from '~/components/base/motion/framerMotion/FadeIn'
import Pulse from '~/components/base/motion/framerMotion/Pulse'
import StyledNextLink from '~/components/base/StyledNextLink'
import SmallFocus from '../base/motion/SmallFocus'

function NotAReal() {
	return (
		<VStack flex={'1'} spacing={'4'}>
			<Heading>Not a real website</Heading>
			<VStack>
				<Text>An app that uses a headless CMS & dynamic routes to display images</Text>
				<Grid templateColumns={{ md: 'repeat(2, 1fr)' }} p={20} columnGap={'8'}>
					<GridItem>
						<SmallFocus yIs={10} yIsNow={10}>
							<StyledNextLink
								target={'blank'}
								href={'https://not-a-real-website-m3esc60c0-daddydev.vercel.app/'}
							>
								<Image
									h={'300'}
									alt={
										'The mobile landing page of the not-a-real-website next app'
									}
									boxShadow={'dark'}
									borderColor={'gray.100'}
									borderRadius={'md'}
									border={'2px'}
									src={'/apps/dynamic.png'}
									_hover={{ boxShadow: 'dark-lg' }}
								/>
							</StyledNextLink>
						</SmallFocus>
						<SmallFocus rotate={0} yIs={-100}>
							<StyledNextLink
								target={'blank'}
								href={'https://not-a-real-website-m3esc60c0-daddydev.vercel.app/'}
							>
								<Image
									height={'500'}
									ml={10}
									alt={
										'The mobile landing page of the not-a-real-website next app'
									}
									boxShadow={'dark'}
									borderColor={'gray.100'}
									borderRadius={'md'}
									border={'2px'}
									src={'/apps/not.png'}
									_hover={{ boxShadow: 'dark-lg' }}
								/>
							</StyledNextLink>
						</SmallFocus>
					</GridItem>
					<GridItem>
						<VStack
							_hover={{ boxShadow: 'dark' }}
							flex={'1'}
							py={20}
							borderRadius={'20'}
							boxShadow={'md'}
							bg={'grayAlpha.100'}
							h={'100%'}
						>
							<VStack spacing={10}>
								<VStack flex={'1'} px={20} spacing={4}>
									<Heading>About</Heading>
									<Text>
										After heading about dynamic routes and being thoroughly
										confused and excited about how they worked, I decided I
										wanted to try them out.
									</Text>
									<Text>
										I had also been curious about headless CMS intergration, so
										I decided to kill to birds with one stone and create an app,
										with which to learn both.
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
									<Breathe>
										<StyledNextLink
											fontStyle={'italic'}
											target={'blank'}
											_hover={{ textDecoration: 'underline' }}
											fontSize={'xl'}
											href={
												'https://github.com/HannahBeattie/not-a-real-website/blob/main/README.md'
											}
										>
											Readme
										</StyledNextLink>
									</Breathe>
								</VStack>
							</VStack>
						</VStack>
					</GridItem>
				</Grid>
			</VStack>
		</VStack>
	)
}

export default NotAReal
