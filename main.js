var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
function start()
{
    document.getElementById("textbox").innerHTML=""
    recognition.start();

}
recognition.onresult= function run (event)
{
    console.log(event);
  var conent=event.results[0][0].transcript
  document.getElementById ("textbox").innerHTML=conent
  speak()
}
function speak() {
    var synth = window.speechSynthesis;
    speak_data=document.getElementById("textbox").value 
    var utterThis= new SpeechSynthesisUtterance(speak_data)
    synth.speak(utterThis)
   Webcam.attach(camera)
if (speak_data=="take my selfie") {
  setTimeout(() => {
    takesnapshot()
    save()
  },3000);
  
}
}
Webcam.set({
    width:360,
    height:250,
    image_format: 'png',
    png_quality:90
    
})
camera=document.getElementById("camera")
function takesnapshot(){
    Webcam.snap(function(data){
        document.getElementById("selfieimg").src=data
    })
}
function save(){
  link=document.getElementById("link");
  image=document.getElementById("selfieimg").src;
  link.href=image;
  link.click();
}