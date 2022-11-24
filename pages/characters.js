import {
	Box,
	HStack,
	Image,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalOverlay,
	Text,
	useDisclosure,
	VStack,
} from '@chakra-ui/react'
import Head from 'next/head'
import React, { useState } from 'react'

function characters() {
	const monstPath = '/monsters'
	const monstCount = 15
	const monstUrls = []
	for (let ii = 0; ii < monstCount; ii++) {
		monstUrls.push(`${monstPath}/${ii}.${ii === 9 ? 'png' : 'jpeg'}`)
	}
	const btnRef = React.useRef()
	const { isOpen, onOpen, onClose } = useDisclosure()
	const [selected, setSelected] = useState(monstUrls[0])
	return (
		<>
			<Head>
				<title>Character Design</title>
			</Head>

			<HStack
				display={{ base: 'none', md: 'flex' }}
				maxW='100vw'
				w='100vw'
				overflowX='auto'
				alignItems='center'
				flex='1'
				spacing='8'
				p='8'
			>
				<Box minW={'20rem'}>
					<Text>
						Someday these critters will be playable and exist in their very own
						video-game world. Until that day, enjoy my working progresses. These
						characters exit in a world inhabited by insectoid creatures, who use trash
						to rebuild an environment long since decimated by the great bug wars...
						Check back for more.
					</Text>
				</Box>
				{monstUrls.map((url, idx) => (
					<Box
						key={`monst-${idx}`}
						minW={'20rem'}
						onClick={() => {
							setSelected(url)
							onOpen()
						}}
						cursor='pointer'
					>
						<Image src={url} alt={`monster image number ${idx}`} />
					</Box>
				))}
			</HStack>
			<>
				<Modal isOpen={isOpen} onClose={onClose}>
					<ModalOverlay />
					<ModalContent p='0'>
						<ModalCloseButton color={'white'} />
						<ModalBody p='0'>
							<Box minW={'20rem'} onClick={onOpen}>
								<Image src={selected} alt={`an image of a monster`} />
							</Box>
						</ModalBody>
					</ModalContent>
				</Modal>
			</>

			<VStack
				display={{ base: 'flex', md: 'none' }}
				alignItems='stretch'
				flex='1'
				spacing='8'
				pb='8'
			>
				<Box paddingBottom={3} paddingTop={2} p={5}>
					<Text>
						Someday these critters will be playable and exist in their very own
						video-game world. Until that day, enjoy my working progresses.
						<br />
						<br></br>
						These characters exit in a world inhabited by insectoid creatures, who use
						trash to rebuild an environment long since decimated by the great bug
						wars...
						<br />
						<br></br>
						Check back for more.
					</Text>
				</Box>
				{monstUrls.map((url, idx) => (
					<Box key={`monst-${idx}`}>
						<Image src={url} alt={`monster image number ${idx}`} />
					</Box>
				))}
			</VStack>
		</>
	)
}

export default characters
