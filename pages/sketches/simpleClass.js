class Simple {
	constructor(val) {
		this.val = val
		this.randVal = Math.random()
	}

	printVal() {
		console.log('My val is', this.val)
		console.log('My randVal is', this.randVal)
	}
}

const simp = new Simple(3)
simp.printVal()
simp.val === 3 // => true
