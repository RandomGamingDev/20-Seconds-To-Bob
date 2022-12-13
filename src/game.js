// add exploding bombs, regular asteroids and lasersv
// trailing and dashing particles

class GameScene {
  start() {
    this.timer = 0;
    this.effect = new Effect(0, 0.99);
    this.player = new Player(playerWidth, playerHeight, 200, 200, 0.05, circleSize, minCircleSize, timeLimit);
    this.enemies = new LinkedList();
  }
  
  play() {
    background(255, 0, 0);
    
    this.effect.apply();
    
    this.player.play(this, this.timer);
    
    // Add more asteroids based on time
    
    let previousEnemy = null;
    for (let enemy = this.enemies.head; enemy.data != null; enemy = enemy.next) {
      enemy.data.play(previousEnemy, enemy);
      previousEnemy = enemy;
    }
    
    this.timer += deltaTime;
    if (this.timer > timeLimit * 1000) {
      this.player.sprite.remove();
      for (let enemy = this.enemies.head; enemy.data != null; enemy = enemy.next) {
        enemy.remove();
      }
      sceneManager.currentScene = winSceneId;
      sceneManager.start();
    }
    push();
    fill(255);
    textSize(40);
    text(String(timeLimit - Math.round(this.timer) / 1000).substring(0, 5), 200, 50);
    pop();
  }
}