import { Heading, useColorModeValue, VStack } from '@chakra-ui/react'
import FadeIn from '~/components/HOC/FadeIn'
import MyLink from '~/components/base/StyledNextLink'
import SketchTabs from '~/components/p5/generative/SketchTabs'
import World from '~/components/p5animations/World'

export default function Static() {
	return (
		<FadeIn>
			<VStack flex={'1'} alignSelf='stretch' justify='center' py={8} spacing={8}>
				<Heading>Generative art made with p5</Heading>
				<SketchTabs />
				<MyLink href={'/staticArt'} _hover={{ textDecoration: 'underline' }}>
					<i>See static p5. Works</i>
				</MyLink>
			</VStack>
		</FadeIn>
	)
}
