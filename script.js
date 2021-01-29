var onplayed= document.getElementById("onplay");
        var play= document.getElementById("paused");
        var playlist= document.getElementById("playlist-list")
        var date= new Date();
        var songs=
            '<div class="song"><span class="p-btn"><i class="fas fa-play"></i></span><span class="heart"> <i class="far fa-heart"></i></span><span class="song-name"> Nice For What</span><span class="song-duration"> 2:40</span></div>'+
            '<div class="song"><span class="p-btn"><i class="fas fa-play"></i></span><span class="heart"> <i class="far fa-heart"></i></span><span class="song-name"> Nice For What</span><span class="song-duration"> 2:40</span></div>'+
            '<div class="song"><span class="p-btn"><i class="fas fa-play"></i></span><span class="heart"> <i class="far fa-heart"></i></span><span class="song-name"> Nice For What</span><span class="song-duration"> 2:40</span></div>'+
            '<div class="song"><span class="p-btn"><i class="fas fa-play"></i></span><span class="heart"> <i class="far fa-heart"></i></span><span class="song-name"> Nice For What</span><span class="song-duration"> 2:40</span></div>'
            
       playlist.innerHTML=songs
       var time=date;
        play.onclick=function(){
            var playdate= new Date
            console.log(((playdate-date)/1000).toFixed())
            if(play.classList[1]==="fa-play")
            {onplayed.style.width="100%"
            play.classList.add("fa-pause");
            play.classList.remove("fa-play")
            }else{}

            
        }