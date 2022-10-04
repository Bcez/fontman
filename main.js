noseX = 0;
noseY = 0;
difference = 0; 
rightWristx = 0; 
leftWristX= 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(560,500);
    canvas = createCanvas(550, 550);
    canvas.position(560,170);
    poseNet = ml5.poseNet(video,  modelLoaded);
    poseNet.on('pose', gotPoses);

}

function modelLoaded(){
    console.log("loaded");

}

function gotPoses(results){
    if(results.length > 0){
    console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.x;
    console.log("noseX = " + noseX +"noseY = " + noseY);

    leftWristX = results[0].pose.leftWrist.x;
    rightWristx = results[0].pose.rightWrist.x;
    difference = floor(leftWristX - rightWristx);

    }
}

function draw(){
    background('#a21cb9');

    document.getElementById("square_side").innerHTML = "Width and Height.of a Square will be = " + difference +"px";
    fill('#04e54a')
    stroke('#8f2f03')
    textSize(difference)
    text("FONTMAN69420", noseX, noseY,  difference);
}