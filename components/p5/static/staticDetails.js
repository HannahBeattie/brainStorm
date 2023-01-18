import { Heading, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import LinkWrapper from '~/components/base/LinkWrapper'
import StyledNextLink from '~/components/base/StyledNextLink'

export const goldenThread = {
	title: 'Golden Thread',
	intro: (
		<VStack>
			<Text>
				Inspired by a flow field tutorial by{' '}
				<StyledNextLink
					href='https://bit.ly/3Zihhrd'
					fontStyle={'italic'}
					fontWeight={'bold'}
				>
					Colorful coding
				</StyledNextLink>
				, I began exploring the ways in which random variables could be used to manipulated
				the fields into resembling organic forms.
			</Text>
			<Text>
				As a watercolor painter, one of my favorite techniques is begining a painting with a
				random spatter of water and color and seeing which shapes emerge, then adding
				details and tweaks to allow others to see those shapes.
			</Text>
			<Text>
				My incling was towards trees and feathers, which to me mimicked the feel of
				intricately woven persion rugs and early japanese woodblock prints.
			</Text>
			<Text>
				To tease out these images, I layered flow fields over one-another, with the bottom
				layers having a high level of transperancy, with subsequent layers having less
				opacity.
			</Text>
			<Text>
				I tweaked the width of the lines and and volume of the noise to create
				pointalist-style 'stitches'.
			</Text>

			<Text>
				Finally, I added a subtle color gradient behind the noise-fields, that would act as
				an accent color and bring out areas of light and tone that was layered on top.
			</Text>
		</VStack>
	),
}

export const flowFields = {
	title: 'Testing : Perlin noise Flow',
	intro: (
		<VStack>
			<Text>
				These images represent further experements with flow fields. I specifically wanted
				to play with the idea of making veins and muscles.
			</Text>
			<Text>
				As a child, I used to draw muscles, veins and DNA sequences, to practice my
				technical drawing. I have always enjoyed the intricate mix of chaos and order in the
				micro view of the human body.
			</Text>
			<Text>
				One of the first things I noticed about my flow field code, is that the resulting
				sequences resembled veins or hair.
			</Text>

			<Text>
				To lean into this, I played with gradient backgrounds and layering, with thin,
				intricate semi-transparent white and light-pink lines causing the 'veins' to look
				three demensional and somewhat slick.
			</Text>
		</VStack>
	),
	items: [
		{
			src: '/static/14.jpeg',
		},
		{
			src: '/static/15.jpeg',
		},
		{
			src: '/static/16.jpeg',
		},
		{
			src: '/static/17.jpeg',
		},
		{
			src: '/static/18.jpeg',
		},
		{
			src: '/static/19.jpeg',
		},
	],
}

export const objects = {
	title: 'Testing: Object Class method',
	intro: (
		<VStack>
			<Text>
				Here, I have been playing around with creating an Object Class with a range of
				random color and line-width variables.
			</Text>
			<Text>
				The first two images are a response to a prompt by the{' '}
				<LinkWrapper
					href='https://www.youtube.com/watch?v=c3TeLi6Ns1E'
					fontStyle={'italic'}
					fontWeight={'bold'}
				>
					Coding Train's
				</LinkWrapper>
				Daniel Shiffman to create a basic drawing app.
			</Text>
			<Text>
				In this drawing app, the color of the object changes on click, based on a function
				that feeds the object a set of random color variables, within a small-ish range.
			</Text>
			<Text>
				The third image is an experement in which I tweaked the number of points I gave each
				object, because I wanted to try to create stars.
			</Text>
		</VStack>
	),
	items: [
		{
			src: '/static/10.png',
		},
		{
			src: '/static/11.jpeg',
		},
		{
			src: '/static/13.jpeg',
		},
	],
}
