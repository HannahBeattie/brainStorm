import { motion, useScroll, useTransform } from 'framer-motion'
import React from 'react'

//To be combined when framer motion media query docs can be found
export function EnterStage({ children, right }) {
	const { scrollYProgress } = useScroll()
	const item1 = useTransform(scrollYProgress, [0, 1], [200, 0])
	const item2 = useTransform(scrollYProgress, [0, 1], [-200, 0])
	const x = right ? item1 : item2
	return <motion.div style={{ x }}>{children}</motion.div>
}

export function EnterSmall({ children, right }) {
	const { scrollYProgress } = useScroll()
	let a = useTransform(scrollYProgress, [0, 1], [200, 0])
	let b = useTransform(scrollYProgress, [0, 1], [-100, 0])
	const x = right ? a : b
	return <motion.div style={{ x }}>{children}</motion.div>
}

export function Unfold({ children, num }) {
	const { scrollYProgress } = useScroll()

	const y = useTransform(scrollYProgress, [0.5, 1], [num, 0])

	return <motion.div style={{ y }}>{children}</motion.div>
}

export function UnfoldSm({ children }) {
	const { scrollYProgress } = useScroll()
	const y = useTransform(scrollYProgress, [0.5, 1], [-900, 30])
	return <motion.div style={{ y }}>{children}</motion.div>
}
