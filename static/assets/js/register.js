var stream, imageCapture; 

function getMediaStream()
{ 
    window.navigator.mediaDevices.getUserMedia({video: true})
    .then(function(mediaStream)
    { 
        stream = mediaStream; 
        let mediaStreamTrack = mediaStream.getVideoTracks()[0];
        imageCapture = new ImageCapture(mediaStreamTrack);
        console.log("image capture=");
        console.log(imageCapture)
        takePhoto()
        console.log(imageCapture);
    })
    .catch(error);
}

function error(error)
{ 
    console.error('error:', error); 
}

function takePhoto(img)
{ 
    const image = img || document.querySelector('img');

    imageCapture.takePhoto()
    .then(blob => {
        let url = window.URL.createObjectURL(blob);
        image.src = url;
        console.log("url="+url)
        window.URL.revokeObjectURL(url); 
    })
    .catch(error);
}; 

/* just call */ 
getMediaStream(); 

/* and when you want to capture an image */ 
//takePhoto();