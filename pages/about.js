import {
	Container,
	Heading,
	HStack,
	Text,
	VStack,
	Grid,
	GridItem,
	Image,
	Center,
	Divider,
	IconButton,
	useColorModeValue,
	Flex,
	Button,
	Stack,
	Box,
	Icon,
} from '@chakra-ui/react'
import React from 'react'
import Appear from '~/components/animate/Appear'
import Flicker from '~/components/animate/Flicker'
import Intro from '~/components/Intro'

export function Blob() {
	return (
		<Icon width={'100%'} viewBox='0 0 578 440' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<path
				fillRule='evenodd'
				clipRule='evenodd'
				d='M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z'
				fill='currentColor'
			/>
		</Icon>
	)
}
function about() {
	const textProps = {
		fontFamily: 'Roboto',
		fontSize: { base: 'lg', md: '3xl' },
		color: 'gray.100',
		fontWeight: 'light',
	}

	return (
		<VStack justifyContent={'center'} alignItems={'stretch'}>
			<VStack
				justifyContent={'center'}
				verticalAlign={'center'}
				py={{ sm: 100, base: 50 }}
				px={{ sm: 200, base: 10 }}
				alignItems={'stretch'}
			>
				<Heading
					justifySelf={'center'}
					textAlign={{ base: 'center', sm: 'left' }}
					fontSize={{ sm: '8xl', base: '7xl' }}
					fontFamily={'Rubik Glitch'}
				>
					Kia Ora Taiao : Hello World!
				</Heading>
			</VStack>
			<VStack bg={'gray.900'} boxShadow={'dark'} spacing={4}>
				<Container py={{ md: 100, base: '8' }} px={{ md: 'unset', base: '10' }}>
					<Text {...textProps}> I am Hannah,</Text>
					<Text {...textProps}>
						An artist & web developer from New Zealand, land of the hobbits.
					</Text>
					<Text {...textProps}>
						I am interested in creating interesting, playful and meaingful experiances
						through a combination of art, digital tech and story-telling.
					</Text>
				</Container>
			</VStack>
			<Flicker>
				<Flex
					py={100}
					flex={1}
					justify={'center'}
					align={'center'}
					position={'relative'}
					w={'full'}
				>
					<Image
						alt={'Hero Image'}
						fit={'cover'}
						align={'center'}
						w={'90%'}
						h={'90%'}
						src={'/brainStorm/ntv.png'}
					/>
				</Flex>
			</Flicker>

			<Intro title='me me me'>
				<Text>My background is in painting, writing and gig photography.</Text>
				<Text>
					I am interested in story telling and disrupting repetitive patterns to engage in
					a more personal, direct and playful way.
				</Text>
				<Text>
					Tech allows us to connect and tell stories in new ways; We can create platforms
					and share ideas like never before and connect with people in an instant, right
					in the palm of their hand.
				</Text>
				<Text>
					The internet can, at times, feel like a huge, encompasing void of static; Many
					people are sick of being lied to, tricked or having pop-ups and ads shoved in
					their face.
				</Text>
				<Text>
					Advertising doesn&apos;t have to be loud, flashy or demanding to get attantion.
					It can be personal. Fun. Relatable. Honest...and human.
				</Text>
				<Text>
					Accessable tech allows us to shape the virtual landscape; We can make the types
					of things we want to see.
				</Text>
				<Divider />
				<Text>
					I graduated from Dev Academy wellington in April 2022 and since then have been
					chasing my interests and exploring the interpolation between clean, minimal
					design and person-first braining.
				</Text>
				<Text>
					I am excited to continue the creative adventure and fight bland, cynical
					advertising one product at a time.
				</Text>{' '}
			</Intro>
		</VStack>
	)
}

export default about
