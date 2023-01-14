import { Divider, Text, VStack } from '@chakra-ui/react'
import AnimationPage from '~/components/AnimationPage'
import StyledNextLink from '~/components/base/StyledNextLink'
import FlowField from '~/components/p5animations/moving/FlowField'
import Grass from '~/components/p5animations/moving/Grass'

export default function ElectricVine() {
	return (
		<>
			<AnimationPage
				title={'Electric Vine'}
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
						<Text color={'grayAlpha.900'} fontSize={'sm'}>
							DETAILS
						</Text>
						<Text color={'grayAlpha.900'} fontSize={'sm'}>
							Title: Electric Vine
						</Text>
						<Text color={'grayAlpha.900'} fontSize={'sm'}>
							Duration: 100 frames
						</Text>
						<Text color={'grayAlpha.900'} fontSize={'sm'}>
							Created using p5
						</Text>
						<Text color={'grayAlpha.900'} fontSize={'sm'}>
							Click to reset
						</Text>
					</VStack>
				}
			>
				<Grass />
			</AnimationPage>
		</>
	)
}
