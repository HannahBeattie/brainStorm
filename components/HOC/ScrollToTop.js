import { Box, Button } from '@chakra-ui/react'
import { useEffect, useRef, useState } from 'react'
import { BsArrowUpCircle } from 'react-icons/bs'

export default function ScrollToTop() {
	const scrollRef = useRef(null)
	const [showTopBtn, setShowTopBtn] = useState(false)
	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY > 400) {
				setShowTopBtn(true)
			} else {
				setShowTopBtn(false)
			}
		})
	}, [])
	const goToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	}

	return (
		<>
			<Box
				display={{ base: 'none', md: 'auto' }}
				position={'relative'}
				ref={scrollRef}
				style={{ overflow: 'scroll' }}
			>
				{showTopBtn && (
					<Button
						position={'fixed'}
						left={-2}
						bottom={'7'}
						onClick={goToTop}
						bg={''}
						color={'gray.300'}
						_hover={{ bg: '', color: 'gray.300' }}
						_active={{ bg: '', color: 'gray.300' }}
						area-label={'scroll to top'}
						cursor={'pointer'}
						size={'lg'}
					>
						<BsArrowUpCircle />
					</Button>
				)}
			</Box>
		</>
	)
}
