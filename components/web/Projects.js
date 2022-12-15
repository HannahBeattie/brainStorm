import { Grid, GridItem, Text } from '@chakra-ui/react'
import Feature from '~/components/base/Feature'
import MyLink from '~/components/MyLink'

export default function Projects() {
	const cardProps = [
		{
			src: '/portfolio/momo.jpeg',
			label: '2022',
			alt: 'a screen-grab of the studio monkey webpage',
			heading: 'Studio Monkey',
			buttonText: 'studiomomo.io',
			href: 'https://www.studiomomo.io',
			details: (
				<>
					<Text>
						Studio Monkey is a premier VFX management tool used my many high profile
						studios. I worked in close dialog with CEO Zach Tucker to create a visual
						brand identity, logo and website aesthetic that fit the ethos and intention
						of the company — functional, minimal, playful and highly customer-focused.
						The website was a collaboration between myself and Mikey Lemmon who handled
						the backend functionality and software integration, while I focused on the
						landing page and sustaining a constant visual and colour story.
					</Text>
				</>
			),
		},
		{
			src: '/portfolio/xit.jpeg',
			label: '2022',
			alt: 'a screen-grab of the xit app',
			heading: 'X-it',
			buttonText: 'x-it homepage',
			href: 'https://x-it.vercel.app',
			details: (
				<>
					<Text>
						X-it is a lightweight plug-in that allows users to vote ‘out’ of upcoming
						calendar events, anonymously.
					</Text>
					<br />
					<Text>
						This project (and accompanying website) constituted my final (solo)
						submission for
						<MyLink color={'white'} href='https://devacademy.co.nz/' fontWeight={'900'}>
							{' '}
							Dev Academy Aotearoa.
						</MyLink>
					</Text>
					<br />
					<Text>
						X-it will continue to evolve, with the collaborative effort of{' '}
						<MyLink color={'white'} href='https://mikeylemmon.com/' fontWeight={'900'}>
							Mikey Lemmon.
						</MyLink>
					</Text>
				</>
			),
		},

		{
			src: '/portfolio/mrGood.jpeg',
			label: '2022',
			alt: 'A screen grab of my app, "Mr Verygood", that gives users a virtual pep talk',
			heading: ' Mr Verygood',
			buttonText: 'Meet Mr Verygood',
			href: 'https://mr-verygood.herokuapp.com',
			details: (
				<>
					<Text>
						A somewhat goofy solo project I completed during my study at Dev Academy.
					</Text>

					<Text>
						&apos;Mr Verygood&apos; is a virtual friend, that gives users a random
						pep-talk on click.
					</Text>
				</>
			),
		},
		{
			src: '/portfolio/dress.png',
			label: '2022',
			alt: 'A screen grab of "dress the slug"',
			buttonText: 'Dress the slug',
			href: '/slug',
			heading: 'Dress the slug',
			details: (
				<>
					<Text>
						A fun dress-up game I originally created while studying at Dev acadamy.
						Featuring original illustrations by myslef of a slug whose lived an exciting
						life.
					</Text>
				</>
			),
		},
		{
			src: '/portfolio/todo.jpeg',
			label: '2022',
			alt: 'A basic to-do app"',
			heading: 'To do',
			details: (
				<>
					<Text>
						A basic, full-stack todo application that stores completed and uncompleted
						tasks in a SeQuaLite database using redux toolkit. Completed as part of a
						full stack skill assessment for Dev Academy.
					</Text>
				</>
			),
		},
	]

	const cards = cardProps.map((props, idx) => (
		<GridItem key={`project-${idx}`} px={0} display='flex'>
			<Feature {...props} />
		</GridItem>
	))
	return (
		<>
			<Grid
				px={{ sm: 8 }}
				columnGap={{ sm: '4' }}
				rowGap={{ sm: '4' }}
				templateColumns={{
					base: 'repeat(1, 1fr)',
					md: 'repeat(2, 1fr)',
					xl: 'repeat(3, 1fr)',
				}}
			>
				{cards}
			</Grid>
		</>
	)
}
