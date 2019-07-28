 
  var audioSelect, videoSelect;
  function getDevices() {
    AgoraRTC.getDevices(function (devices) {
      for (var i = 0; i !== devices.length; ++i) {
        var device = devices[i];
        var option = document.createElement('option');
        option.value = device.deviceId;
        if (device.kind === 'audioinput') {
          option.text = device.label || 'microphone ' + (audioSelect.length + 1);
          audioSelect.appendChild(option);
        } else if (device.kind === 'videoinput') {
          option.text = device.label || 'camera ' + (videoSelect.length + 1);
          videoSelect.appendChild(option);
        } else {
          console.log('Some other kind of source/device: ', device);
        }
      }
    });
  }
  
  //audioSelect.onchange = getDevices;
  //videoSelect.onchange = getDevices;

  if(!AgoraRTC.checkSystemRequirements()) {
    alert("Your browser does not support WebRTC!");
  }
  $( document ).ready(function() {  /* select Log type */
    // AgoraRTC.Logger.setLogLevel(AgoraRTC.Logger.NONE);
    // AgoraRTC.Logger.setLogLevel(AgoraRTC.Logger.ERROR);
    // AgoraRTC.Logger.setLogLevel(AgoraRTC.Logger.WARNING);
    // AgoraRTC.Logger.setLogLevel(AgoraRTC.Logger.INFO);  
    // AgoraRTC.Logger.setLogLevel(AgoraRTC.Logger.DEBUG);
    
    /* simulated data to proof setLogLevel() */
    // AgoraRTC.Logger.error('this is error');
    // AgoraRTC.Logger.warning('this is warning');
    // AgoraRTC.Logger.info('this is info');
    // AgoraRTC.Logger.debug('this is debug');
     
  audioSelect = document.getElementById('audioSource');
  videoSelect = document.getElementById('videoSource');  
  getDevices();
});
