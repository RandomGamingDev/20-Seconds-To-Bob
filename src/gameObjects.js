class SceneManager {
  start() {
    this.scenes[this.currentScene].start();
  }
  
  constructor(scenes, currentScene) {
    this.scenes = scenes;
    this.currentScene = currentScene;
    this.start();
  }
  
  play() {
    this.scenes[this.currentScene].play();
  }
}

class Effect {
  constructor(shakeIntensity, shakeFriction) {
    this.shakeIntensity = shakeIntensity;
    this.shakeFriction = shakeFriction;
  }
  
  shake() {
    translate(
        random(-this.shakeIntensity, this.shakeIntensity),
        random(-this.shakeIntensity, this.shakeIntensity)
      );
    this.shakeIntensity *= this.shakeFriction ** deltaTime;
  }
  
  apply() {
    this.shake();
  }
}

class Player {
  constructor(width, height, x, y, speed, circleSize, minCircleSize, time) {
    this.sprite = new Sprite(x, y, [-80, 360 / 3, 3]);
    this.sprite.shapeColor = color(255, 255, 255);
    this.sprite.width = width;
    this.sprite.height = height;
    this.circleX = x;
    this.circleY = y;
    this.circleVelX = clamp(Math.random(), 0.5, 0.75);
    this.circleVelY = clamp(Math.random(), 0.5, 0.75);
    this.maxCircleSize = circleSize;
    this.minCircleSize = minCircleSize;
    this.time = time * 1000;
    this.speed = playerSpeed;
    this.rotationSpeed = rotationSpeed;
    this.rotationFriction = rotationFriction;
    this.velocityFriction = velocityFriction;
  }
  
  screenBorder() {
    if (this.sprite.x < 0)
      this.sprite.x = 0;
    else if (this.sprite.x > width)
      this.sprite.x = width;
    if (this.sprite.y < 0)
      this.sprite.y = 0;
    else if (this.sprite.y > height)
      this.sprite.y = height;
  }
  
  movement() {
    if (keyCodePressed(37))
      this.sprite.rotationSpeed -= this.rotationSpeed;
    if (keyCodePressed(39))
      this.sprite.rotationSpeed += this.rotationSpeed;
    if (keyCodePressed(38)) {
      this.sprite.velocity.x += Math.sin(radians(this.sprite.rotation)) * this.speed;
      this.sprite.velocity.y -= Math.cos(radians(this.sprite.rotation)) * this.speed;
    }
    if (keyCodePressed(40)) {
      this.sprite.velocity.x -= Math.sin(radians(this.sprite.rotation)) * this.speed / 2;
      this.sprite.velocity.y += Math.cos(radians(this.sprite.rotation)) * this.speed / 2;
    }
  }
  
  circle(gameScene) {
    let circleSize = this.maxCircleSize - ((this.maxCircleSize - this.minCircleSize) * (gameScene.timer / this.time));
    push();
    fill(0)
    circle(this.circleX, this.circleY, circleSize);
    pop();
    if ((this.circleX - circleSize / 2) < 0 || (this.circleX + circleSize / 2) > width) {
      this.circleVelX *= bounceMult;
      if (randomBounce) {
        let rand = clamp(Math.random(), 0.5, 0.75);
        if (this.circleVelX > 0)
          this.circleVelX += 1 - rand;
        else
          this.circleVelX -= 1 - rand;
        this.circleVelY = rand;
      }
      gameScene.effect.shakeIntensity = shakeIntensity;
    }
    if ((this.circleY - circleSize / 2) < 0 || (this.circleY + circleSize / 2) > height) {
      this.circleVelY *= bounceMult;
      if (randomBounce) {
        let rand = clamp(Math.random(), 0.5, 0.75);
        if (this.circleVelY > 0)
          this.circleVelY += 1 - rand;
        else
          this.circleVelY -= 1 - rand;
        this.circleVelX = rand;
      }
      gameScene.effect.shakeIntensity = shakeIntensity;
    }
    this.circleX += this.circleVelX;
    this.circleY += this.circleVelY;
    
    if(
      !InCircle(this.sprite.width / 2, this.sprite.height / 2, this.sprite.rotation, this.sprite.x, this.sprite.y, this.circleX, this.circleY, circleSize) ||
      !InCircle(this.sprite.width / -2, this.sprite.height / 2, this.sprite.rotation, this.sprite.x, this.sprite.y, this.circleX, this.circleY, circleSize) ||
      !InCircle(0, this.sprite.height / -2, this.sprite.rotation, this.sprite.x, this.sprite.y, this.circleX, this.circleY, circleSize)
    ) {
      gameScene.player.sprite.remove();
      for (let enemy = gameScene.enemies.head; enemy.data != null; enemy = enemy.next) {
        enemy.remove();
      }
      sceneManager.currentScene = loseSceneId;
      sceneManager.start();
    }
  }
  
  play(gameScene) {
    this.sprite.rotationSpeed *= 1 - this.rotationFriction ** deltaTime;
    this.sprite.velocity.x *= 1 - this.velocityFriction ** deltaTime;
    this.sprite.velocity.y *= 1 - this.velocityFriction ** deltaTime;
    this.circle(gameScene);
    this.screenBorder();
    this.movement();
  }
}

class Circle {
  constructor() {
    
  }
}

class Bomb {
  constructor() {
    
  }
}