function createSnow() {
    var leftX = Math.random()*window.innerWidth;
    var topY = Math.random()*window.innerHeight;
    var snowNode = document.createElement("div");
    snowNode.style.position = "fixed";
    snowNode.style.left = leftX+"px";
    snowNode.style.top = topY + "px";
    snowNode.innerHTML = "<img src = '../basic/snow.jpg' width = '20px' />";
    document.body.appendChild(snowNode);
}
function  createManySnow() {
    i = 20;
    while(i--){
        createSnow();
    }
}
function startFly() {
    var allSnow = document.getElementsByTagName("div");
    for (var i=0;i<allSnow.length;i++){
        var randomTop = Math.random()*6;

        document.getElementById("start").disabled ="disabled";
        document.getElementById("stop").disabled ="disabled";

    }
}