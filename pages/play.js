import dynamic from 'next/dynamic'
import SketchWrapper from '~/components/pages/p5/generative/SketchWrapper'

// don't load p5 on server
const ReactP5Wrapper = dynamic(() => import('react-p5-wrapper').then((mod) => mod.ReactP5Wrapper), {
	ssr: false,
})

function life(p5) {
	let w
	let cols
	let rows
	let board
	let next
	let frameRate

	p5.setup = () => {
		frameRate = 20
		let canvas = p5.createCanvas(800, 500)
		w = 20
		cols = Math.floor(p5.width / w)
		rows = Math.floor(p5.height / w)
		board = new Array(cols)
		for (let i = 0; i < cols; i++) {
			board[i] = new Array(rows)
		}
		next = new Array(cols)
		for (let i = 0; i < cols; i++) {
			next[i] = new Array(rows)
		}
		init()
	}

	p5.draw = () => {
		p5.background(255)
		generate()
		for (let i = 0; i < cols; i++) {
			for (let j = 0; j < rows; j++) {
				if (board[i][j] == 1) p5.fill(0)
				else p5.fill(255)
				p5.stroke(0)
				p5.rect(i * w, j * w, w - 1, w - 1)
			}
		}
	}

	// reset board when mouse is pressed
	p5.mousePressed = () => {
		init()
	}

	// Fill board randomly
	function init() {
		for (let i = 0; i < cols; i++) {
			for (let j = 0; j < rows; j++) {
				// Lining the edges with 0s
				if (i == 0 || j == 0 || i == cols - 1 || j == rows - 1) board[i][j] = 0
				// Filling the rest randomly
				else board[i][j] = p5.floor(p5.random(2))
				next[i][j] = 0
			}
		}
	}

	// The process of creating the new generation
	function generate() {
		// Loop through every spot in our 2D array and check spots neighbors
		for (let x = 1; x < cols - 1; x++) {
			for (let y = 1; y < rows - 1; y++) {
				// Add up all the states in a 3x3 surrounding grid
				let neighbors = 0
				for (let i = -1; i <= 1; i++) {
					for (let j = -1; j <= 1; j++) {
						neighbors += board[x + i][y + j]
					}
				}

				// A little trick to subtract the current cell's state since
				// we added it in the above loop
				neighbors -= board[x][y]
				// Rules of Life
				if (board[x][y] == 1 && neighbors < 2) next[x][y] = 0 // Loneliness
				else if (board[x][y] == 1 && neighbors > 3) next[x][y] = 0 // Overpopulation
				else if (board[x][y] == 0 && neighbors == 3) next[x][y] = 1 // Reproduction
				else next[x][y] = board[x][y] // Stasis
			}
		}

		// Swap!
		let temp = board
		board = next
		next = temp
	}
}

export default function play({ props }) {
	return <SketchWrapper sketch={life} {...props} />
}
