import { Divider, Text, VStack } from '@chakra-ui/react'
import AnimationPage from '~/components/AnimationPage'
import StyledNextLink from '~/components/base/StyledNextLink'
import FlowField from '~/components/p5animations/moving/FlowField'

export default function Silk() {
	return (
		<>
			<AnimationPage
				title={'Silk & Stitch'}
				par1={
					<VStack>
						<Text color={'grayAlpha.900'} fontSize={'sm'}>
							About
						</Text>
						<Text as={'div'} fontSize={'sm'}>
							text
							<StyledNextLink href={''}>text</StyledNextLink>
						</Text>
						<Text fontSize={'sm'}>text</Text>
					</VStack>
				}
				par2={
					<VStack>
						<Text color={'grayAlpha.900'} fontSize={'sm'}>
							Notes
						</Text>
						<Text fontSize={'sm'}>text</Text>
						<Text fontSize={'sm'}>text</Text>
					</VStack>
				}
				par3={
					<VStack>
						<Divider py={2} display={{ base: 'flex', md: 'none' }} />
						<Text color={'grayAlpha.900'} fontSize={'sm'}>
							DETAILS
						</Text>
						,
						<Text color={'grayAlpha.900'} fontSize={'sm'}>
							Title: Silk & Stitch
						</Text>
						,
						<Text color={'grayAlpha.900'} fontSize={'sm'}>
							Duration: 100 frames
						</Text>
						,
						<Text color={'grayAlpha.900'} fontSize={'sm'}>
							Created using p5
						</Text>
						,
						<Text color={'grayAlpha.900'} fontSize={'sm'}>
							Click to reset
						</Text>
						,
						<Divider py={2} display={{ base: 'flex', md: 'none' }} />
					</VStack>
				}
			>
				<FlowField />
			</AnimationPage>
		</>
	)
}
