import { useColorModeValue, VStack } from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import useMeasure from 'react-use-measure'

// don't load p5 on server
const ReactP5Wrapper = dynamic(() => import('react-p5-wrapper').then((mod) => mod.ReactP5Wrapper), {
	ssr: false,
})

export default function SketchWrapper({ sketch, props }) {
	const [ref, bounds] = useMeasure()
	let stroke = useColorModeValue([1, 1, 1], [240, 240, 240])
	return (
		<VStack alignContent={'stretch'} flex={1} w={'100%'} className={'specialCaseNoSelect'}>
			<VStack ref={ref} minH={'500'} flex={1} minW={'90vw'} cursor='pointer'>
				{bounds.height > 0 && (
					<ReactP5Wrapper
						className={'specialCaseNoSelect'}
						sketch={sketch}
						stroke={stroke}
						h={bounds.height || 300}
						w={bounds.width || 500}
						{...props}
					/>
				)}
			</VStack>
		</VStack>
	)
}
