const {
} = shelter;

export function onLoad() {
	// optional
	// you can safely run onLoad actions at the top level!
	console.log("Hello, World from shelter!")
}

export function onUnload() {
	// required
	console.log("Goodbye, World from shelter!")
}
