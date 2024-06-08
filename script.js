console.log("Welcome to spotify");

/*-------------initialize the variables-------------------*/
let songIndex=0;
let audioElement=new Audio('songs/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let masterSongName=document.getElementById('masterSongName');
let songItem=Array.from(document.getElementsByClassName('songItem'));




let songs=[
    {SongName: "Radha-Krishna", filePath:"songs/1.mp3", coverPath:"covers/img1.jpg"},
    {SongName: "kannada- new songs", filePath:"songs/2.mp3", coverPath:"covers/img1.jpg"},
    {SongName: "old-songs", filePath:"songs/3.mp3", coverPath:"covers/img1.jpg"},
    {SongName: "krishna flute", filePath:"songs/4.mp3", coverPath:"covers/img1.jpg"},
    {SongName: "hindi old songs", filePath:"songs/5.mp3", coverPath:"covers/img1.jpg"},
    {SongName: "trending songs", filePath:"songs/6.mp3", coverPath:"covers/img1.jpg"},
    {SongName: "1990's songs", filePath:"songs/7.mp3", coverPath:"covers/img1.jpg"},
]

songItem.forEach((element, i)=>{
element.getElementsByClassName('songName')[0].innerHTML=songs[i].SongName;
})

//Handle play/pauseclick

masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity=0;
    }
})

//Listen to Event

audioElement.addEventListener('timeupdate',()=>{
    // console.log('timeupdate');

    //update seekbar
    Progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    // console.log(Progress);
    myProgressBar.value=Progress;
});

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.classList.remove('fa-circle-pause');
    element.classList.add('fa-circle-play');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
    console.log(e.target);
    makeAllPlays();
    songIndex=parseInt(e.target.id);
    e.target.classList.remove('fa-circle-play');
    e.target.classList.add("fa-circle-pause");
    audioElement.src=`songs/${songIndex}.mp3`;
    masterSongName.innerText=songs[songIndex-1].SongName;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    })
})

document.getElementById('next').addEventListener('click',()=>{
 if(songIndex>=7){
    songIndex=0;
 }
 else{
    songIndex +=1;
 }
 audioElement.src=`songs/${songIndex}.mp3`;
 masterSongName.innerText=songs[songIndex-1].SongName;
 audioElement.currentTime=0;
 audioElement.play();
 gif.style.opacity=1;
 masterPlay.classList.remove('fa-circle-play');
 masterPlay.classList.add('fa-circle-pause');
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=1){
       songIndex=0;
    }
    else{
       songIndex -=1;
    }
    audioElement.src=`songs/${songIndex}.mp3`;
    masterSongName.innerText=songs[songIndex-1].SongName;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
   })
   