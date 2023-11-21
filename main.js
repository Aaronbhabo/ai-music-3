leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
AvengersTheme="",
HarryPotterTheme="";

function preload(){
AvengersTheme = loadSound("Avengers-Theme.mp3");
HarryPotterTheme = loadSound("Harry-Potter-Theme.mp3");
HarryPotterTheme.play();

}

function setup(){
  canvas = createCanvas(420,420);

  video = createCapture(VIDEO);
  image(video,420,420,500,450);

  poseNet = ml5.poseNet(video,modeloaded);
  poseNet.on('pose', gotPoses );
}

function modeloaded(){
  console.log("PoseNet is Initialised");
}

function gotPoses(results){
   if(results.length>0){
    console.log(results);
    leftWristX = results[0].pose.leftWrist.x;
    leftWristY = results[0].pose.leftWrist.y;
    rightWristX = results[0].pose.rightWrist.x;
    rightWristY = results[0].pose.rightWrist.y;
    console.log("left - "+leftWristX);
    console.log("left - "+leftWristY);
    console.log("Right - "+rightWristX);
    console.log("Right - "+rightWristY);
  }
   }
  