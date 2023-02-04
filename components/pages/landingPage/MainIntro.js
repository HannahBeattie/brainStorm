import { useBreakpointValue, useColorModeValue, VStack } from '@chakra-ui/react'
import { WiRaindrop, WiRaindrops } from 'react-icons/wi'
import TextContainer from '../../base/templates/TextContainer'
import Appear from '../framerMotion/Appear'
import { EnterStage, Unfold } from '../framerMotion/EnterStage'
import Tree from '../p5/hero/Tree'
import { paragraphs } from './IntroProps'
import LandButton from './LandButton'

export default function MainIntro() {
	const items = paragraphs
	const small = useBreakpointValue({ base: true, md: false })

	return (
		<>
			<VStack
				pt={{ base: '10rem', md: '12rem' }}
				pb={{ base: 4, md: 4 }}
				flex={'1'}
				spacing={{ md: 16, base: 16 }}
				alignItems={'stretch'}
			>
				{items.map(({ paragraph, trees }, idx) => (
					<VStack key={`item${idx}$`}>
						<VStack spacing={{ md: '40' }} alignItems={'stretch'}>
							<Appear>
								<TextContainer>{paragraph}</TextContainer>
							</Appear>
							{trees && (
								<Appear>
									<EnterStage right={idx % 2 === 1} small={small}>
										<VStack flex={'1'} alignItems={'stretch'}>
											<Tree num={trees} />
										</VStack>
									</EnterStage>
								</Appear>
							)}
						</VStack>
					</VStack>
				))}

				<VStack
					flex={1}
					alignItems='stretch'
					pt={useBreakpointValue({ base: 330, md: 200 })}
				>
					<Unfold num={-900} style={{ zIndex: 10 }}>
						<VStack flex={1} alignItems={'center'}>
							<Tree num={10} />
						</VStack>
					</Unfold>

					<Unfold num={-1900}>
						<VStack fontSize={'4xl'} color={useColorModeValue('teal', 'white')} pt='50'>
							<WiRaindrop />
							<WiRaindrop />
							<WiRaindrop />
							<WiRaindrops size={'100'} />
						</VStack>
					</Unfold>
				</VStack>

				<VStack pb={{ md: 16, base: 10 }} spacing={{ md: 10 }} fontSize={'4xl'}>
					<LandButton />
				</VStack>
			</VStack>
		</>
	)
}
