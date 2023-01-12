import { Grid, GridItem, Heading, Image, Spacer, Text, VStack } from '@chakra-ui/react'
import Focus from '~/components/base/motion/Focus'
import Breathe from '~/components/base/motion/framerMotion/Breathe'
import StyledNextLink from '~/components/base/StyledNextLink'

export default function Monkey() {
	return (
		<>
			<VStack flex={'1'} spacing={'4'}>
				<Heading>Studio Monkey</Heading>
				<VStack>
					<Text>Branding and app design for StudioMonkey.io</Text>
					<Grid templateColumns={{ md: 'repeat(2, 1fr)' }} p={20} columnGap={'8'}>
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
											Studio Monkey is a premier VFX management tool used my
											many high profile studios. I worked in close dialog with
											CEO Zach Tucker to create a visual brand identity, logo
											and website aesthetic that fit the ethos and intention
											of the company — functional, minimal, playful and highly
											customer-focused. The website was a collaboration
											between myself and Mikey Lemmon who handled the backend
											functionality and software integration, while I focused
											on the landing page and sustaining a constant visual and
											colour story.
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
												href={'https://www.studiomomo.io'}
											>
												studiomomo.io
											</StyledNextLink>
										</Breathe>
									</VStack>
								</VStack>
							</VStack>
						</GridItem>
						<GridItem>
							<Focus rotateBy={5} rotateX={10} moveX={10}>
								<StyledNextLink
									target={'blank'}
									href={
										'https://not-a-real-website-m3esc60c0-daddydev.vercel.app/'
									}
								>
									<Image
										alt={'The mobile landing page of the studio monkey app'}
										boxShadow={'dark'}
										border={'2px'}
										borderColor={'teal.800'}
										borderRadius={'md'}
										h={'100%'}
										w={'100%'}
										src={'/apps/studioMonkey.png'}
										_hover={{ boxShadow: 'dark-lg' }}
									/>
								</StyledNextLink>
							</Focus>
						</GridItem>
					</Grid>
				</VStack>
			</VStack>
		</>
	)
}
