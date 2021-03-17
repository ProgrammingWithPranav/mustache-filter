function preload() {
    img = loadImage("https://i.postimg.cc/k52cCKkQ/mustache.png")
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", showResults);
}

var noseX = 0;
var noseY = 0;

function modelLoaded() {
    console.log("Model has been loaded.");
}

function showResults(results) {
    console.log(results);
    poses = results;

    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(img, noseX - 35, noseY+7, 70, 20);
}

function takeSnapshot() {
    save("mustache.png");
}