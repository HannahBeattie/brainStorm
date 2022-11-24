import { HStack, Text, VStack } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import Head from 'next/head'
import LandIm from '~/components/home/LandIm'
import Tag from '~/components/home/Tag'

export default function Home() {
	return (
		<div>
			<Head>
				<title>Create Next App</title>
				<meta name='description' content='Generated by create next app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<VStack spacing={{ base: 12, sm: 8 }}>
				<HStack>
					<LandIm />
					<Tag />
				</HStack>
			</VStack>
		</div>
	)
}
