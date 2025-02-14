var customizationSize=document.querySelector("#fontSize");
var myTextArea=document.querySelector("#text");
customizationSize.addEventListener('input', function() {
    myTextArea.style.fontSize = customizationSize.value + "px";
});
var customizationFont=document.querySelector("#policePicker");
customizationFont.addEventListener('change',function(){
    myTextArea.style.fontFamily=customizationFont.value;
});
var customizationColor=document.querySelector("#colorPicker");
customizationColor.addEventListener('change',function(){
    myTextArea.style.color=customizationColor.value;
});
