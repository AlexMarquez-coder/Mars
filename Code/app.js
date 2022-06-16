<<<<<<< HEAD
=======

  
  



function onStart() {
  window.scrollTo({
    top: 2700,
  });
}


>>>>>>> bcd31165a236608e74b1c4a13e3fae2cf1ccf59b
// Autoplay na 1600 milieseconden
var un_mute = document.getElementById('un-mute');

un_mute.onclick = function() {
    alert('toggle player here');
};
const startVideo = async() => {
    const video = document.querySelector('#MarsVid');

    try {
        await video.play();

        video.setAttribute('autoplay', true);

    } catch (err) {

    }
}

setTimeout(startVideo, 1600)


// Auto scroll naar section-4

document.querySelector('#section-4').scrollIntoView({

});

