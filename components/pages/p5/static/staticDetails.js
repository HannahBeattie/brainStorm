import { Heading, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import LinkWrapper from '~/components/base/LinkWrapper'
import StyledNextLink from '~/components/base/StyledNextLink'

export const goldenThread = {
	title: 'Golden Thread',
	intro: (
		<VStack>
			<Text>
				After initially following a tutorial by
				<StyledNextLink
					href='https://bit.ly/3Zihhrd'
					fontStyle={'italic'}
					fontWeight={'bold'}
				>
					{' '}
					Colorful coding{' '}
				</StyledNextLink>
				on flowfields, I began toying with random variables, and ways in which they could be
				used to manipulated the fields into resembling organic forms.
			</Text>
			<Text>
				As a watercolor painter, one of my favorite techniques is beginning with a random
				spatter of pigment and seeing what is suggested to me by the form of it and what I
				can do to make that suggestion visable to others.
			</Text>
			<Text>
				My inkling in these works were towards trees and feathers, which reminded me of
				intricately woven persion rugs and early japanese woodblock prints.
			</Text>
			<Text>
				To emphasise these forms, I layered flow fields over one-another, with the bottom
				layers having a high level of transparency and subsequent layers being more opaque.
			</Text>
			<Text>
				I tweaked the width of the lines and and volume of the noise to create
				pointalist-style &apos;stitches&apos;.
			</Text>

			<Text>
				Finally, I added a subtle color gradient behind the noise-fields, that would act as
				an accent color and bring out areas of light and tone that was layered on top.
			</Text>
		</VStack>
	),
}

export const flowFields = {
	title: 'Perlin Noise Tests',
	intro: (
		<VStack>
			<Text>
				These images represent further experiments with flow fields. I specifically wanted
				to play with the idea of making veins and muscles.
			</Text>
			<Text>
				As a child, I used to draw muscles, veins and DNA sequences, as a type of line-work
				practice. I have always enjoyed the intricate mix of chaos and control in the micro
				anatomy of the human body.
			</Text>
			<Text>
				One of the first things I noticed about the flowfields I coded, was their
				resemblance to veins or hair.
			</Text>

			<Text>
				I began to play with gradient backgrounds and layering; With thin, intricate
				semi-transparent white and light-pink lines causing the &apos;veins&apos; to look
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
	title: 'Drawing Shapes with Object-Oriented Programming',
	intro: (
		<VStack>
			<Text>
				These drawings are a response to a prompt by the{' '}
				<LinkWrapper
					href='https://www.youtube.com/watch?v=c3TeLi6Ns1E'
					fontStyle={'italic'}
					fontWeight={'bold'}
				>
					Coding Train&apos;s
				</LinkWrapper>{' '}
				Daniel Shiffman to create a basic drawing app.
			</Text>
			<Text>
				I decided to experiment with OOP and created a class for a shape that is
				instantiated and drawn each time a user clicks on the canvas.
			</Text>
			<Text>
				The color of the lines and the number of points in the shape changes randomly on
				click.
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
