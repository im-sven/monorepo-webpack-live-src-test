Repo demoing yarn workspaces + webpack live builds from src

* Yarn workspaces - pkg-one has a dependency on pkg-two, and running `yarn` at the top level symlinks them together, while also installing other non-symlink dependencies from npm.
* Webpack live builds from src - webpack is configured to prefer the `/src` directory over the `dist` directory. This means any changes to `pkg-two/src/index.js` get picked up by webpack automatically which triggers a rebuild of `pkg-one`.

### Demo

*Build demo*

Just run `yarn` at the top level (make sure you are using yarn 1.3 or later) and it'll run webpack and execute the output bundle to show 'Hello world'

*Live updates*

To see the live rebuild getting triggered:

```sh
# start webpack in watch mode:
cd packages/pkg-one && yarn dev

# in a new terminal:
echo '//' >> packages/pkg-two/src/index.js # to trigger webpack
```