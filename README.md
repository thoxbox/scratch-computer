This is "scratch-computer", a scratch-based computer with the mission of creating a fast and responsive virtual machine, including user input and rendering.

This project uses [lascra](https://github.com/bit-turtle/lascra) which compiles a text-based version of Scratch into Scratch. This project additionally generates lascra code using functions to improve readability.

# Build

## Before your first build
1. Create a new project in Scratch for this.
2. Export the "Sprite1" sprite and put the file into `this-repository/build/Sprite1.sprite3`

(The file `build/Sprite1.sprite3` is .gitignore'd to make the repository less large.)

## Steps
1. Run `node ./src/index.js`
2. Delete all existing sprites in the project.
3. From the "Choose a sprite" menu in Scratch, choose "Upload Sprite".
4. Navigate into `this-repository/build/sprite.sprite3`. Confirm your upload.
5. Run the project!