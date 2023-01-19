import { motion, useScroll, useTransform } from 'framer-motion'
import React from 'react'

export function EnterStage({ children, right }) {
	const { scrollYProgress } = useScroll()

	const x = right
		? useTransform(scrollYProgress, [0, 1], [100, 0])
		: useTransform(scrollYProgress, [0, 1], [-300, 0])
	const xx = useTransform(scrollYProgress, [0, 1], [400, -100])

	return <motion.div style={{ x }}>{children}</motion.div>
}
