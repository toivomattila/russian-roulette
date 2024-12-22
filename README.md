# Russian Roulette Game

A web-based implementation of Russian Roulette using HTML, CSS, and JavaScript. The game features a realistic revolver chamber visualization with animations and sound effects.

🎮 **[Play the Game](https://russian-roulette.online)**

## Features

- Interactive revolver chamber visualization using SVG
- Smooth rotation animations for chamber spinning and trigger pulls
- Realistic sound effects:
  - Bullet loading/reloading
  - Chamber spinning
  - Empty chamber shots
  - Fatal gunshot
- Game statistics tracking:
  - Total shots taken
  - Successful survival shots
- Interactive help section with:
  - Game rules explanation
  - Probability calculations
  - Strategy tips
- Responsive design with a dark theme
- Simple and intuitive controls
- Progressive Web App (PWA) support
- Search Engine Optimization (SEO)
- Analytics tracking

## How to Play

1. Visit [russian-roulette.online](https://russian-roulette.online) or run locally
2. Click the "How to Play" button to learn the rules and probabilities
3. Click "Load & Spin Chamber" to start the game
   - This will load a bullet into a random chamber position
   - The chamber will spin with animation and sound effects
4. Once the chamber stops spinning, click "Pull Trigger" to test your luck
   - If the chamber is empty, you survive and can continue
   - If you hit the loaded chamber, game over!
5. Click "Play Again" to restart the game at any time

## Game Mechanics

### Rules
- The game simulates a six-chamber revolver with one bullet
- Each trigger pull rotates the chamber to the next position
- Surviving a shot means the current chamber was empty
- Hitting the loaded chamber ends the game

### Probabilities
- Initial shot: 5/6 chance of survival (83.33%)
- Second shot: 4/5 chance (80%)
- Third shot: 3/4 chance (75%)
- Fourth shot: 2/3 chance (66.67%)
- Fifth shot: 1/2 chance (50%)
- Final shot: 0% chance of survival

### Strategy
Consider restarting the game after surviving a few shots to maintain better odds of survival. The probability of survival decreases with each shot.

## Requirements

### Browser Support
The game works best in modern browsers that support:
- ES6+ JavaScript
- HTML5 Audio
- CSS3 Transforms and Transitions
- SVG

### SEO & Social Media
- `robots.txt` - Directs search engine crawlers and points to the sitemap
- `sitemap.xml` - Lists all pages for search engine indexing
- Open Graph meta tags for Facebook sharing
- Twitter Card meta tags for Twitter sharing
- Optimized preview images (1200x630)

### PWA Features
- Installable as a standalone app
- Offline support
- App icons in various sizes
- Custom theme colors
- Full-screen mode

## Technical Details

The game is built using:
- HTML5 for structure and audio elements
- CSS3 for styling and animations
- JavaScript (ES6+) for game logic
- SVG for chamber visualization
- Google Analytics for event tracking

### File Structure
```
russian-roulette/
├── index.html          # Main HTML file
├── styles.css          # Styling and animations
├── script.js          # Game logic
├── manifest.json      # PWA configuration
├── robots.txt         # Search engine directives
├── sitemap.xml        # Site structure for SEO
├── preview.jpg        # Social media preview image
├── favicon.ico        # Browser favicon
├── favicon-16x16.png  # Small favicon
├── favicon-32x32.png  # Large favicon
├── apple-touch-icon.png # iOS home screen icon
├── android-chrome-192x192.png # Android icon
├── android-chrome-512x512.png # Large Android icon
├── gunshot.mp3        # Fatal shot sound
├── empty-gun-shot.wav # Empty chamber sound
├── revolver-chamber-spin-ratchet-sound.mp3    # Spinning sound
└── revolver-ejecting-bullets-from-cylinder.wav # Reload sound
```

## Running Locally

1. Clone the repository:
```bash
git clone https://github.com/toivomattila/russian-roulette.git
```

2. Open `index.html` in a modern web browser

Note: The game requires a browser that supports HTML5 audio and modern JavaScript features.

## Analytics

The game tracks various events to improve user experience:
- Game starts
- Chamber spins
- Successful shots
- Game over events
- Game restarts
- Help section views

All tracking is anonymous and complies with privacy standards.

## Deployment

The game is deployed at [russian-roulette.online](https://russian-roulette.online) using static hosting.

## Improvement Ideas

### Gameplay Enhancements
- High score system with local storage
- Multiple game modes:
  - Two-player mode (taking turns)
  - Time trial mode (most survivals in 60 seconds)
  - Challenge mode (survive specific patterns)
- Achievement system for milestones
- Streak counter for consecutive survivals

### Visual Improvements
- Bullet visualization in chamber
- Muzzle flash animation on shots
- Blood splatter effect on game over
- Smoke effects after shots
- More detailed revolver graphics
- Dark/light theme toggle

### Audio Enhancements
- Background ambient music
- Volume controls for sound effects
- Additional sound effects:
  - Chamber clicking sounds
  - Dramatic tension music
  - Victory/defeat jingles

### Technical Features
- Service worker for complete offline support
- Save game state between sessions
- Share buttons for social media
- Keyboard controls (spacebar for shooting)
- Touch gesture support for mobile
- Multiplayer support via WebSocket

### User Experience
- Tutorial walkthrough for first-time players
- Statistics dashboard with graphs
- Personal best records
- Daily challenges
- Customizable chamber colors
- Accessibility improvements

Feel free to contribute to any of these improvements or suggest new ones via pull requests!

## License

This project is open source and available under the MIT License. 