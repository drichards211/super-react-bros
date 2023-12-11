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
  * [ ] Add fireball animations.
  * [ ] Add PAUSE function with pop-up "About" screen.
  
Styling:
  * [ ] Edit all sprite sheets: add 1px padding between sprites. 
  * [ ] Re-calculate CSS animations to compensate for added sprite-padding.
        
Housekeeping:
  * [ ] Reduce volume on jump sfx.
  * [ ] Update this README with hero image.
     
Troubleshooting:
  * [ ] Browsers vary slightly when calculating sprite positions using %. Solution: add 1px padding to all sprite sheets. This will prevent the accidental display of neighboring sprites' edges when browsers disagree.
  
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
