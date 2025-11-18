# Getting Started with Create React App

## File Heirachy
Components - holds functions which returns HTMLS (the display)
Utils - Holds logic for components to call

## Install and Rum
From visual studio "Ctrl + `" to open terminal
install node, d3 then run:

npm install
npm install d3
npm start

## Base Features
Proc - process text area into strudel area but does not play
Proc and Play - Process and plays
Play - plays sound
Stop - Stops any sound

## UI featues
Volume slider - dynamic feedback with numbers changing but does not update until after slider is let go (personal preference)
Reverb slider - dynamic feedback with numbers changing but does not update until after slider is let go (personal preference)
BPM Controller - Int user input to enter specied beats per minute
Sounds Dropdown + Accordian - Select instruments which adds sounds of instruments I have created.
Sound Visualiser Button - Toggles ._scope() to instruments if they have it to add in built sound visualiser

## VIDEO
https://youtu.be/OCbyn5ZfEkc

## SONG
I created this song using 2 4 chord progressions for instrument. So 8 beats per instrument all synced up with each other.
A combination of instruments commonly used in a band, as well as double up instruments playing different tunes to help the sound not feel flat.
Specific combo of song is all my sounds except music as follows:

I would like to apply for bonus marks
setcps(140/60/4)
samples('https://raw.githubusercontent.com/Mittans/tidal-drum-machines/main/machines/tidal-drum-machines.json')
samples('https://raw.githubusercontent.com/tidalcycles/Dirt-Samples/master/strudel.json')
samples('github:algorave-dave/samples')


guitar1:
note("<[e2, b2, e3] [g2, b2, d3] [a2, e3, a3] [b2, f#3, b3] [e2, b2] [c3, g3] [g2, d3] [d3, a3]>")
.s('gm_acoustic_guitar_nylon').fast(8)
.ply("<1 1 1 1 >")
._scope()

guitar2:
note("<[f#2, c#3, f#3] [a2, c3, f3] [d2, a2, d3] [e2, g2, b2] [b2, d3, g3] [g2, c3, e3] [c2, e3, g3] [a2, d3, f#3]>")
.s('gm_electric_guitar_muted')
.release(0.125).decay("<0.4>")
.fast(8)
.ply("<0 0 1 1>")
._scope()

drums1:
sound(`
[bd bd - -] [bd bd bd bd],
[bd:1 bd:2 bd:3 bd:4] [hh:5 hh:5 hh:7 hh:7]
`).bank("RolandTR909").room(.2)
.ply("<0 0 1 1>")
._scope()

drums2:
sound(`
[-  -  -  - ] [-  -  -  - ] [-  -  -  - ] [oh:1 oh:1 oh:1 oh:1],
[- - - -] [- - - -] [hh hh hh hh] [hh:5 hh:5 hh:5 hh:5],
[-  -  - -] [- -  -  - ] [cp cp cp cp ] [ - - - -],
[-  -  - -] [- -  -  - ] [bd bd bd bd ] [ bd bd bd bd],
[bd:7 bd:7 bd:7 bd:7] [bd:5 bd:6 bd:7 bd:7] [bd:7 bd:7 bd:7 bd:7] [bd:5 bd:6 bd:7 bd:7]
`).bank("RolandTR808").slow(2)
.ply("<1 1 0 0>")
._scope()

bass1:
note("<[c#2] [c#1] [d1] [e1] [b0] [g1] [c1] [a0]>")
.s('gm_synth_bass_2').fast(8)
._scope()

bass2:
note("<[f1] [f1] [d1] [e1] [b0] [g1] [c1] [a0]>")
.s('gm_electric_bass_finger').fast(8)
._scope()

synthBase1:
sound("bd*2,<pink pink pink brown*2>*8")
.decay(.04).sustain(0)
._scope()

_piano1:
note(`<
[f#2 a2 c#3 f#3] [e3 c#3 a2 f#2],
[a2 c#3 e3 a3] [g3 e3 c#3 a2]
>`)
.fast(2)
.s('gm_epiano1')
.release(0.2)
._scope()

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `Ready for Part A`
UI - layout completed graph to go on the bottom

Volume slider functional: Sliding  the slider will change volume of output accordingly
Needs to be revised with regex as per volume slider video provided on course website

BPM function: Changing the BPM then hitting update will play the song with the new BPM

TODO - Instrument Dropdown logic and button implementation of each instrument, refactor the p1 and p2 buttons,
change logic of Process Text, Fix Modal Glitch for settings, save and upload JSON data, implement graph.

Git:
https://github.com/ArchdukeRoy/strudel_reactor

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
