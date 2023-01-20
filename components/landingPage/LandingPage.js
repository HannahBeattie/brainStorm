import { useColorModeValue, VStack } from '@chakra-ui/react'
import StyledNextLink from '../base/StyledNextLink'
import TextContainer from '../base/templates/TextContainer'
import Appear from '../framerMotion/Appear'
import { EnterSmall, EnterStage, Unfold } from '../framerMotion/EnterStage'
import Pulse from '../framerMotion/Pulse'
import Tree from '../p5/hero/Tree'
import { paragraphs } from './IntroProps'
import LandButton from './LandButton'
import { WiRaindrops, WiRaindrop } from 'react-icons/wi'

export default function LandingPage() {
	const items = paragraphs

	return (
		<>
			<VStack
				overflow={{ base: 'clip', md: 'initial' }}
				pt={{ base: '10rem', md: '12rem' }}
				pb={{ base: 4, md: 4 }}
				flex={'1'}
				spacing={{ md: 16, base: 16 }}
				alignItems={'stretch'}
			>
				{items.map(({ paragraph, trees }, idx) => (
					<VStack key={`item${idx}$`}>
						<VStack spacing={'16'} display={{ base: 'none', md: 'flex' }}>
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
						<VStack display={{ base: 'flex', md: 'none' }}>
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
					<Pulse>
						<Unfold>
							<VStack
								flex={1}
								alignItems={'stretch'}
								px={{ base: 8, md: 0 }}
								pt={{ md: 8 }}
							>
								<Tree num={100} />
							</VStack>
						</Unfold>
					</Pulse>
					<VStack fontSize={'4xl'} color={useColorModeValue('teal', 'red')}>
						<WiRaindrop />
						<WiRaindrop />
						<WiRaindrop />
						<WiRaindrops size={'100'} />
					</VStack>
				</VStack>

				<VStack pb={{ md: '30vh' }} spacing={{ md: 10 }} fontSize={'4xl'}>
					<Pulse>
						<LandButton />
					</Pulse>
				</VStack>

				<VStack>
					<StyledNextLink
						maxW={{ base: '20em', md: '34em' }}
						textAlign={'center'}
						href={
							'https://gorillasun.de/blog/radial-perlin-noise-and-generative-tree-rings'
						}
						fontFamily={'SF Pro'}
						fontSize={{ base: 'sm', md: 'sm' }}
					>
						Generative circle work enspired by AHMAD MOUSSA's Perlin noise rings
					</StyledNextLink>
				</VStack>
			</VStack>
		</>
	)
}
