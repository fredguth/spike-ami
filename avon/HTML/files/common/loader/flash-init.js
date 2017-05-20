!(function(global){
	'use strict';
	var body = global.document.body;
	
	var head = (typeof global.document.head !== 'undefined')?
				global.document.head:
				global.document.getElementsByTagName("head")[0];

	body.innerHTML = '';
	var flashContainerName = 'book-container';
	
	global.getFlashMovie = function(){
		if (global.document[flashContainerName]){
            return global.document[flashContainerName];
		}
       
		var isIE = navigator.appName.indexOf("Microsoft") != -1;
        return (isIE) ? global[flashContainerName] : global.document.getElementById(flashContainerName);
	}
	
	function loadJS (scriptUrl,callback){
		var scriptElement = document.createElement('script');
		scriptElement.type = 'text/javascript';
		scriptElement.charset = 'UTF-8';
		scriptElement.async = false;
		scriptElement.src = scriptUrl;

		var ieLoadBugFix = function (scriptElement, iecallback) {
			if ( scriptElement.readyState == 'loaded' || scriptElement.readyState == 'complete' ) {
				iecallback();
			} else {
				setTimeout(function() { ieLoadBugFix(scriptElement, iecallback); }, 100);
			}
		}

		if ( typeof callback === "function" ) {
			if ( typeof scriptElement.addEventListener !== "undefined" ) {
				scriptElement.addEventListener("load", callback, false)
			} else {
				scriptElement.onreadystatechange = function(){
					scriptElement.onreadystatechange = null;
					ieLoadBugFix(scriptElement, callback);
				}
			}
		}
		head.appendChild(scriptElement);
	}
	
	loadJS(global.STATIC_FOLDER + '/flash/checkflash.js',function(){
		loadJS(global.STATIC_FOLDER + '/flash/swfobject.js',function(){
			//loadJS(global.STATIC_FOLDER + '/flash/swfaddress.js',function(){
				if (typeof global.SHOP_ID !== 'undefined'){
					loadJS(global.ASSETS_FOLDER + '/common/ecommerce/cart.js',function(){
						loadJS(global.STATIC_FOLDER + '/flash/flash-cart.js',function(){
							loadJS(global.ASSETS_FOLDER + '/common/ecommerce/products.js',function(){
								loadSWF();
							});
						});
					});
				}
				else{
					loadSWF();
				}
			//});
		});
	});

	

	//load swf
	function loadSWF(){
		global.needMouseWheel = false;
		var isMac = global.detector.platform.mac === true;
		var isSafari = global.detector.browser.safari === true;
		var isChrome = global.detector.browser.chrome === true;
        var isFirefox = global.detector.browser.firefox === true;
        var isIE = global.detector.browser.ie === true;
        var isEdge = global.detector.browser.msedge === true;
        var browserVersion = global.detector.browser.version;

		if( isEdge || (isMac && (isSafari||isChrome||isFirefox)) ){
            loadJS(global.STATIC_FOLDER + '/flash/wheel.js');
		}

		var dir = global.STATIC_FOLDER + '/flash/';
        global.getURL = function(url,target) {
            var referLink = document.createElement('a');
            referLink.href = url;
            referLink.target= target;
            document.body.appendChild(referLink);
            referLink.click();
        }
        global.isInFrame = function(){
            return window.parent !== window;
        }
		function getURLParam(){
			var returnObject = {};
			var href = window.location.href;
			if ( href.indexOf("?") > -1 ){
				var param = href.substr(href.indexOf("?"));
				var arrayParam = param.split("&");

				for ( var i = 0; i < arrayParam.length; i++ ){
					var value = arrayParam[i].split("=");
					returnObject[value[0]] = value[1];
				}
			}
			return returnObject;
		}

		function outputStatus(e) {
			if(!e.success){
				if(global.document.getElementById("flash-notification")) {
					global.document.getElementById("flash-notification").style.display = 'none';
				}

				global.detector.isBasic = true;
				global.detector.isFlash = false;
				global.detector._loadVersion();

			}else{
				if (typeof global.initAnalytics !== 'undefined'){
					global.initAnalytics('Flash');
				}

				new CheckFlash({
						  onShow: function () {
							  global.document.getElementById('content').style.top =
							  this.box.clientHeight + (parseInt(this.box.style.marginTop) || 0) + (parseInt(this.box.style.marginBottom) || 0) + (parseInt(this.box.style.borderTopWidth) || 0) + (parseInt(this.box.style.borderBottomWidth) || 0) + "px";
						  },
						  onClose: function() {
							this.box.style.display = "none";
							global.document.getElementById('content').style.top = "0px";
						  }
					});
			}
		}

		var container = document.createElement('div');
		container.setAttribute("id","container");

		var content = document.createElement('div');
		content.setAttribute("id","content");
		content.style["position"]="absolute";
		content.style["top"]="0px";
		content.style["left"]="0px";
		content.style["right"]="0px";
		content.style["bottom"]="0px";
		content.style["height"]="100%";
		content.style["width"]="100%";
		container.appendChild(content);


		var divElement2 = document.createElement('div');
		divElement2.setAttribute("id", flashContainerName);
		content.appendChild(divElement2);

		body.appendChild(container);

		body.setAttribute("class","bodyStyle");


		var swfName = "preloader.swf?rnd=" + global.PROJECT_GUID;

		var flashvars = getURLParam();
		if (typeof flashvars['assets'] === 'undefined'){
			flashvars['assets'] = global.ASSETS_FOLDER;
		}
		if (typeof flashvars['swfURL'] === 'undefined'){
			flashvars['swfURL'] = dir + 'flippingbook.swf';
		}

		var params = {allowFullScreen: true, allowScriptAccess: "always", quality: "high", scale: "noscale", bgcolor:global.BG_COLOR, allowFullScreenInteractive:true};
        if(global.HAS_YOUTUBE_VIDEO == true)
        {
            params.wmode="opaque";
            loadJS(global.STATIC_FOLDER + '/flash/youtube.js');
        }
        if(global.HAS_VIMEO_VIDEO == true)
        {
            params.wmode="opaque";
            loadJS(global.STATIC_FOLDER + '/flash/vimeo.js');
        }
        if(!(isIE))
            loadJS(global.STATIC_FOLDER + '/flash/fullscreen.js');

		var attributes = {align: "middle"};
		
		swfobject.embedSWF(dir + swfName, flashContainerName, "100%", "100%", "10.3.0", dir + "expressInstall.swf", flashvars, params, attributes, outputStatus);
	}
})(this);