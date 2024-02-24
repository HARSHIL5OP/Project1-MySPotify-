console.log("HARSHILL");
// curAudio.play();


//VAR INITIALISATION
let i = 1;
let masterplay = document.getElementById("masterplay");
let progressbar=document.getElementById("progressBar");

let songitems=Array.from(document.getElementsByClassName("songitems"));
let index=1;

let curAudio = new Audio("SONGS/"+index+".mp3");

// JS IMPLEMENTATTION OF MAKING COVER PICS
Array.from(document.getElementsByClassName("covers")).forEach((element) => {
    element.src = "Covers/" + i + ".jpg";
    i++;
});

masterplay.addEventListener("click", () => {
    if (curAudio.paused || curAudio.currentTime<=0) {
        masterplay.classList.remove("fa-circle-play");
        masterplay.classList.add("fa-circle-pause");

        curAudio.play();
        

    }
    else{
        masterplay.classList.add("fa-circle-play");
        masterplay.classList.remove("fa-circle-pause");
        makeallplays();
        curAudio.pause();

    }
});

progressbar.addEventListener("change",()=>{
    
    
        curAudio.currentTime=(progressbar.value*curAudio.duration)/100;
    
});

curAudio.addEventListener("timeupdate",()=>{
    if(curAudio.currentTime>=curAudio.duration){

        masterplay.classList.add("fa-circle-play");
        masterplay.classList.remove("fa-circle-pause");
    }
    else{
    progressbar.value=(curAudio.currentTime/curAudio.duration)*100;
}
    // console.log("okkkll")
})

curAudio.addEventListener("change",()=>{

})

function makeallplays(){
    songitems.forEach((element)=>{
        element.classList.add("fa-circle-play");
        element.classList.remove("fa-circle-pause");
    })
}
songitems.forEach((element)=>{
    element.addEventListener("click",(element)=>{
        console.log(element.target)
        makeallplays();
        element.target.classList.remove("fa-circle-play");
        element.target.classList.add("fa-circle-pause");
        index=element.target.id;
        curAudio.src="SONGS/"+index+".mp3";
        console.log(index)
        curAudio.currentTime=0;
        masterplay.classList.remove("fa-circle-play");
        masterplay.classList.add("fa-circle-pause");
        curAudio.play();
    })
});

document.getElementById("next").addEventListener("click",()=>{
    if(index>=5){
        index=1;
    }
    else{
        index++;
    }
    console.log(index)
    curAudio.src="SONGS/"+index+".mp3";
        curAudio.currentTime=0;
        masterplay.classList.remove("fa-circle-play");
        masterplay.classList.add("fa-circle-pause");
        curAudio.play();
})

document.getElementById("prev").addEventListener("click",()=>{
    if(index<=1){
        index=1;
    }
    else{
        index--;
    }
    console.log(index)
    curAudio.src="SONGS/"+index+".mp3";
        curAudio.currentTime=0;
        masterplay.classList.remove("fa-circle-play");
        masterplay.classList.add("fa-circle-pause");
        curAudio.play();
})

