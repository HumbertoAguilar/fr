
function setup(){

    homen=createButton('🏠︎')
    homen.position(1220,20);
    

}
function draw(){
    homen.mousePressed(goHome)

}
function goHome(){
    location.replace('https://humbertoaguilar.github.io/Home/');

}