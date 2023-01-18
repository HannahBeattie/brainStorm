import { Divider, Heading, Text, useColorModeValue, VStack } from '@chakra-ui/react'
import LinkWrapper from '~/components/base/LinkWrapper'
import StyledNextLink from '~/components/base/StyledNextLink'
import HoverPulse from '~/components/framerMotion/HoverPulse'
import PageWrapper from '~/components/HOC/PageWrapper'
import GalleryWrapper from '~/components/p5GalleryPages/GalleryWrapper'
import P5Intro from '~/components/p5GalleryPages/P5Intro'

export default function P5Index() {
	return (
		<PageWrapper>
			<GalleryWrapper no={true}>
				<P5Intro />
				<VStack>
					<HoverPulse>
						<StyledNextLink
							fontSize={{ base: 'md' }}
							href={'/p5/staticWorks'}
							textTransform={'uppercase'}
							letterSpacing={'0.1em'}
							fontWeight={'600'}
							color={useColorModeValue('gray.900', 'whiteAlpha.800')}
							_hover={{ color: useColorModeValue('teal', 'red') }}
						>
							I am the link below
						</StyledNextLink>
					</HoverPulse>
				</VStack>
			</GalleryWrapper>
		</PageWrapper>
	)
}
