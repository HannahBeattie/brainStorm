import { Container, Heading, Text, VStack } from '@chakra-ui/react'
import LinkWrapper from '~/components/base/LinkWrapper'
import DisplayAnimation from '~/components/refactorMe/DisplayAnimation'
import PageWrapper from '~/components/HOC/PageWrapper'

export default function P5Index() {
	return (
		<PageWrapper>
			<DisplayAnimation
				par1={
					<VStack maxW={'260px'}>
						<Text>About</Text>
						<Text>Works from December 2022, to January 2023</Text>
					</VStack>
				}
				par2={
					<VStack maxW={'260px'}>
						<Text>ect.</Text>
						<Text as={'div'}>
							If you are interested in seeing more, you can view my static works{' '}
							<LinkWrapper href={'/staticArt'}>
								<b>here.</b>
							</LinkWrapper>
						</Text>
					</VStack>
				}
				par3={
					<VStack maxW={'260px'}>
						<Text>More</Text>
						<Text as={'div'}>
							See site repo for source code{' '}
							<LinkWrapper href={'https://github.com/HannahBeattie/brainStorm'}>
								here
							</LinkWrapper>
						</Text>
					</VStack>
				}
			>
				<VStack py={8} spacing={'8'}>
					<Heading>Generative art</Heading>
					<Container
						bg={'#efeeee'}
						_dark={{ bg: 'extraDark' }}
						fontSize={'lg'}
						fontFamily={'Lora'}
						p={8}
						borderRadius={'md'}
						boxShadow={'md'}
					>
						<VStack spacing={4}>
							<Text>
								I have recently, gingerly, dipped my toes into the realm of digital
								and generative art thanks to the p5.js library.
							</Text>
							<Text>
								While it is early days, I have enjoyed creating works that mimic and
								play with organic shapes, patterns and colours.
							</Text>
							<Text>
								I am interested in gaining more understanding and control over my
								pattern-making abilities; Perhaps trying to mimic my analog,
								pen-and-ink styles in a generative context.
							</Text>
						</VStack>
					</Container>
				</VStack>
			</DisplayAnimation>
		</PageWrapper>
	)
}
