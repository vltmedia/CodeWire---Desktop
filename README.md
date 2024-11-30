# CodeWire - Desktop App
This is a desktop wrapper for the CodeWire web app. It is built using Electron.js.

# Changes
The CodeWire source code that is used in this app is a fork of the original CodeWire source code. Reason being, there is added firebase and other support in the forked version. The original CodeWire source code can be found [here](https://github.com/ayushk7/CodeWire).

# Installation
1. Clone the repository
   1. `git clone  --recurse-submodules https://github.com/vltmedia/CodeWireDesktop`
   2. Make sure you have the `--recurse-submodules` flag set, as this repository uses submodules.
2. Run `npm install` to install all the dependencies.

# Running the app
1. Run `npm start` to start the app.

# Building the app
## Windows
1. Run `npm run package-win` to build the app.
## MacOS
1. Run `npm run package-mac` to build the app.
## Linux
1. Run `npm run package-linux` to build the app.