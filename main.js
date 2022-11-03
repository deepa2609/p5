function preload(){

}
function setup(){
canvas= createCanvas(500,400);
canvas.position(500,250);
video=createCapture(VIDEO);
video.hide();
tint_color="";
}
function draw(){
image(video,0,0,500,400);
tint(tint_color);
}
function apply_filter(){
    tint_color=document.getElementById("color_name").value;

}
function take_snapshot(){
save("projpic.png");

}