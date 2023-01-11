import { motion } from 'framer-motion'
import React from 'react'

export default function Grow({ children }) {
	return <motion.div animate={{ width: [0, 245] }}>{children}</motion.div>
}
