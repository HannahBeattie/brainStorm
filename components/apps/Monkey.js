import { Grid, GridItem, Heading, Image, Spacer, Text, VStack } from '@chakra-ui/react'
import Focus from '~/components/base/motion/Focus'
import Breathe from '~/components/base/motion/framerMotion/Breathe'
import StyledNextLink from '~/components/base/StyledNextLink'

export default function Monkey() {
	return (
		<>
			<GridItem>
				<VStack
					h={'100%'}
					w={'100%'}
					flex={'1'}
					alignItems={'center'}
					justifyContent={'center'}
					spacing={'10'}
				>
					<Heading>Studio Monkey</Heading>
					<Text>
						Studio Monkey is a premier VFX management tool used my many high profile
						studios. I worked in close dialog with CEO Zach Tucker to create a visual
						brand identity, logo and website aesthetic that fit the ethos and intention
						of the company — functional, minimal, playful and highly customer-focused.
						The website was a collaboration between myself and Mikey Lemmon who handled
						the backend functionality and software integration, while I focused on the
						landing page and sustaining a constant visual and colour story.
					</Text>
					<VStack>
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
			</GridItem>
			<GridItem>
				<VStack>
					<StyledNextLink
						target={'blank'}
						href={'https://not-a-real-website-m3esc60c0-daddydev.vercel.app/'}
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
				</VStack>
			</GridItem>
		</>
	)
}
