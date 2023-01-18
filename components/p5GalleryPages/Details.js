import { Text, useColorModeValue, VStack } from '@chakra-ui/react'
import LinkWrapper from '../base/LinkWrapper'
import StyledNextLink from '../base/StyledNextLink'

const textProps = { fontSize: 'sm', _light: { color: 'gitGray' }, _dark: { color: 'warmWhite' } }
const paragrapProps = { ...textProps, fontSize: 'sm' }

export const reef = {
	title: 'Reef',
	column1: (
		<VStack>
			<Text as={'div'} {...paragrapProps}>
				REEF is one of many works generated from an initial flow field inspired by Colourful
				Coding.
			</Text>
			<Text>
				I wanted to play with organic feeling interaction; I imagined a creature that is
				curious about the user; Following the mouse lazily and &apos;startling&apos; when
				clicked.
			</Text>
		</VStack>
	),
	column2: (
		<VStack>
			<Text>
				I purposefully did not include a reset button because of the variety of animation
				that occurs onscreen when left; From drifting coral to parasitic worms, to hulking,
				glowing planets.
			</Text>
			<Text {...textProps}>Interaction: MouseFollow, MouseClick </Text>
		</VStack>
	),
	column3: (
		<VStack>
			<Text {...textProps}>Title: Reef</Text>
			<Text {...textProps}>Duration: Infinate</Text>
			<Text {...textProps}>Best Viewed On Desktop</Text>

			<Text {...textProps} pt={2}>
				Initial flow field enspired by:
			</Text>
			<StyledNextLink
				{...textProps}
				targe={'blank'}
				fontSize={'md'}
				href={'https://www.youtube.com/watch?v=1-QXuR-XX_s'}
			>
				Colorful Coding: Coding Project #9
			</StyledNextLink>
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
