let elementToMove = document.querySelector(".scooter-start");


const button = document.getElementById("move")


let clickCount = 1
button.onclick = ()=>{
    console.log(clickCount)
    if(clickCount==0){
        elementToMove.style.paddingRight = "550px";
        
        }
    if(clickCount==1){
    elementToMove.style.paddingRight = "0px";

    }
    if(clickCount==2){
        elementToMove.style.paddingLeft = "300px";

    }
    if(clickCount==3){
        elementToMove.style.paddingLeft = "600px";

    }
    if(clickCount==4){
        elementToMove.style.paddingLeft = "900px";

    }
    clickCount++;
    if(clickCount>3){
        clickCount=0;
    }

}

