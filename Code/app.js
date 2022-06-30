document.getElementById('#section-4');

// Autoplay na 1600 milieseconden

const startVideo = async() => {
    const video = document.querySelector('#MarsVid');
    var vid = document.getElementById("MarsVid");
    vid.muted = true;
    $('#audio-control').click(function() {
        if ($("#MarsVid").prop('muted')) {
            $("#MarsVid").prop('muted', false);
            // $(this).text('Mute');
            $(this).img('speaker_Icon.svg');
            // or toggle class, style it with a volume icon sprite, change background-position
        } else {
            $("#MarsVid").prop('muted', true);
            $(this).img('icons8-sound-speaker-50.png');
        }
    });
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

