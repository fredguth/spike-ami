function hasJsFullscreen(){return document.fullscreenEnabled||document.webkitFullscreenEnabled||document.mozFullScreenEnabled||document.msFullscreenEnabled}function isJsFullscreen(){return null!=(document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||document.msFullscreenElement)}function jsFullScreen(){var e=document.documentElement;e.requestFullscreen?e.requestFullscreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.msRequestFullscreen&&e.msRequestFullscreen()}function onJSFullscreencChange(e){getFlashMovie().onJSFullscreen()}function jsFullScreenCancel(){document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.msExitFullscreen&&document.msExitFullscreen()}document.addEventListener("webkitfullscreenchange",onJSFullscreencChange),document.addEventListener("mozfullscreenchange",onJSFullscreencChange),document.addEventListener("fullscreenchange",onJSFullscreencChange);