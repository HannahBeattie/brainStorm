import { Container, Divider, Heading, HStack, Spacer, Text, VStack } from '@chakra-ui/react'
import LinkWrapper from '~/components/base/LinkWrapper'
import StyledNextLink from '~/components/base/StyledNextLink'
import IntroCard from '~/components/base/templates/IntroCard'
import IntroSlide from '~/components/base/templates/IntroSlide'
import ButtonFocus from '~/components/framerMotion/ButtonFocus'
import ScrollProgress from '~/components/framerMotion/ScrollProgress'
import ScrollToTop from '~/components/framerMotion/ScrollToTop'
import PageWrapper from '~/components/HOC/PageWrapper'
import Flowfields from '~/components/p5/static/FlowFields'
import GoldenThread from '~/components/p5/static/GoldenThread'
import ObjectClass from '~/components/p5/static/ObjectClass'

export default function StaticWorks() {
	return (
		<PageWrapper>
			<ScrollToTop />
			<ScrollProgress />
			<Container pt={{ base: 4, md: 8 }}>
				<Text
					px={{ base: 4 }}
					fontSize={{ base: 'md', md: 'xl' }}
					textAlign={'center'}
					fontWeight={'400'}
					_dark={{ color: 'gray.400' }}
					color={'gray.800'}
					textTransform={'uppercase'}
					letterSpacing={{ md: '0.1em' }}
				>
					Stills from ongoing p5.js tests
				</Text>
				<Divider my={{ base: 2, md: 4 }} display={{ base: 'flex', md: 'none' }} />
			</Container>

			<GoldenThread pt={4} />
			<ObjectClass />
			<Flowfields />
			<HStack
				pt={{ base: 2, md: 0 }}
				pb={{ base: 2, md: 4 }}
				flex='1'
				alignItems={'end'}
				width={'100%'}
				px={16}
				justifyContent={'flex-end'}
			>
				<ButtonFocus>
					<StyledNextLink href={'/p5Index'}>
						Return to p5 Animation Gallery
					</StyledNextLink>
				</ButtonFocus>
			</HStack>
		</PageWrapper>
	)
}
