import { Container, Grid, GridItem, Heading, Image, Spacer, Text, VStack } from '@chakra-ui/react'
import XIt from '~/components/apps/Exit'
import Intro from '~/components/apps/Intro'
import Monkey from '~/components/apps/Monkey'
import NotAReal from '~/components/apps/NotAReal'
import Focus from '~/components/base/motion/Focus'
import Breathe from '~/components/base/motion/framerMotion/Breathe'
import FadeIn from '~/components/base/motion/framerMotion/FadeIn'
import StyledNextLink from '~/components/base/StyledNextLink'

export default function Web() {
	return (
		<>
			<FadeIn>
				<VStack>
					<Intro />
					<VStack p={100}>
						<Grid
							templateColumns={{ md: 'repeat(2, 1fr) ' }}
							columnGap={100}
							rowGap={10}
						>
							<Monkey />
							{/* <NotAReal />
							<XIt /> */}
						</Grid>
					</VStack>
				</VStack>
			</FadeIn>
		</>
	)
}
