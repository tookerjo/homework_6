var video;
var volume;

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
	volume= document.querySelector("#volume")
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	console.log(this)
	video.play()
	volume.innerHTML = video.volume*100+"%"
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	console.log(this)
	video.pause()
});


document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Video");
	console.log(this)
	video.playbackRate = video.playbackRate*.9;
	console.log(video.playbackRate)
});


document.querySelector("#faster").addEventListener("click", function() {
	console.log("Fast Video");
	console.log(this)
	video.playbackRate = video.playbackRate/.9;
	console.log(video.playbackRate)

});


document.querySelector("#skip").addEventListener("click", function() {
	console.log("skip Video");
	console.log(this)
	if(video.currentTime < video.duration - 5){
	video.currentTime +=  5

	 }
	else{video.currentTime = 0
	}
	video.play()
	console.log(video.currentTime)
});


document.querySelector("#mute").addEventListener("click", function() {
	console.log("mute Video");
	console.log(this)
	video.muted = true;
});


document.querySelector("#volumeSlider").addEventListener("change", function() {
	console.log("volumeSlider Video");
	console.log(this)
	console.log(this.value)
	volume.innerHTML = this.value+"%"
	video.volume = (this.value/100)
});


document.querySelector("#old").addEventListener("click", function() {
	console.log("old Video");
	console.log(this)
	video.classList.add("oldTime");
});


document.querySelector("#original").addEventListener("click", function() {
	console.log("Original Video");
	console.log(this)
	video.classList.remove("oldTime");
});

