class Boss extends Opponent {
    constructor(game){
        super(game);
        
        this.myImage.src = BOSS_PICTURE;
        this.myImageDead = BOSS_PICTURE_DEAD;
        this.speed = 2 * this.speed;
        
    }

    die() {
        this.game.score++;
        if (!this.dead) {
            
            setTimeout(() => {
                this.game.endGame();
                
            }, 2000);
            
            super.die();
        }

    }

}