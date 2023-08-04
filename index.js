let songIndex=1;
let audioElement=new Audio('./songs/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let masterSongName=document.getElementById('masterSongName');
// let test=document.getElementById('1');


let songItems=Array.from(document.getElementsByClassName("songitem"));
let songs=[
    {songName:"DownBeat",filePath:"./songs/1.mp3"},
    {songName:"Orphic Night",filePath:"./songs/2.mp3"},
    {songName:"Falling",filePath:"./songs/3.mp3"},
    {songName:"Dreamer",filePath:"./songs/4.mp3"},
    {songName:"Forever Finally Ends",filePath:"./songs/5.mp3"},
    {songName:"If Looks Can Kill",filePath:"./songs/6.mp3"},
    {songName:"Immortal",filePath:"./songs/7.mp3"},
    {songName:"094",filePath:"./songs/8.mp3"},
    {songName:"Paper Walls",filePath:"./songs/9.mp3"}
   
]
songItems.forEach((element,i)=>{
    element.getElementsByClassName("songName")[0].innerHTML=songs[i].songName;

})
//Handle play/pause click

masterPlay.addEventListener('click',()=>{
    console.log(audioElement.paused);
    if(audioElement.paused || audioElement.currentTime<=0)
    {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        document.getElementById(songIndex).classList.remove('fa-play-circle');
        document.getElementById(songIndex).classList.add('fa-rotate-right');
        gif.style.opacity=1;
        
    }
    else
    {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
        makeAllPlays();
    }
});

// audioElement.play();
//seekbar
audioElement.addEventListener('timeupdate',()=>{
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;


})

myProgressBar.addEventListener('change',()=>
{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})


const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        element.classList.remove('fa-rotate-right');
        element.classList.add("fa-play-circle");
    })

}

// test.addEventListener('click',()=>{
//     console.log(audioElement.paused);
//     if(audioElement.paused || audioElement.currentTime<=0)
//     {
//         audioElement.play();
//         masterPlay.classList.remove('fa-play-circle');
//         masterPlay.classList.add('fa-pause-circle');
//         document.getElementById(songIndex).classList.remove('fa-play-circle');
//         document.getElementById(songIndex).classList.add('fa-pause-circle');
//         gif.style.opacity=1;
        
//     }
//     else
//     {
//         audioElement.pause();
//         masterPlay.classList.remove('fa-pause-circle');
//         masterPlay.classList.add('fa-play-circle');
//         gif.style.opacity=0;
//         makeAllPlays();
//     }
// })

Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        element.addEventListener('click',(e)=>{
        songIndex=parseInt(e.target.id);
        audioElement.src='./songs/'+songIndex+'.mp3';
        
       
            audioElement.currentTime=0;
            // console.log(audioElement.paused);
            makeAllPlays();
            e.target.classList.remove('fa-play-circle');
            e.target.classList.add('fa-rotate-right');
            masterSongName.innerText=songs[songIndex-1].songName;
            // console.log(songIndex);
            audioElement.play();
            gif.style.opacity=1;
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');
        
    
    })
})



document.getElementById("forward").addEventListener('click',(e)=>{
    if(songIndex>=9)
    {
        songIndex=0;
    }
    else
    {
        songIndex+=1;
    }
        audioElement.src='./songs/'+(songIndex)+'.mp3';
        // console.log(index);
        audioElement.currentTime=0;
        masterSongName.innerText=songs[songIndex-1].songName;
        audioElement.play();
        makeAllPlays();
        document.getElementById(songIndex).classList.remove('fa-play-circle');
        document.getElementById(songIndex).classList.add('fa-rotate-right');
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
})

document.getElementById("previous").addEventListener('click',(e)=>{
    if(songIndex<=0)
    {
        songIndex=9;
    }
    else
    {
        songIndex-=1;
    }
        audioElement.src='./songs/'+(songIndex)+'.mp3';
        // console.log(index);
        masterSongName.innerText=songs[songIndex-1].songName;
        audioElement.currentTime=0;
        audioElement.play();
        makeAllPlays();
        document.getElementById(songIndex).classList.remove('fa-play-circle');
        document.getElementById(songIndex).classList.add('fa-rotate-right');
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
})