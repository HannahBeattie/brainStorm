import { Text, VStack } from '@chakra-ui/react'
import StyledNextLink from '../../base/StyledNextLink'

const textProps = { fontSize: 'sm', _light: { color: 'gitGray' }, _dark: { color: 'warmWhite' } }
const paragrapProps = {
	...textProps,
	fontSize: 'sm',
	spacing: { base: 4, md: 2 },
	alignItems: 'stretch',
}
const indent = { base: 0, md: 0 }

export const reef = {
	title: 'Reef',
	column1: (
		<VStack {...paragrapProps}>
			<Text>
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
		<VStack {...paragrapProps}>
			<Text>
				I purposefully did not include a reset button because of the variety of animation
				that occurs onscreen when left; From drifting coral to parasitic worms, to hulking,
				glowing planets.
			</Text>
			<Text {...textProps} pt={indent}>
				Interaction: MouseFollow, MouseClick{' '}
			</Text>
		</VStack>
	),
	column3: (
		<VStack>
			<Text {...textProps}>Title: Reef</Text>
			<Text {...textProps}>Duration: Infinite</Text>
			<Text {...textProps}>Best Viewed On Desktop</Text>

			<Text {...textProps} pt={indent}>
				Initial flow field inspired by:
			</Text>
			<StyledNextLink
				{...textProps}
				targe={'blank'}
				href={'https://www.youtube.com/watch?v=1-QXuR-XX_s'}
			>
				Colorful Coding: Coding Project #9
			</StyledNextLink>
		</VStack>
	),
}

export const geo = {
	title: 'Geo Twirl',
	column1: (
		<VStack {...paragrapProps}>
			<Text>
				GEO TWIRL is emblematic of my current enjoyment of flow fields and Perlin noise.
			</Text>
			<Text>
				On a light background, you can see the way in which the line widths and opacity vary
				as the vectors are drawn, creating a pencil-and-ink effect.
			</Text>
			<Text>
				On a dark background, the shift between ghostly grey lines and stark white makes the
				ripples appear three-dimensional, with a glowing, firm ridge.
			</Text>
		</VStack>
	),
	column2: (
		<VStack {...paragrapProps}>
			<Text>Click on canvas to reset animation</Text>
			<Text pt={indent}>Try toggling dark and light mode </Text>
			<Text>on this page</Text>
		</VStack>
	),
	column3: (
		<VStack>
			<Text {...textProps}>Title: Geo Twirl</Text>
			<Text {...textProps}>Duration: Infinite</Text>
		</VStack>
	),
}

export const silk = {
	title: 'Silk',
	column1: (
		<VStack {...paragrapProps}>
			<Text>
				As a child, I would spend hours tracing the intricate patterns of the dusty old
				knock-off Persian rug that lived in our kitchen.
			</Text>
			<Text>
				I was fascinated by the level of detail and how the tension and pull of the tiny
				threads warped detail into existence.
			</Text>
			<Text>
				Later, I discovered intricate Japanese woodblock prints, that used tiny dots and the
				absence of marks to render marks on a page with ink.
			</Text>
			<Text>
				This work was an attempt to massage out the imagery that I immediately saw in the
				form and movement of the flowfield, so that others could see it too; Something
				delicate and organic that could be spun with light, bunched-up threads.{' '}
			</Text>
		</VStack>
	),
	column2: (
		<Text {...paragrapProps}>
			The {`'thread'`} texture was created by layering vectors with different opacity and
			widths onto one-another and creating vectors that left small spaces between one-another.
		</Text>
	),
	column3: (
		<VStack>
			<Text {...textProps}>Title: Silk</Text>
			<Text {...textProps}>Duration: Infinite </Text>
			<Text {...textProps}>Click to reset</Text>
		</VStack>
	),
}

export const spark = {
	title: 'Spark',
	column1: (
		<VStack {...paragrapProps}>
			<Text>
				SPARK is essentially a continuation of SILK, only this time I created a gradient
				background that shifts slightly when the canvas is reset; Creating different
				sensations of dawn or/and dusk. I can imagine using a similar effect to create a
				time-based work that transitions throughout the day.{' '}
			</Text>
		</VStack>
	),
	column2: (
		<VStack {...paragrapProps}>
			<Text>Click on the canvas to see the background gradient shift</Text>
		</VStack>
	),
	column3: (
		<VStack>
			<Text {...textProps}>Title: Spark</Text>
			<Text {...textProps}>Duration: Infinite </Text>
			<Text {...textProps}>Click to reset</Text>
		</VStack>
	),
}

export const electric = {
	title: 'Electric Vine',
	column1: (
		<VStack {...paragrapProps}>
			<Text>
				ELECTRIC VINE was another variation of the same flow field that I&apos;ve played
				with a lot throughout these pages. I was fascinated by the way the patterns on the
				canvas resembled microscopic chlorophyll, the light tangled roots-and-veins of trees
				and parasites.
			</Text>
		</VStack>
	),
	column2: (
		<VStack {...paragrapProps}>
			<Text>
				Click on the canvas; Does the shift in colors change what the forms resemble to you?
			</Text>
		</VStack>
	),
	column3: (
		<VStack>
			<Text {...textProps}>Title: Electric Vine</Text>
			<Text {...textProps}>Duration: Infinite </Text>
			<Text {...textProps}>Click to reset</Text>
		</VStack>
	),
}
