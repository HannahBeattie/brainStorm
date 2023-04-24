import { HStack, Image, useBreakpointValue, useColorModeValue, VStack } from '@chakra-ui/react'
import { WiRaindrop, WiRaindrops } from 'react-icons/wi'
import TextContainer from '../../base/templates/TextContainer'
import Appear from '../framerMotion/Appear'
import { EnterStage, Unfold } from '../framerMotion/EnterStage'
import Tree from '../p5/hero/Tree'

import LandButton from './LandButton'
import { paragraphs } from './IntroProps'

export default function MainIntro() {
	const items = paragraphs
	const small = useBreakpointValue({ base: true, md: false })

	return (
		<VStack flex={1} overflow={'hidden'}>
			<VStack
				pt={{ base: '10rem', md: '12rem' }}
				pb={{ base: 4, md: 4 }}
				flex={'1'}
				spacing={{ md: 16, base: 16 }}
				alignItems={'stretch'}
			>
				{items.map(({ paragraph, trees }, idx) => (
					<VStack key={`item${idx}$`}>
						<VStack spacing={10} alignItems={'stretch'}>
							<EnterStage right={idx % 2 === 1} small={small}>
								<Appear>
									<Image
										py={100}
										maxW={400}
										src={'/clouds/1.png'}
										alt={'cloud'}
									/>
								</Appear>
							</EnterStage>

							<TextContainer>{paragraph}</TextContainer>
						</VStack>
					</VStack>
				))}

				<VStack flex={1} alignItems='stretch' pt={'80vh'}>
					<Unfold num={-800} style={{ zIndex: 10 }}>
						<VStack alignItems={'stretch'}>
							<Image maxH={600} src={'/clouds/2.png'} alt={'cloud'} />
						</VStack>
					</Unfold>

					<Unfold num={-1700}>
						<VStack
							fontSize={'4xl'}
							color={useColorModeValue('teal', 'white')}
							pt={{ base: '15rem', sm: '12rem', lg: '30rem' }}
							pb={{ md: 200, lg: 300 }}
						>
							<Image maxH={100} src={'/clouds/drop.png'} alt={'drop'} />
							<Image pl={100} maxH={90} src={'/clouds/drop.png'} alt={'drop'} />
							<Image pr={100} maxH={84} src={'/clouds/drop.png'} alt={'drop'} />
							<Image maxH={90} src={'/clouds/drop.png'} alt={'drop'} />
						</VStack>
					</Unfold>
				</VStack>

				<VStack pb={{ md: 16, base: 10 }} spacing={{ md: 10 }} fontSize={'4xl'}>
					<LandButton />
				</VStack>
			</VStack>
		</VStack>
	)
}
