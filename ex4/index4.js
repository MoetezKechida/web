var listElements=document.querySelector("#list").children;
for(let i=0;i<listElements.length;i++)
{   
    listElements[i].style.cursor="pointer";
    listElements[i].addEventListener('click',function(){
        listElements[i].style.color=getRandomColor();
    });
}
function getRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}