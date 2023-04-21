
// Get video elements
const remoteVideo = document.getElementById('remote-video');
const localVideo = document.getElementById('local-video');

// Get control buttons
const muteButton = document.getElementById('mute-button');
const endCallButton = document.getElementById('end-call-button');
const switchCameraButton = document.getElementById('switch-camera-button');

// Add event listeners to control buttons
muteButton.addEventListener('click', toggleMute);
endCallButton.addEventListener('click', endCall);
switchCameraButton.addEventListener('click', switchCamera);

// Toggle mute on local video
function toggleMute() {
  localVideo.muted = !localVideo.muted;
  muteButton.textContent = localVideo.muted ? 'Unmute' : 'Mute';
}

// End the call and stop both videos
function endCall() {
  remoteVideo.srcObject = null;
  localVideo.srcObject = null;
}

// Switch between front and back camera on