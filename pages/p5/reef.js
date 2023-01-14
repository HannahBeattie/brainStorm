import { Divider, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import AnimationPage from '~/components/AnimationPage'
import StyledNextLink from '~/components/base/StyledNextLink'
import Worms from '~/components/p5animations/moving/Worms'

export default function Reef() {
	return (
		<>
			<AnimationPage
				title={'Reef'}
				par1={
					<VStack>
						<Text color={'grayAlpha.900'} fontSize={'sm'}>
							About
						</Text>
						<Text as={'div'} fontSize={'sm'}>
							One of the may experements that came after creating my first flowfield,
							inspired by
							<StyledNextLink href={'https://www.youtube.com/watch?v=1-QXuR-XX_s'}>
								{' '}
								<i>Colorful Coding</i>.
							</StyledNextLink>
						</Text>
						<Text fontSize={'sm'}>
							I wanted to add a level of organic-feeling interaction, so I played with
							mouse events, basing the movement and responses to how I imagined a
							creature in the ocean may respond.
						</Text>
					</VStack>
				}
				par2={
					<VStack>
						<Text color={'grayAlpha.900'} fontSize={'sm'}>
							Notes
						</Text>
						<Text fontSize={'sm'}>
							I did not include a 'reset' feature in this animation, because I enjoy
							the way in which the animation tends to develop and envolve --
						</Text>
						<Text fontSize={'sm'}>
							From spindly worms, to large corals, to bloated, planet-like massess --
							Depending on time and interaction.
						</Text>
					</VStack>
				}
				par3={
					<VStack>
						<Text color={'grayAlpha.900'} fontSize={'sm'}>
							DETAILS
						</Text>
						<Text color={'grayAlpha.900'} fontSize={'sm'}>
							Title: Reef
						</Text>
						<Text color={'grayAlpha.900'} fontSize={'sm'}>
							Duration: Infinite
						</Text>
						<Text color={'grayAlpha.900'} fontSize={'sm'}>
							Created using p5
						</Text>
						<Text color={'grayAlpha.900'} fontSize={'sm'}>
							Best viewed on desktop
						</Text>
					</VStack>
				}
			>
				<Worms />
			</AnimationPage>
		</>
	)
}
