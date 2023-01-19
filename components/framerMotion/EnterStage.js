import { motion, useScroll, useTransform } from 'framer-motion'
import React from 'react'
import { useMediaQuery } from '../hooks/useMediaQuery'

export function EnterStage({ children, right }) {
	const { scrollYProgress } = useScroll()

	const x = right
		? useTransform(scrollYProgress, [0, 1], [500, 0])
		: useTransform(scrollYProgress, [0, 1], [-500, 0])

	return <motion.div style={{ x }}>{children}</motion.div>
}

export function EnterSmall({ children, right }) {
	const { scrollYProgress } = useScroll()

	const x = right
		? useTransform(scrollYProgress, [0, 1], [90, 0])
		: useTransform(scrollYProgress, [0, 1], [-90, 0])

	return <motion.div style={{ x }}>{children}</motion.div>
}

export function Unfold({ children }) {
	const { scrollYProgress } = useScroll()

	const y = useTransform(scrollYProgress, [0.5, 1], [-500, 0])

	return <motion.div style={{ y }}>{children}</motion.div>
}
