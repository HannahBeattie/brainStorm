import { Text, VStack } from '@chakra-ui/react'
import LinkWrapper from '../base/LinkWrapper'

const textProps = { color: 'grayAlpha.900', fontSize: 'sm' }

export const reef = {
	title: 'Reef',
	column1: (
		<VStack>
			<Text as={'div'} {...textProps}>
				One of the may experements that came after creating my first flowfield, inspired by{' '}
				<LinkWrapper href={'https://www.youtube.com/watch?v=1-QXuR-XX_s'}>
					Colorful Coding.
				</LinkWrapper>
			</Text>
			<Text {...{ ...textProps }}>
				I wanted to add a level of organic-feeling interaction, so I played with mouse
				events, basing the movement and responses to how I imagined a creature in the ocean
				may respond.
			</Text>
		</VStack>
	),
	column2: 'blah',
	column3: (
		<VStack>
			<Text {...textProps}>Title: Reef</Text>
			<Text {...textProps}>Duration: Infinate</Text>
			<Text {...textProps}>Created using p5</Text>
			<Text {...textProps}>Best Viewed on Desktop</Text>
		</VStack>
	),
}

export const electric = {
	title: 'Electric Vine',
	column1: 'blah',
	column2: 'blah',
	column3: (
		<VStack>
			<Text {...textProps}>Title: Electric Vine</Text>
			<Text {...textProps}>Duration:</Text>
			<Text {...textProps}>Created using p5</Text>
			<Text {...textProps}>Click to reset</Text>
		</VStack>
	),
}

export const geo = {
	title: 'Geo Twirl',
	column1: 'blah',
	column2: 'blah',
	column3: (
		<VStack>
			<Text {...textProps}>Title: Geo Twirl</Text>
			<Text {...textProps}>Duration: </Text>
			<Text {...textProps}>Created using p5</Text>
			<Text {...textProps}>Click to reset</Text>
		</VStack>
	),
}

export const spark = {
	title: 'Spark',
	column1: 'blah',
	column2: 'blah',
	column3: (
		<VStack>
			<Text {...textProps}>Title: Spark</Text>
			<Text {...textProps}>Duration: </Text>
			<Text {...textProps}>Created using p5</Text>
			<Text {...textProps}>Click to reset</Text>
		</VStack>
	),
}

export const silk = {
	title: 'Silk',
	column1: 'blah',
	column2: 'blah',
	column3: (
		<VStack>
			<Text {...textProps}>Title: Silk</Text>
			<Text {...textProps}>Duration: </Text>
			<Text {...textProps}>Created using p5</Text>
			<Text {...textProps}>Click to reset</Text>
		</VStack>
	),
}
