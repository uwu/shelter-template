const {
	util: { log }
} = shelter;

export function onLoad() {
	// you can safely run onLoad actions at the top level!
	log("Hello, World from shelter!")
}

export function onUnload() {
	log("Goodbye, World from shelter!")
}
