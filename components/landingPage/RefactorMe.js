import { VStack } from '@chakra-ui/react'
import TextContainer from '../base/templates/TextContainer'
import Tree from '../p5/hero/Tree'
import { paragraphs } from './IntroProps'

export default function RefactorMe() {
	const items = paragraphs
	return (
		<>
			{' '}
			<VStack spacing={'16'} pt={{ md: 40, base: 32 }} flex={'1'} alignItems={'stretch'}>
				{items.map(({ paragraph, trees }, idx) => (
					<VStack key={`item${idx}$`}>
						<TextContainer>{paragraph}</TextContainer>
						<Tree num={trees} />
					</VStack>
				))}
			</VStack>
		</>
	)
}
