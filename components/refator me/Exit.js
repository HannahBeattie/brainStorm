import { Grid, GridItem, Heading, Image, Spacer, Text, VStack } from '@chakra-ui/react'
import Breathe from '~/components/base/motion/framerMotion/ButtonFocus'
import StyledNextLink from '~/components/base/StyledNextLink'

export default function XIt() {
	return (
		<>
			<VStack flex={'1'} spacing={'4'}>
				<VStack px={100}>
					<Grid templateColumns={{ md: 'repeat(2, 1fr)' }} columnGap={'8'}>
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
										<Text>Studio monkey.io</Text>
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
												href={''}
											>
												Xit site
											</StyledNextLink>
										</Breathe>
									</VStack>
								</VStack>
							</VStack>
						</GridItem>
						<GridItem>
							{/* <StyledNextLink target={'blank'} href={'https://x-it.vercel.app/'}> */}
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
							{/* </StyledNextLink> */}
						</GridItem>
					</Grid>
				</VStack>
			</VStack>
		</>
	)
}
