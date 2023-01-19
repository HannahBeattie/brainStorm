import { VStack } from '@chakra-ui/react'
import StyledNextLink from '../base/StyledNextLink'
import TextContainer from '../base/templates/TextContainer'
import Appear from '../framerMotion/Appear'
import { EnterSmall, EnterStage, Unfold } from '../framerMotion/EnterStage'
import Pulse from '../framerMotion/Pulse'
import Tree from '../p5/hero/Tree'
import { paragraphs } from './IntroProps'
import LandButton from './LandButton'

export default function LandingPage() {
	const items = paragraphs

	return (
		<>
			<VStack
				pt={{ base: '10rem', md: '12rem' }}
				overflow={{ base: 'hidden', md: 'initial' }}
				pb={{ base: 4, md: 4 }}
				flex={'1'}
				spacing={'16'}
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
				</VStack>
				<VStack pt={{ md: '20vh', base: -40 }} pb={{ md: '40vh' }}>
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
