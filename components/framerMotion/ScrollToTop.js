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

	const buttonProps = {
		bg: 'null',
		position: 'fixed',
		color: 'gray.300',
		color: 'gray.300',
		_hover: { bg: '', color: 'gray.300' },
		_active: { bg: '', color: 'gray.300' },

		cursor: 'pointer',
	}
	return (
		<>
			{showTopBtn && (
				<>
					<Button
						{...buttonProps}
						display={{ base: 'none', md: 'block' }}
						onClick={goToTop}
						ref={scrollRef}
						bottom='8'
						area-label={'scroll to top'}
						style={{ overflow: 'scroll' }}
						left={0}
					>
						<BsArrowUpCircle />
					</Button>

					<Button
						{...buttonProps}
						display={{ base: 'block', md: 'none' }}
						onClick={goToTop}
						ref={scrollRef}
						bottom='10vh'
						area-label={'scroll to top'}
						style={{ overflow: 'scroll' }}
						right={0}
						color='grayAlpha.800'
					>
						<BsArrowUpCircle />
					</Button>
				</>
			)}
		</>
	)
}
