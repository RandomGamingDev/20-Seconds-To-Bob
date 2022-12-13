//https://editor.p5js.org/kll/sketches/6ggb0_7uY
// Basically just use number only inputs and maybe some switches to change stuff by value
// Make the default values for stuff globals and make it so that they can be changed from settings
// With this it might be possible to add projectiles as a challenge

class SettingsScene {
  start() {
    this.width = createInput(String(playerWidth));
    this.width.position(170, 25);
    this.width.size(50, 10);
    this.width.input(function() {
      playerWidth = Number(this.value());
    });
    this.height = createInput(String(playerHeight));
    this.height.position(170, 55);
    this.height.size(50, 10);
    this.height.input(function() {
      playerHeight = Number(this.value());
    });
    this.circleSize = createInput(String(circleSize));
    this.circleSize.position(170, 85);
    this.circleSize.size(50, 10);
    this.circleSize.input(function() {
      circleSize = Number(this.value());
    });
    this.minCircleSize = createInput(String(minCircleSize));
    this.minCircleSize.position(170, 115);
    this.minCircleSize.size(50, 10);
    this.minCircleSize.input(function() {
      minCircleSize = Number(this.value());
    });
    this.randomBounce = createInput(String(randomBounce));
    this.randomBounce.position(170, 145);
    this.randomBounce.size(50, 10);
    this.randomBounce.input(function() {
      randomBounce = Boolean(this.value());
    });
    this.bounceMult = createInput(String(bounceMult));
    this.bounceMult.position(170, 175);
    this.bounceMult.size(50, 10);
    this.bounceMult.input(function() {
      bounceMult = Number(this.value());
    });
    this.shakeIntensity = createInput(String(shakeIntensity));
    this.shakeIntensity.position(170, 205);
    this.shakeIntensity.size(50, 10);
    this.shakeIntensity.input(function() {
      shakeIntensity = Number(this.value());
    });
    this.timeLimit = createInput(String(timeLimit));
    this.timeLimit.position(170, 235);
    this.timeLimit.size(50, 10);
    this.timeLimit.input(function() {
      timeLimit = Number(this.value());
    });
    this.playerSpeed = createInput(String(playerSpeed));
    this.playerSpeed.position(170, 265);
    this.playerSpeed.size(50, 10);
    this.playerSpeed.input(function() {
      playerSpeed = Number(this.value());
    });
    this.velocityFriction = createInput(String(velocityFriction));
    this.velocityFriction.position(170, 295);
    this.velocityFriction.size(50, 10);
    this.velocityFriction.input(function() {
      velocityFriction = Number(this.value());
    });
    this.rotationSpeed = createInput(String(rotationSpeed));
    this.rotationSpeed.position(170, 325);
    this.rotationSpeed.size(50, 10);
    this.rotationSpeed.input(function() {
      rotationSpeed = Number(this.value());
    });
    this.rotationFriction = createInput(String(rotationFriction));
    this.rotationFriction.position(170, 355);
    this.rotationFriction.size(50, 10);
    this.rotationFriction.input(function() {
      rotationFriction = Number(this.value());
    });
    
    this.playButton = createButton("Return to Title");
    this.playButton.id(returnButtonId);
    this.playButton.style("font-size", "20px");
    this.playButton.size(100, 50);
    this.playButton.position(25, 75);
    this.playButton.mousePressed(this.onPlay);
  }
  
  play() {
    this.background()
    this.menu()
  }
    
  background() {
    background(0);
  }
  
  menu() {
    push();
    fill(200);
    textSize(40);
    text("Settings", 75, 50);
    pop();
    push();
    fill(200);
    textSize(10);
    text("Player Width: ", 200, 20);
    text("Player Height: ", 200, 50);
    text("Max Circle Size: ", 200, 80);
    text("Min Circle Size: ", 200, 110);
    text("Random Bounce: ", 200, 140);
    text("Bounce Multiplier: ", 200, 170);
    text("Screen Shake Intensity: ", 200, 200);
    text("Time: ", 200, 230);
    text("Player Speed: ", 200, 260);
    text("Player Speed Friction: ", 200, 290);
    text("Player Rotation Speed: ", 200, 320);
    text("Player Rotation Speed Friction: ", 200, 350);
    pop();
    if (keyCodePressed(32))
      this.onPlay();
  }
  
  onPlay() {
    sceneManager.scenes[settingsSceneId].width.remove();
    sceneManager.scenes[settingsSceneId].height.remove();
    sceneManager.scenes[settingsSceneId].circleSize.remove();
    sceneManager.scenes[settingsSceneId].minCircleSize.remove();
    sceneManager.scenes[settingsSceneId].randomBounce.remove();
    sceneManager.scenes[settingsSceneId].bounceMult.remove();
    sceneManager.scenes[settingsSceneId].shakeIntensity.remove();
    sceneManager.scenes[settingsSceneId].timeLimit.remove();
    sceneManager.scenes[settingsSceneId].playerSpeed.remove();
    sceneManager.scenes[settingsSceneId].velocityFriction.remove();
    sceneManager.scenes[settingsSceneId].rotationSpeed.remove();
    sceneManager.scenes[settingsSceneId].rotationFriction.remove();
    document.getElementById(returnButtonId).remove();
    sceneManager.currentScene = titleSceneId;
    sceneManager.start();
  }
}