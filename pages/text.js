import { Heading, HStack, Stack, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Appear from '~/components/framerMotion/Appear'
import Track from '~/components/framerMotion/Track'
import { motion } from 'framer-motion'
import FadeIn from '~/components/HOC/FadeIn'

export default function Text() {
	const letterProps = {
		fontSize: { base: '6xl', md: '8xl' },
		fontFamily: 'Alice',
	}
	return (
		<FadeIn>
			<Stack
				spacing={0}
				flex={'1'}
				alignItems={'center'}
				justifyContent={'center'}
				direction={{ base: 'column', md: 'row' }}
			>
				<HStack spacing={0}>
					<Track>
						<Heading {...letterProps}>H</Heading>
					</Track>

					<Track num={4}>
						<Heading {...letterProps}>E</Heading>
					</Track>
					<Track>
						<Heading {...letterProps}>L</Heading>
					</Track>
					<Track>
						<Heading {...letterProps}>L</Heading>
					</Track>
					<Track>
						<Heading {...letterProps}>O</Heading>
					</Track>
				</HStack>
				<HStack spacing={0}>
					<Track>
						<Heading {...letterProps}>W</Heading>
					</Track>
					<Track>
						<Heading {...letterProps}>O</Heading>
					</Track>
					<Track>
						<Heading {...letterProps}>R</Heading>
					</Track>
					<Track>
						<Heading {...letterProps}>L</Heading>
					</Track>
					<Track>
						<Heading {...letterProps}>D</Heading>
					</Track>
				</HStack>
			</Stack>
		</FadeIn>
	)
}
