//https://teachablemachine.withgoogle.com/models/iknQ-d9CE/
Webcam.set({
    width: 350,
    height: 350,
    image_format:'png',
    png_quality:98,
})
Webcam.attach('#Camera');
function Capture(){
    Webcam.snap(
        function(data_uri){
            document.getElementById("image").src=data_uri;
        }
    )
}
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/iknQ-d9CE/model.json',dummy);
function dummy(){
    console.log('model is working')
}

function result(){
    image=document.getElementById("image");
    classifier.classify(image,output);
}
function output(error,result){
    if (error){
        console.error(error);
    }
    else {
        console.log(result);
        document.getElementById("p1").innerHTML=result[0].label;
        document.getElementById("p2").innerHTML=(result[0].confidence).toFixed(3);
    }
}

