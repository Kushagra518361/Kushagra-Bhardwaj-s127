song = "";

function setup()

{
    canvas = createCanavs(600,500);
    canvas.center();

    video = createCapture(VIDEO)
    video.hide();
}

function draw()
{
    image(video , 0 , 0 , 600 ,500);
}

function preload()
{
    song = loadSound("music.mp3");
	song  = loadSound("music.mp3")

}

function play()
{
    song.play("music.mp3");
	song.play("music2.mp3")
}