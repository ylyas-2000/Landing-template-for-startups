let myVideo = document.querySelector(".my-video");

        function playPause (){
            if(myVideo.paused){
                myVideo.play();
                document.querySelector(".pausebtn").style.backgroundImage = "none";
            }else{
                myVideo.pause();
                document.querySelector(".pausebtn").style.backgroundImage = "url('images/Play.svg')";
            }
        }