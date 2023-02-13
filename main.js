function preload(){
    img = loadImage('dog_cat.jpg')
}


function setup(){
    canvas = createCanvas(640,420)
    canvas.center()

    object_detection = ml5.objectDetector('cocossd',model_loaded)
  
}
function model_loaded(){
    console.log('model has been loaded')
    status = true;
    object_detection.detect(img, gotresults)

}

function gotresults(error,results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
    }
}
function draw(){
    Image(img,0,0,640,420)
    fill('red');
    text('dog',45 ,75)
    noFill()
    stroke('red');
    rect(80,80,250,250)

    fill('red')
    text('cat',150,75);
    noFill()
     stroke('red');
     rect(140,140, 250,250);
}

