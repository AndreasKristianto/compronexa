// $(document).ready(function(){
// var vids = new Array();
// vids[0] = "access/img/video/video1.mp4";
// vids[1] = "access/img/video/video2.mp4";
// vids[2] = "access/img/video/video3.mp4";
// vids[3] = "access/img/video/video4.mp4";
// vids[4] = "access/img/video/video5.mp4";
// var i = 1;

// $('#next').click(function () {
// if (i == 5) {
//     i = 0;
// }
// document.getElementById("myvideo").src=vids[i];
// i++;
// })
// document.getElementById('tltip').innerHTML = 'See more details by double click';
// var text = document.getElementById('tltip');
// window.onmousemove = function(e){
// var x = e.clientX,
// y = e.clientY;
// text.style.top  = (y + -160) + 'px';
// text.style.left = (x + -100) + 'px';
// }
// })

window.onload = function(e) {
var videoSource = new Array();
videoSource[0] = 'access/img/video/video1.mp4';
videoSource[1] = 'access/img/video/video2.mp4';
var i = 0;
var videoCount = videoSource.length;

function videoPlay(videoNum) {
    document.getElementById("myVideo").setAttribute("src", videoSource[videoNum]);
    document.getElementById("myVideo").load();
    document.getElementById("myVideo").play();
}
document.getElementById('myVideo').addEventListener('ended', myHandler, false);
videoPlay(0);

function myHandler() {
    i++;
    if (i == 2) {
        i = 0;
        videoPlay(i);
    } else {
        videoPlay(i);
    }
}
}