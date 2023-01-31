import { Container, Divider, Text } from '@chakra-ui/react'
import LinkWrapper from '~/components/base/LinkWrapper'
import PageWrapper from '~/components/HOC/PageWrapper'
import ScrollProgress from '~/components/pages/framerMotion/ScrollProgress'
import ScrollToTop from '~/components/pages/framerMotion/ScrollToTop'
import GoldenThread from '~/components/pages/p5/static/GoldenThread'
import ObjectClass from '~/components/pages/p5/static/ObjectClass'
import Flowfields from '~/components/pages/p5GalleryPages/FlowFields'

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
			<LinkWrapper href={'/p5Index'} fontSize={'lg'}>
				<Text> Back to gallery</Text>
			</LinkWrapper>
		</PageWrapper>
	)
}
