let width = 400;
let height = 400;

let sceneManager = undefined;
let titleSceneId = 0;
let gameSceneId = 1;
let settingsSceneId = 2;
let loseSceneId = 3;
let winSceneId = 4;

let playButtonId = "playButton";
let settingsButtonId = "settingsButton";
let returnButtonId = "returnButton";

let playerWidth = 23;
let playerHeight = 30;
let circleSize = 300;
let minCircleSize = 100;
let randomBounce = false;
let bounceMult = -1.17;
let shakeIntensity = 20;
let timeLimit = 20;
let playerSpeed = 1;
let velocityFriction = 0.89;
let rotationSpeed = 1.1;
let rotationFriction = 0.9;