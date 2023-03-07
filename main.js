first_song = "";
second_song= "";
function preload()
{
    first_song=loadSound("music.mp3");
    second_song=loadSound("music2.mp3");
}
function setup()
{
    canvas=createCanvas(600,500);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();
}
function draw()
{
    image(video,0,0,600,500)
}