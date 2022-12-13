function setup() {
  noStroke();
  angleMode(DEGREES);
  textAlign(CENTER);
  createCanvas(width, height);
  sceneManager = new SceneManager([
    new TitleScene(),
    new GameScene(),
    new SettingsScene(),
    new LoseScene(),
    new WinScene()
  ], 0)
}

function draw() {
  sceneManager.play();
}