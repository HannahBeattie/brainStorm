import { Heading, VStack, Text, Container } from '@chakra-ui/react'
import AnimationPage from '~/components/AnimationPage'
import StyledNextLink from '~/components/base/StyledNextLink'

export default function p5Animations() {
	return (
		<AnimationPage
			par1={<Text>hello</Text>}
			par2={<Text>hello</Text>}
			par3={
				<VStack maxW={'260px'}>
					<Text as={'div'}>
						If you are interested in seeing more, you can view my static works{' '}
						<StyledNextLink href={'/staticArt'}>
							<b>here.</b>
						</StyledNextLink>
					</Text>
				</VStack>
			}
		>
			<VStack py={8} spacing={'8'}>
				<Heading>P5 Animations</Heading>
				<Text>A little about p5 animation</Text>
			</VStack>
		</AnimationPage>
	)
}
