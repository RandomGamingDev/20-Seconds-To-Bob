function onSelect(sceneId) {
  document.getElementById(playButtonId).remove();
  document.getElementById(settingsButtonId).remove();
  sceneManager.currentScene = sceneId;
  sceneManager.start();
}

class TitleScene {
  start() {
    this.playButton = createButton("Play");
    this.playButton.id(playButtonId);
    this.playButton.style("font-size", "20px");
    this.playButton.size(100, 50);
    this.playButton.position(150, 160);
    this.playButton.mousePressed(function() { onSelect(gameSceneId) });
    this.playButton = createButton("Settings");
    this.playButton.id(settingsButtonId);
    this.playButton.style("font-size", "20px");
    this.playButton.size(100, 50);
    this.playButton.position(150, 230);
    this.playButton.mousePressed(function() { onSelect(settingsSceneId) });
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
    text("20 seconds to Bob", 200, 100);
    pop();
    if (keyCodePressed(32))
      onSelect();
  }
}