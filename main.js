var x=0;
var y =0;

function preload(){
clownnose=loadImage("mu.png")
}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    postNet=ml5.poseNet(video, modelLoaded);
    postNet.on("pose",gotPoses);
}
function draw(){
image(video,0,0,300,300);
//fill("red");
//circle(x,y,10)
image(clownnose,x,y,30,30);
}
function take_snapshot(){
    save("filter.png")
}
function modelLoaded(){
    console.log("posenet is loaded");
}
function gotPoses(results){
if(results.length>0){
    console.log(results);
    console.log(results[0].pose.nose.x+
        ","+results[0].pose.nose.y);
        x=results[0].pose.nose.x-15;
y=results[0].pose.nose.y-15;
}

}