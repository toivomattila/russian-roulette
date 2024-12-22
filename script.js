class RussianRoulette {
    constructor() {
        this.chamber = -1;
        this.currentPosition = 0;
        this.shotCount = 0;
        this.surviveCount = 0;
        this.isGameOver = false;
        this.currentRotation = 0;

        // DOM elements
        this.spinBtn = document.getElementById('spinBtn');
        this.shootBtn = document.getElementById('shootBtn');
        this.restartBtn = document.getElementById('restartBtn');
        this.chamberEl = document.querySelector('.chamber');
        this.gameOverEl = document.getElementById('gameOver');
        this.shotCountEl = document.getElementById('shotCount');
        this.surviveCountEl = document.getElementById('surviveCount');
        this.helpBtn = document.getElementById('helpBtn');
        this.helpModal = document.getElementById('helpModal');
        this.closeBtn = document.querySelector('.close-button');
        this.bulletEl = document.querySelector('.bullet');

        // Audio elements
        this.reloadSound = document.getElementById('reloadSound');
        this.spinSound = document.getElementById('spinSound');
        this.emptyShootSound = document.getElementById('emptyShootSound');
        this.gunshotSound = document.getElementById('gunshotSound');

        // Bind event listeners
        this.spinBtn.addEventListener('click', () => this.loadAndSpin());
        this.shootBtn.addEventListener('click', () => this.shoot());
        this.restartBtn.addEventListener('click', () => this.restart());
        this.helpBtn.addEventListener('click', () => this.showHelp());
        this.closeBtn.addEventListener('click', () => this.hideHelp());
        window.addEventListener('click', (e) => this.handleOutsideClick(e));

        // Handle animation end
        this.chamberEl.addEventListener('transitionend', () => {
            this.chamberEl.style.transition = 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
        });

        // Track game start
        gtag('event', 'game_start', {
            'event_category': 'game',
            'event_label': 'Game Started'
        });
    }

    showHelp() {
        this.helpModal.classList.remove('hidden');
        // Track help view
        gtag('event', 'view_help', {
            'event_category': 'game',
            'event_label': 'Help Viewed'
        });
    }

    hideHelp() {
        this.helpModal.classList.add('hidden');
    }

    handleOutsideClick(event) {
        if (event.target === this.helpModal) {
            this.hideHelp();
        }
    }

    async loadAndSpin() {
        this.spinBtn.disabled = true;
        
        // Show bullet loading animation
        this.bulletEl.style.transform = 'translate(50px, 100px)';
        this.bulletEl.classList.add('bullet-loading');
        
        // Wait for bullet to appear
        await new Promise(resolve => setTimeout(resolve, 300));
        
        // Move bullet to chamber
        this.bulletEl.classList.add('bullet-loaded');
        
        // Wait for bullet to move
        await new Promise(resolve => setTimeout(resolve, 500));
        
        // Play reload sound
        this.reloadSound.currentTime = 0;
        await this.reloadSound.play();
        
        // Wait for reload sound
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Hide bullet and spin chamber
        this.bulletEl.style.opacity = 0;
        await this.spinChamber();
    }

    async spinChamber() {
        this.chamber = Math.floor(Math.random() * 6);
        this.currentPosition = 0;
        
        // Track chamber spin
        gtag('event', 'spin_chamber', {
            'event_category': 'game',
            'event_label': 'Chamber Spun'
        });
        
        // Play spin sound and start animation
        this.spinSound.currentTime = 0;
        this.spinSound.play();
        
        this.currentRotation += 2160; // 6 full rotations
        this.chamberEl.style.transition = 'transform 3s cubic-bezier(0.4, 2, 0.2, 1)';
        this.chamberEl.style.transform = `rotate(${this.currentRotation}deg)`;
        
        setTimeout(() => {
            this.shootBtn.disabled = false;
        }, 3000);
    }

    shoot() {
        // Rotate to the next position
        this.currentRotation += 60; // 360/6 = 60 degrees per position
        this.chamberEl.style.transform = `rotate(${this.currentRotation}deg)`;

        if (this.currentPosition === this.chamber) {
            // Track game over
            gtag('event', 'game_over', {
                'event_category': 'game',
                'event_label': 'Game Over',
                'value': this.surviveCount
            });
            
            // Play gunshot sound for loaded chamber
            this.gunshotSound.currentTime = 0;
            this.gunshotSound.play();
            setTimeout(() => this.gameOver(), 500);
        } else {
            // Track successful shot
            gtag('event', 'survive_shot', {
                'event_category': 'game',
                'event_label': 'Survived Shot',
                'value': this.surviveCount + 1
            });
            
            // Play empty chamber sound
            this.emptyShootSound.currentTime = 0;
            this.emptyShootSound.play();
            this.surviveCount++;
            this.surviveCountEl.textContent = this.surviveCount;
        }

        this.shotCount++;
        this.shotCountEl.textContent = this.shotCount;
        this.currentPosition = (this.currentPosition + 1) % 6;
    }

    gameOver() {
        this.isGameOver = true;
        this.gameOverEl.classList.remove('hidden');
        this.shootBtn.disabled = true;
        this.spinBtn.disabled = true;
    }

    restart() {
        // Track game restart
        gtag('event', 'restart_game', {
            'event_category': 'game',
            'event_label': 'Game Restarted',
            'value': this.surviveCount
        });
        
        this.chamber = -1;
        this.currentPosition = 0;
        this.shotCount = 0;
        this.surviveCount = 0;
        this.isGameOver = false;
        this.currentRotation = 0;
        
        this.shotCountEl.textContent = '0';
        this.surviveCountEl.textContent = '0';
        this.gameOverEl.classList.add('hidden');
        this.spinBtn.disabled = false;
        this.shootBtn.disabled = true;
        this.chamberEl.style.transform = 'rotate(0deg)';
        
        // Reset bullet
        this.bulletEl.style.transform = '';
        this.bulletEl.classList.remove('bullet-loading', 'bullet-loaded');
        this.bulletEl.style.opacity = 0;
    }
}

// Initialize the game
const game = new RussianRoulette(); 