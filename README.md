This is "scratch-computer", a scratch-based computer with the mission of creating a fast and responsive virtual machine, including user input and rendering.

This project uses [lascra](https://github.com/bit-turtle/lascra) which compiles a text-based version of Scratch into Scratch. This project additionally generates lascra code using functions to improve readability.

# Build

## Before your first build
1. Go to [lascra's releases](https://github.com/bit-turtle/lascra/releases) and get the most recent build for your operating system. Place the file into `this-repository/build`. Make sure to do this again when newer versions are added.
2. Create a new project in Scratch for this.
3. Export the "Sprite1" sprite and put the file into `this-repository/build`

## Steps
1. Run `node ./src/index.js`
2. Delete all existing sprites in the project.
3. From the "Choose a sprite" menu in Scratch, choose "Upload Sprite".
4. Navigate into `this-repository/build`. Confirm your upload.
5. Run the project!