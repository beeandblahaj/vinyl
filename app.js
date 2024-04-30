document.addEventListener("DOMContentLoaded", (event) => {

        let cardForm = document.getElementById("cardForm");

        cardForm.addEventListener("submit", (formSubmit) => {
        
                formSubmit.preventDefault();
        
                let songTitle = document.getElementById("songTitle");
                let artist = document.getElementById("artistName");


                if (songTitle.value == "")
                        songTitle.value = "Default Song Name";
                if (artist.value == "")
                        artist.value = "Default Artist Name";
        
                document.getElementById("song-title").innerHTML = songTitle.value;
                document.getElementById("artist").innerHTML = artist.value;
        
        });

});

function red() {document.documentElement.style.setProperty('--disk-color-center', '#ff6666');}
function orange() {document.documentElement.style.setProperty('--disk-color-center', '#ffad4f');}
function yellow() {document.documentElement.style.setProperty('--disk-color-center', '#ffea64');}
function green1() {document.documentElement.style.setProperty('--disk-color-center', '#d0ffa9');}
function green2() {document.documentElement.style.setProperty('--disk-color-center', '#75ffb1');}
function blue1() {document.documentElement.style.setProperty('--disk-color-center', '#8df1ed');}
function blue2() {document.documentElement.style.setProperty('--disk-color-center', '#55c5e1');}
function blue3() {document.documentElement.style.setProperty('--disk-color-center', '#5d74dc');}
function purple1() {document.documentElement.style.setProperty('--disk-color-center', '#b23ce5');}
function purple2() {document.documentElement.style.setProperty('--disk-color-center', '#ee8cff');}
function pink1() {document.documentElement.style.setProperty('--disk-color-center', '#ffcfed');}
function pink2() {document.documentElement.style.setProperty('--disk-color-center', '#ff4ea4');}

