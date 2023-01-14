import React from 'react'
import { motion, useScroll } from 'framer-motion'
import { useMediaQuery } from '~/components/hooks/useMediaQuery'

export default function ScrollProgress() {
	const isPageWide = useMediaQuery('(min-width: 768px)')
	const { scrollYProgress } = useScroll()
	return (
		<>{isPageWide && <motion.div className='progress' style={{ scaleX: scrollYProgress }} />}</>
	)
}
