import React from 'react'
import { useMediaQuery } from '../../../hooks/useMediaQuery'
import { motion, useScroll } from 'framer-motion'

export default function ScrollProgress() {
	const isPageWide = useMediaQuery('(min-width: 768px)')
	const { scrollYProgress } = useScroll()
	return (
		<>{isPageWide && <motion.div className='progress' style={{ scaleX: scrollYProgress }} />}</>
	)
}
