(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{"98":function(e,o,t){"use strict";t.r(o),t.d(o,"taro_web_view_core",(function(){return i}));var r=t(25),i=function(){function WebView(e){Object(r.g)(this,e),this.onLoad=Object(r.d)(this,"load",7),this.onError=Object(r.d)(this,"error",7)}return WebView.prototype.render=function(){var e=this.src,o=this.onLoad,t=this.onError;return Object(r.f)("iframe",{"class":"taro-webview","onLoad":function(t){t.stopPropagation(),o.emit({"src":e})},"onError":function(o){o.stopPropagation(),t.emit({"src":e})},"src":e})},Object.defineProperty(WebView,"style",{"get":function(){return"iframe{border:none}.taro-webview{position:fixed;top:0;bottom:0;width:100%;height:100%;z-index:999}"},"enumerable":!0,"configurable":!0}),WebView}()}}]);