export const uID = (function*() {
	while (true)
		yield '_' +
			Math.random()
				.toString(36)
				.substr(2, 9)
})()
