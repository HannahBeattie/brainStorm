import { Heading, HStack } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import FadeIn from '../animate/FadeIn'

function Tag() {
	return (
		<FadeIn>
			<HStack>
				<Heading fontSize={{ sm: '3xl' }} textAlign={'center'} fontFamily={'Rubik Glitch'}>
					Creative.
				</Heading>

				<Heading fontSize={{ sm: '3xl' }} textAlign={'center'} fontFamily={'Rubik Glitch'}>
					Intuative.
				</Heading>

				<Heading fontSize={{ sm: '3xl' }} textAlign={'center'} fontFamily={'Rubik Glitch'}>
					Design
				</Heading>
			</HStack>
		</FadeIn>
	)
}

export default Tag
