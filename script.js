class RussianRoulette {
    constructor() {
        this.chamber = -1;
        this.currentPosition = 0;
        this.shotCount = 0;
        this.surviveCount = 0;
        this.isGameOver = false;

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
    }

    spinChamber() {
        this.chamber = Math.floor(Math.random() * 6);
        this.currentPosition = 0;
        this.chamberEl.classList.add('spinning');
        this.spinBtn.disabled = true;
        
        setTimeout(() => {
            this.chamberEl.classList.remove('spinning');
            this.shootBtn.disabled = false;
        }, 3000);
    }

    shoot() {
        if (this.currentPosition === this.chamber) {
            this.gameOver();
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
        
        this.shotCountEl.textContent = '0';
        this.surviveCountEl.textContent = '0';
        this.gameOverEl.classList.add('hidden');
        this.spinBtn.disabled = false;
        this.shootBtn.disabled = true;
    }
}

// Initialize the game
const game = new RussianRoulette(); 