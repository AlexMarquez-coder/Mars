
// Autoplay na 1600 milieseconden

const startVideo = async () => {
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