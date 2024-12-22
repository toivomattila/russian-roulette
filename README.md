# Russian Roulette Game

A web-based implementation of Russian Roulette using HTML, CSS, and JavaScript. The game features a realistic revolver chamber visualization with animations and sound effects.

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
- Responsive design with a dark theme
- Simple and intuitive controls

## How to Play

1. Click "Load & Spin Chamber" to start the game
   - This will load a bullet into a random chamber position
   - The chamber will spin with animation and sound effects
2. Once the chamber stops spinning, click "Pull Trigger" to test your luck
   - If the chamber is empty, you survive and can continue
   - If you hit the loaded chamber, game over!
3. Click "Play Again" to restart the game at any time

## Technical Details

The game is built using:
- HTML5 for structure and audio elements
- CSS3 for styling and animations
- JavaScript (ES6+) for game logic
- SVG for chamber visualization

### File Structure
```
russian-roulette/
├── index.html          # Main HTML file
├── styles.css          # Styling and animations
├── script.js          # Game logic
├── gunshot.mp3        # Fatal shot sound
├── empty-gun-shot.wav # Empty chamber sound
├── revolver-chamber-spin-ratchet-sound.mp3    # Spinning sound
└── revolver-ejecting-bullets-from-cylinder.wav # Reload sound
```

## Running the Game

1. Clone the repository:
```bash
git clone https://github.com/toivomattila/russian-roulette.git
```

2. Open `index.html` in a modern web browser

Note: The game requires a browser that supports HTML5 audio and modern JavaScript features.

## Browser Compatibility

The game works best in modern browsers that support:
- ES6+ JavaScript
- HTML5 Audio
- CSS3 Transforms and Transitions
- SVG

## License

This project is open source and available under the MIT License. 