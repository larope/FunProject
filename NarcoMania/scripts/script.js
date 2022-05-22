let pixelCountW = 50;
let pixelCountH = 40;

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}
function getRandomColor(){
    let arr16 = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
    let colorHEX = '#';
    for(let i = 0; i < 6; i++){
        colorHEX += arr16[randomInt(0, 15)];
    }
    return colorHEX;
}
function changeColor(id){
    let pixel = document.getElementById(id);
    
    pixel.style.backgroundColor = getRandomColor();
}
function changeAllColor(){
    for(let i = 0; i < pixelCountW; i++)
    {
        for(let j = 0; j < pixelCountH; j++)
        {
            let id = i*pixelCountW+j;
            changeColor(id);
        }
    }
}
document.write("<style>.main{max-width:" + pixelCountW*60*2 + "px;}</style>");
document.write("<div class='main'>");
for(let i = 0; i < pixelCountW; i++)
{
    for(let j = 0; j < pixelCountH; j++)
    {
        let id = i*pixelCountW+j;
        console.log(id);
        document.write("<button class='pixel' style='background-color: "+ (getRandomColor()+'') + "' id='" +id+ "' onclick='changeColor("+id+")'> </button>");
    }
}
document.write("</div>");
setInterval(changeAllColor, 1);