import { Text, Tooltip } from '@chakra-ui/react'
import IntroCard from './base/templates/IntroCard'
import Appear from './framerMotion/Appear'

export default function WCIntro() {
	return (
		<Appear width={{ width: '100vw' }}>
			<IntroCard heading={'WaterColors'}>
				<Text>
					I began watercolour painting a few years ago, in an attempt to cure my
					perfectionism.
				</Text>
				<Text>
					I was drawn to the medium because of the total lack of control and experience I
					had with them, as well as the fact that they are not typically associated with
					&apos;high art&apos; value.
				</Text>
				<Text>
					Watercolours are extremely unpredictable. To enjoy using them, there is an
					element of control you must surrender. Instead of confident, immediate
					precision, the task becomes noticing how the marks are behaving and changing.
				</Text>
				<Text>
					Factors such as humidity, the grain of the paper, whether salt is present, the
					amount of water and the chemical composition of the brand of paint -{' '}
					<i>or, more usually, the chemical composition of that particular pigment</i>-
					all affect the way your marks will behave and the type of treatment you give
					them.
				</Text>
				<Text>
					{' '}
					am rather proud to say that I have, in no way, mastered watercolour painting.
					Only that it has taught me a great deal about noticing details and{' '}
					<i>
						<Tooltip
							bg={'gray.900'}
							color={'white'}
							p={4}
							borderRadius={'md'}
							cursor={'pointer'}
							label={
								'I apologise sincerely for that terrible pun. It will not happen again.'
							}
						>
							going with the flow * .
						</Tooltip>
					</i>
				</Text>
			</IntroCard>
		</Appear>
	)
}
