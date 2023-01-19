import { Container, VStack } from '@chakra-ui/react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { EnterStage } from '~/components/framerMotion/EnterStage'
import Appear from '../../framerMotion/Appear'

export default function TextContainer({ children, ...props }) {
	return (
		<Appear>
			<Container size={'8xl'}>
				<VStack
					px={{ base: 6, md: 4 }}
					alignSelf='stretch'
					alignItems='stretch'
					fontSize={{ base: 'lg', md: 'xl' }}
					spacing={3}
					{...props}
				>
					{children}
				</VStack>
			</Container>
		</Appear>
	)
}
