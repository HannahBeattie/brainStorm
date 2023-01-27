import { Container, VStack } from '@chakra-ui/react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { EnterStage } from '~/components/pages/framerMotion/EnterStage'
import Appear from '../../pages/framerMotion/Appear'

export default function TextContainer({ children, ...props }) {
	return (
		<Appear>
			<Container size={'8xl'}>
				<VStack
					px={{ base: '4rem', md: 4 }}
					fontSize={{ base: '23', md: 'xl' }}
					spacing={3}
					alignItems={'stretch'}
					textAlign={'start'}
					{...props}
				>
					{children}
				</VStack>
			</Container>
		</Appear>
	)
}
