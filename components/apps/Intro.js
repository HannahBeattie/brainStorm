import { Container, Divider, Heading, Text, VStack } from '@chakra-ui/react'
import Appear from '~/components/base/motion/framerMotion/Appear'

function Intro() {
	return (
		<>
			<Heading>Web Development</Heading>
			<Appear>
				<Container alignSelf={'center'}>
					<VStack spacing={'4'}>
						<Text align={'start'} fontFamily={'Poppins'}>
							Since graduating at Dev Acadamy in April 2022, I have been focused on
							sharpning my skillset and adapting it to new tools, as well as
							developing a clear set of asthetic principals.
						</Text>
						<Text align={'start'} fontFamily={'Poppins'}>
							I am interested in clean, functional design that includes suprising,
							creative and humorous moments.
						</Text>
						<Text align={'start'} fontFamily={'Poppins'}>
							Rather than leaning into gimmic or flashy, overpowering elements, that
							can intrude on the functionality and acceccability of a site, I am
							curious about the ways that minimal, functional language can be combined
							with optional, whimsical interactions.
						</Text>
						<Text align={'start'} fontFamily={'Poppins'}>
							I think most people are exausted by intrusive, impersonal, cynical
							advertising.
						</Text>
						<Text align={'start'} fontFamily={'Poppins'}>
							Increasingly there is a desire for something playful, personal and real.
						</Text>
						<Text align={'start'} fontFamily={'Poppins'}>
							The tech landscape provides us with so many exciting tools of
							connection.
						</Text>
						<Text align={'start'} fontFamily={'Poppins'}>
							I am excited about creating things that feel meaningful, exciting and
						</Text>
					</VStack>
				</Container>
			</Appear>
			<Divider />
		</>
	)
}

export default Intro
