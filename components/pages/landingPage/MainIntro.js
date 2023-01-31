import { useColorModeValue, VStack } from '@chakra-ui/react'
import { WiRaindrop, WiRaindrops } from 'react-icons/wi'
import TextContainer from '../../base/templates/TextContainer'
import Appear from '../framerMotion/Appear'
import { EnterSmall, EnterStage, Unfold } from '../framerMotion/EnterStage'
import Pulse from '../framerMotion/Pulse'
import Tree from '../p5/hero/Tree'
import { paragraphs } from './IntroProps'
import LandButton from './LandButton'

export default function MainIntro() {
	const items = paragraphs

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
						<VStack
							spacing={'16'}
							display={{ base: 'none', md: 'flex' }}
							alignItems={'stretch'}
						>
							<Appear>
								<TextContainer>{paragraph}</TextContainer>
							</Appear>
							<Appear>
								{idx % 2 === 1 && trees && (
									<EnterStage right={'true'}>
										<Tree num={trees} />
									</EnterStage>
								)}

								{idx % 2 === 0 && trees && (
									<EnterStage>
										<Tree num={trees} />
									</EnterStage>
								)}
							</Appear>
						</VStack>
						<VStack display={{ base: 'flex', md: 'none' }} alignItems={'stretch'}>
							<Appear>
								<TextContainer>{paragraph}</TextContainer>
							</Appear>
							<Appear>
								{idx % 2 === 1 && trees && (
									<EnterSmall right={'true'}>
										<VStack>
											<Tree num={trees} />
										</VStack>
									</EnterSmall>
								)}

								{idx % 2 === 0 && trees && (
									<EnterSmall>
										<VStack>
											<Tree num={trees} />
										</VStack>
									</EnterSmall>
								)}
							</Appear>
						</VStack>
					</VStack>
				))}

				<VStack flex={1} alignItems='stretch'>
					<Unfold num={-800}>
						<VStack flex={1} alignItems={'stretch'} pt={{ md: 200, base: 200 }}>
							<Tree num={100} />
						</VStack>
					</Unfold>

					<VStack fontSize={'4xl'} color={useColorModeValue('teal', 'white')}>
						<WiRaindrop />
						<WiRaindrop />
						<WiRaindrop />
						<WiRaindrops size={'100'} />
					</VStack>
				</VStack>

				<VStack pb={{ md: 16, base: 10 }} spacing={{ md: 10 }} fontSize={'4xl'}>
					<LandButton />
				</VStack>
			</VStack>
		</>
	)
}
