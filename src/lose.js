class LoseScene {
  start() {
    this.playButton = createButton("Return to Title");
    this.playButton.id(returnButtonId);
    this.playButton.style("font-size", "20px");
    this.playButton.size(100, 50);
    this.playButton.position(150, 175);
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
    text("You Lost", 200, 100);
    pop();
    if (keyCodePressed(32))
      this.onPlay();
  }
  
  onPlay() {
    document.getElementById(returnButtonId).remove();
    sceneManager.currentScene = titleSceneId;
    sceneManager.start();
  }
}