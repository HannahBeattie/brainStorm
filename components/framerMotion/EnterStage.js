import { motion, useScroll, useTransform } from 'framer-motion'
import React from 'react'
import { useMediaQuery } from '../hooks/useMediaQuery'

export function EnterStage({ children, right }) {
	const { scrollYProgress } = useScroll()
	const item1 = useTransform(scrollYProgress, [0, 1], [300, 0])
	const item2 = useTransform(scrollYProgress, [0, 1], [-300, 0])

	const x = right ? item1 : item2

	return <motion.div style={{ x }}>{children}</motion.div>
}

export function EnterSmall({ children, right }) {
	const { scrollYProgress } = useScroll()
	let a = useTransform(scrollYProgress, [0, 1], [90, 0])
	let b = useTransform(scrollYProgress, [0, 1], [-90, 0])

	const x = right ? a : b

	return <motion.div style={{ x }}>{children}</motion.div>
}

export function Unfold({ children }) {
	const { scrollYProgress } = useScroll()

	const y = useTransform(scrollYProgress, [0.5, 1], [-500, 0])

	return <motion.div style={{ y }}>{children}</motion.div>
}
