!function(t,e){String.prototype.format=String.prototype.format||function(){var t="%",e=new RegExp(["(",t,"(.+?)",t,")"].join(""),"g");return function(t){return this.replace(e,function(e,i,o){return o in t?t[o]:i})}}();var i=function(t){t=t||{},this.requiredVersion=t.requiredVersion||"11.3.0",this.title=t.title||"Adobe Flash Player Update required!",this.description=t.description||"This installation will only take a few moments. Using the current version may cause performance problems and publication errors.",this.updateUrl=t.updateUrl||"http://get.adobe.com/flashplayer/",this.buttonSrc=t.buttonSrc||"files/flash/160x41_Get_Flash_Player.jpg",this.mbClass=t.mbClass||"flash-notification",this.cookieName=t.cookieName||"flippingbook-flash_version_checked",this.parentElem=t.parentElem||document.getElementById("container"),this.box=null,this.boxStyle=t.boxStyle||"margin:3px;padding:12px 24px 12px 12px;overflow:hidden;background:#f9f6c4;border:1px solid #bab893;-webkit-border-radius:7px;-moz-border-radius:7px;border-radius:7px;font:11px/14px Arial;position: relative;",this.titleStyle=t.titleStyle||"font-weight:bold;padding-top:2px;padding-bottom:4px;",this.closeButtonStyle=t.closeButtonStyle||"display:block;width:8px;height:8px;text-decoration:none;font:0/0 a;cursor:pointer;background:url('files/flash/close.png');position:absolute;top:12px;right:12px;left:auto;bottom:auto;",this.downloadButtonStyle=t.downloadButtonStyle||"display:block;float:left;text-decoration:none;position:absolute;top:50%;left:12px;margin-top:-20px;",this.rightColStyle=t.rightColStyle||"margin-left: 170px;",this.tpl=t.tpl||'<a href="javascript:void(0)" style="%closeButtonStyle%"></a><a href="%updateUrl%" style="%downloadButtonStyle%" target="_blank"><img src="%buttonSrc%" alt="" border="0" style="border:0;display:block;" width="160" height="41"/></a><div style="%rightColStyle%"><div style="%titleStyle%">%title%</div><div>%description%</div></div>',this.onShow=t.onShow||function(t){},this.onClose=t.onClose||function(t){t.style.display="none"},this.init()};i.prototype.init=function(){this.requiredVersion=this.requiredVersion.split("."),this.userVersion=this.userPlayerVersion()||!1,this.userVersion&&this.userVersion.length&&this.showMessageBox()},i.prototype.userPlayerVersion=function(){var e=(navigator.userAgent.toLowerCase(),navigator.platform.toLowerCase(),[0,0,0]),i=null;if("undefined"!=typeof navigator.plugins&&"object"==typeof navigator.plugins["Shockwave Flash"])i=navigator.plugins["Shockwave Flash"].description,!i||"undefined"!=typeof navigator.mimeTypes&&navigator.mimeTypes["application/x-shockwave-flash"]&&!navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin||(i=i.replace(/^.*\s+(\S+\s+\S+$)/,"$1"),e[0]=parseInt(i.replace(/^(.*)\..*$/,"$1"),10),e[1]=parseInt(i.replace(/^.*\.(.*)\s.*$/,"$1"),10),e[2]=/[a-zA-Z]/.test(i)?parseInt(i.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0);else if("undefined"!=typeof t.ActiveXObject)try{var o=new ActiveXObject("ShockwaveFlash.ShockwaveFlash");o&&(i=o.GetVariable("$version"),i&&(i=i.split(" ")[1].split(","),e=[parseInt(i[0],10),parseInt(i[1],10),parseInt(i[2],10)]))}catch(n){}return e},i.prototype.createMessageBox=function(){var t=this,e=document.createElement("DIV");return e.setAttribute("id",this.mbClass),e.setAttribute("class",this.mbClass),e.style.cssText=this.boxStyle,e.innerHTML=this.tpl.format({title:this.title,description:this.description,updateUrl:this.updateUrl,buttonSrc:this.buttonSrc,titleStyle:this.titleStyle,closeButtonStyle:this.closeButtonStyle,downloadButtonStyle:this.downloadButtonStyle,rightColStyle:this.rightColStyle}),e.getElementsByTagName("a")[0].onclick=function(){t.onClose(e)},e},i.prototype.showMessageBox=function(){if(!this.cookie(this.cookieName)&&this.pluginIsOutOfDate()){var t=new Date;t=new Date(t.setTime(t.getTime()+12096e5)).toGMTString(),this.cookie(this.cookieName,!0,t),this.box=this.createMessageBox(),this.parentElem.childNodes.length?this.parentElem.insertBefore(this.box,this.parentElem.childNodes[0]):this.parentElem.appendChild(this.box),this.onShow()}},i.prototype.cookie=function(t,e,i,o,n,r){if(1==arguments.length&&"string"==typeof t){var s=document.cookie.match("(^|;) ?"+t+"=([^;]*)(;|$)");return s?decodeURI(s[2]):null}if(2==arguments.length&&"string"==typeof t&&null===e){var a=new Date;return a.setTime(a.getTime()-1),document.cookie=t+="=; expires="+a.toGMTString(),null}var l=t+"="+encodeURI(e)+(i?"; expires="+i:"")+(o?"; path="+o:"")+(n?"; domain="+n:"")+(r?"; secure":"");return document.cookie=l,l},i.prototype.pluginIsOutOfDate=function(){function t(t,e){if(t===e)return 0;for(var i=Math.min(t.length,e.length),o=0;o<i;o++){if(parseInt(t[o])>parseInt(e[o]))return 1;if(parseInt(t[o])<parseInt(e[o]))return-1}return t.length>e.length?1:t.length<e.length?-1:0}var e=this.userVersion,i=this.requiredVersion;return!(t(e,i)>=0)},t.CheckFlash=i}(window);