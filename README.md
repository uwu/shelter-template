# [Your name here]'s shelter plugins

If you're reading this you should either change this README,
or you should run `npx degit uwu/shelter-template shelter-plugins`!

You should be using pnpm with this template ideally.

To get started run `pnpm i` and `pnpm lune dev plugins/hello-world`.
Ensure that Lune Dev Mode is enabled in Discord so that Lune can connect to it.

Now you can start debugging. The plugin will automatically reload after any change that you made.

To then install your finished plugin you can either rely on GitHub pages and it's workflow or you can build and host them here temporarily.

To build the plugins run `pnpm lune ci`. This will place the built plugins in `dist/`.
You can host that directory with `npx http-server dist --cors`.
Then you can install your plugin in shelter with this URL `http://localhost:8080/hello-world`.

If you have published this repo on GitHub the plugins will be built after every commit.

For the GitHub action to run flawlessly, make sure you have the following setting enabled:
`Repo settings > Actions > General > Workflow permissions > Read and write permissions`

And for it to be hosted you need to select the `gh-pages` branch after its been created by the GitHub action. You can do this in `Repo settings > Pages > Branch`.

If this worked, you will be able to install the plugin via `https://<username>.github.io/<repo>/hello-world`
