import { HStack, Spacer, VStack } from '@chakra-ui/react'
import LinkWrapper from '~/components/base/LinkWrapper'
import StyledNextLink from '~/components/base/StyledNextLink'
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
			<GoldenThread />
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
