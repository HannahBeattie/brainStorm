import { Container, Heading, HStack, Text, VStack, Grid, GridItem } from '@chakra-ui/react'
import React from 'react'

function about() {
	const textProps = {
		textAlign: 'start',
	}
	return (
		<VStack flex={'1'} alignItems={'center'} justifyContent={'center'} verticalAlign={'center'}>
			<Grid>
				<GridItem>
					<Heading>about</Heading>
				</GridItem>
				<GridItem>
					<Container>
						<VStack alignItems={'start'} spacing={4}>
							<Text {...textProps}>Kia Ora,</Text>
							<Text {...textProps}> I am Hannah.</Text>
							<Text {...textProps}>
								An artist, photographer & web developer from New Zealand, land of
								the hobbits.
							</Text>
							<Text {...textProps}>
								I have always been interested in using my art to playfully and
								meaningfully engage with others.
							</Text>
							<Text {...textProps}>
								My background is in painting, writing and gig photography.
							</Text>
							<Text {...textProps}>
								Often projects involved finding ways to let people tell their
								stories. Particularly those who may not typically get the
								opportunity to have the opportunity.{' '}
							</Text>
						</VStack>
					</Container>
				</GridItem>
				<GridItem>
					<Container>
						<VStack>
							<Text {...textProps}>
								My fascination with technology comes from a place of curious and
								nervous excitement; It is something that has the power to disrupt or
								create connections.{' '}
							</Text>
							<Text {...textProps}>
								It can be used to spread misinformation or empower people with
								knowledge and the tools to communicate and learn about people and
								things that are different to them.
							</Text>
							<Text {...textProps}>
								I graduated from Dev Academy wellington in April 2022 and since then
								have been chasing my interests and exploring the interpolation
								between clean, minimal design and person-first braining.
							</Text>
							<Text {...textProps}>
								I am excited to continue to explore ways to connect, communicate and
								tell stories because there is enough bland static buzz in the world.
							</Text>
						</VStack>
					</Container>
				</GridItem>
			</Grid>
		</VStack>
	)
}

export default about
