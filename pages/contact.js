import { Heading, Box, Image, Text, useColorModeValue, VStack } from '@chakra-ui/react'
import Breathe from '~/components/framerMotion/ButtonFocus'
import Snail from '~/components/framerMotion/Snail'
import StyledNextLink from '~/components/base/StyledNextLink'
import PageWrapper from '~/components/HOC/PageWrapper'

export default function More() {
	return (
		<PageWrapper>
			<Heading userSelect={'none'} pointerEvents={'none'}>
				Contact
			</Heading>
			<Box className='specialCaseNoSelect'>
				<Snail>
					<Image
						className='specialCaseNoSelect'
						userSelect={'none'}
						pointerEvents={'none'}
						filter={'auto'}
						invert={useColorModeValue(0, 100)}
						h={100}
						alt={'Snail line drawing'}
						src={'/snail.png'}
					/>
				</Snail>
			</Box>
			<VStack spacing={'2'}>
				<Breathe>
					<StyledNextLink href='mailto:hannahdbeattie@gmail.com'>
						<Text fontFamily={'Alice'}>Email: hannahdbeattie@gmail.com </Text>
					</StyledNextLink>
				</Breathe>
				<Breathe>
					<StyledNextLink href='https://github.com/HannahBeattie'>
						<Text fontFamily={'Alice'}>Github: @HannahBeattie</Text>
					</StyledNextLink>
				</Breathe>
			</VStack>
		</PageWrapper>
	)
}
