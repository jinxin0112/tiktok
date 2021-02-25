/*! For license information please see 10.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"86":function(e,t,r){"use strict";r.r(t),r.d(t,"taro_pull_to_refresh",(function(){return f}));var n=r(26),o=r(99),i=r(29);function setTransform(e,t){e.transform=t,e.webkitTransform=t,e.MozTransform=t}var s="undefined"!=typeof navigator&&/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent),a={"activate":"release","deactivate":"pull","release":"loading","finish":"finish"},c=!1;try{var l=Object.defineProperty({},"passive",{"get":function(){c=!0}});window.addEventListener("cancel",(function(){return{}}),l)}catch(e){}var u=!!c&&{"passive":!1},f=function(){function PullToRefresh(e){var t=this;Object(n.g)(this,e),this.prefixCls="rmc-pull-to-refresh",this.distanceToRefresh=50,this.damping=100,this.indicator=a,this.currSt="deactivate",this.dragOnEdge=!1,this._ScreenY=0,this._startScreenY=0,this._lastScreenY=0,this._isMounted=!1,this.triggerPullDownRefresh=function(e){!t.dragOnEdge&&t._isMounted&&(e?(t._lastScreenY=t.distanceToRefresh+1,t.currSt="release",t.setContentStyle(t._lastScreenY)):(t.currSt="finish",t.reset()))},this.init=function(){var e=t.scrollContainer;t._to={"touchstart":t.onTouchStart.bind(t,e),"touchmove":t.onTouchMove.bind(t,e),"touchend":t.onTouchEnd.bind(t,e),"touchcancel":t.onTouchEnd.bind(t,e)},Object.keys(t._to).forEach((function(r){e.addEventListener(r,t._to[r],u)}))},this.destroy=function(){var e=t.scrollContainer;Object.keys(t._to).forEach((function(r){e.removeEventListener(r,t._to[r])}))},this.onTouchStart=function(e,r){t._ScreenY=t._startScreenY=r.touches[0].screenY,t._lastScreenY=t._lastScreenY||0},this.isEdge=function(e){var r=t.scrollContainer;return r&&r===document.body?(document.scrollingElement?document.scrollingElement:document.body).scrollTop<=0:e.scrollTop<=0},this.damp=function(e){return Math.abs(t._lastScreenY)>t.damping?0:e*=.6*(1-Math.abs(t._ScreenY-t._startScreenY)/window.screen.height)},this.onTouchMove=function(e,r){var n=r.touches[0].screenY;if(!(t._startScreenY>n)&&t.isEdge(e)){t.dragOnEdge||(t._ScreenY=t._startScreenY=r.touches[0].screenY,t.dragOnEdge=!0),r.cancelable&&r.preventDefault();var o=Math.round(n-t._ScreenY);t._ScreenY=n,t._lastScreenY+=t.damp(o),t.setContentStyle(t._lastScreenY),Math.abs(t._lastScreenY)<t.distanceToRefresh?"deactivate"!==t.currSt&&(t.currSt="deactivate"):"deactivate"===t.currSt&&(t.currSt="activate"),s&&r.changedTouches[0].clientY<0&&t.onTouchEnd()}},this.onTouchEnd=function(){t.dragOnEdge&&(t.dragOnEdge=!1),"activate"===t.currSt?(t.currSt="release",t.onRefresh.emit(t),t._lastScreenY=t.distanceToRefresh+1,t.setContentStyle(t._lastScreenY)):"release"===t.currSt?(t._lastScreenY=t.distanceToRefresh+1,t.setContentStyle(t._lastScreenY)):t.reset()},this.reset=function(){t._lastScreenY=0,t.setContentStyle(0)},this.setContentStyle=function(e){t.contentRef&&setTransform(t.contentRef.style,e?"translate3d(0px,"+e+"px,0)":"")},this.onRefresh=Object(n.d)(this,"refresh",7)}return Object.defineProperty(PullToRefresh.prototype,"scrollContainer",{"get":function(){return null===document.querySelector(".taro-tabbar__tabbar")?window:document.querySelector(".taro-tabbar__panel")||window},"enumerable":!0,"configurable":!0}),PullToRefresh.prototype.statusChange=function(){if("release"===this.currSt){var e=this.el.closest(".taro_page");e&&e.__page&&e.__page.onPullDownRefresh()}},PullToRefresh.prototype.componentDidUnload=function(){this.destroy()},PullToRefresh.prototype.componentDidLoad=function(){var e=this;this.init(),this._isMounted=!0,i.eventCenter.on("__taroStartPullDownRefresh",(function(t){var r=t.successHandler,n=t.errorHandler;try{e.triggerPullDownRefresh(!0),r({"errMsg":"startPullDownRefresh: ok"})}catch(e){n({"errMsg":"startPullDownRefresh: fail"})}})),i.eventCenter.on("__taroStopPullDownRefresh",(function(t){var r=t.successHandler,n=t.errorHandler;try{e.triggerPullDownRefresh(!1),r({"errMsg":"stopPullDownRefresh: ok"})}catch(e){n({"errMsg":"stopPullDownRefresh: fail"})}}))},PullToRefresh.prototype.render=function(){var e=this,renderRefresh=function(t){var r=e,i=r.currSt,s=r.dragOnEdge,a=r.prefixCls,c=Object(o.a)(t,!s&&a+"-transition"),l="activate"===i||"release"===i;return Object(n.f)("div",{"class":a+"-content-wrapper"},Object(n.f)("div",{"class":c,"ref":function(t){e.contentRef=t}},l&&Object(n.f)("div",{"class":a+"-indicator"},Object(n.f)("div",null),Object(n.f)("div",null),Object(n.f)("div",null)),Object(n.f)("slot",null)))};return this.scrollContainer?renderRefresh(this.prefixCls+"-content "+this.prefixCls+"-down"):Object(n.f)(n.a,{"class":Object(o.a)(this.prefixCls,this.prefixCls+"-down")},renderRefresh(this.prefixCls+"-content"))},Object.defineProperty(PullToRefresh.prototype,"el",{"get":function(){return Object(n.e)(this)},"enumerable":!0,"configurable":!0}),Object.defineProperty(PullToRefresh,"watchers",{"get":function(){return{"currSt":["statusChange"]}},"enumerable":!0,"configurable":!0}),Object.defineProperty(PullToRefresh,"style",{"get":function(){return".rmc-pull-to-refresh-content{-webkit-transform-origin:left top 0;transform-origin:left top 0}.rmc-pull-to-refresh-content-wrapper{overflow:hidden}.rmc-pull-to-refresh-transition{-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s}@-webkit-keyframes rmc-pull-to-refresh-indicator{50%{opacity:.2}to{opacity:1}}@keyframes rmc-pull-to-refresh-indicator{50%{opacity:.2}to{opacity:1}}.rmc-pull-to-refresh-indicator{text-align:center;height:30px;line-height:10px}.rmc-pull-to-refresh-indicator>div{background-color:grey;width:6px;height:6px;border-radius:100%;margin:3px;-webkit-animation-fill-mode:both;animation-fill-mode:both;display:inline-block;-webkit-animation:rmc-pull-to-refresh-indicator .5s linear 0s infinite;animation:rmc-pull-to-refresh-indicator .5s linear 0s infinite}.rmc-pull-to-refresh-indicator>div:nth-child(0){-webkit-animation-delay:-.1s!important;animation-delay:-.1s!important}.rmc-pull-to-refresh-indicator>div:first-child{-webkit-animation-delay:-.2s!important;animation-delay:-.2s!important}.rmc-pull-to-refresh-indicator>div:nth-child(2){-webkit-animation-delay:-.3s!important;animation-delay:-.3s!important}.rmc-pull-to-refresh-down .rmc-pull-to-refresh-indicator{margin-top:-25px}"},"enumerable":!0,"configurable":!0}),PullToRefresh}()},"99":function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var n=function createCommonjsModule(e,t){return e(t={"exports":{}},t.exports),t.exports}((function(e){!function(){var t={}.hasOwnProperty;function classNames(){for(var e=[],r=0;r<arguments.length;r++){var n=arguments[r];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)&&n.length){var i=classNames.apply(null,n);i&&e.push(i)}else if("object"===o)for(var s in n)t.call(n,s)&&n[s]&&e.push(s)}}return e.join(" ")}e.exports?(classNames.default=classNames,e.exports=classNames):window.classNames=classNames}()}))}}]);