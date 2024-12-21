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

        // Bind event listeners
        this.spinBtn.addEventListener('click', () => this.spinChamber());
        this.shootBtn.addEventListener('click', () => this.shoot());
        this.restartBtn.addEventListener('click', () => this.restart());

        // Handle animation end
        this.chamberEl.addEventListener('transitionend', () => {
            this.chamberEl.style.transition = 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
        });
    }

    spinChamber() {
        this.chamber = Math.floor(Math.random() * 6);
        this.currentPosition = 0;
        this.currentRotation += 2160; // 6 full rotations
        this.chamberEl.style.transition = 'transform 3s cubic-bezier(0.4, 2, 0.2, 1)';
        this.chamberEl.style.transform = `rotate(${this.currentRotation}deg)`;
        this.spinBtn.disabled = true;
        
        setTimeout(() => {
            this.shootBtn.disabled = false;
        }, 3000);
    }

    shoot() {
        // Rotate to the next position
        this.currentRotation += 60; // 360/6 = 60 degrees per position
        this.chamberEl.style.transform = `rotate(${this.currentRotation}deg)`;

        if (this.currentPosition === this.chamber) {
            setTimeout(() => this.gameOver(), 500);
        } else {
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
    }
}

// Initialize the game
const game = new RussianRoulette(); 