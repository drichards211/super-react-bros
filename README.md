# Super React Bros

Not a videogame: an interactive state demo starring everybody's favorite plumbers.

Cutting-edge meets 80's retro: A responsive, neumorphic layout compliments classic videogame sprite animation.

Redux store tracks the state of our plumber friend: # of coins collected, lives remaining, current physical action (walking, jumping, etc.), and power-ups are all tracked.
React-Hooks monitors the Redux store and automatically updates the appearance of the Mario component in real-time.

Over a dozen different buttons control items, enemies, and other physical actions. 
CSS sprite-animations and retro SFX let you see and hear the results of your interactions.

> A live version of the app is located here: [https://drichards211.github.io/super-react-bros/)

Tech stack includes: *HTML, CSS, ES6, React/Redux, Node.js, Webpack, Adobe: Photoshop, Audition*

Features to be added are listed below, along with required bugfixes and styling notes.

Features Under Development:
  * [ ] Add additional animations for physical actions.
  * [ ] Add PAUSE function with pop-up "About" screen.
  
Styling:
  * [ ] Edit all sprite sheets: add 1px padding between sprites. 
  * [ ] Re-calculate CSS animations to compensate for added sprite-padding.
        
Housekeeping:
  * [ ] Reduce volume on jump sfx.
  * [ ] Update this README with hero image.
     
Troubleshooting:
  * [ ] Browsers vary slightly when calculating sprite positions using %. Solution: add 1px padding to all sprite sheets. This will prevent the accidental display of neighboring sprites' edges when browsers disagree.
  
xxxxxx

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
