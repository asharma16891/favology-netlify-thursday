!function(i,s){"use strict";var e,r,a,l,h,n,p,o,t=(r={bcClass:"sf-breadcrumb",menuClass:"sf-js-enabled",anchorClass:"sf-with-ul",menuArrowClass:"sf-arrows"},(e=/^(?![\w\W]*Windows Phone)[\w\W]*(iPhone|iPad|iPod)/i.test(navigator.userAgent))&&i("html").css("cursor","pointer").on("click",i.noop),a=e,l="behavior"in(e=document.documentElement.style)&&"fill"in e&&/iemobile/i.test(navigator.userAgent),h=!!s.PointerEvent,n=function(s){return d(s).data("sfOptions")},p=function(){var s=i(this),e=n(s);clearTimeout(e.sfTimer),s.siblings().superfish("hide").end().superfish("show")},o=function(s){s.retainPath=-1<i.inArray(this[0],s.$path),this.superfish("hide"),this.parents("."+s.hoverClass).length||(s.onIdle.call(d(this)),s.$path.length&&i.proxy(p,s.$path)())},{hide:function(s){if(this.length){var e=n(this);if(!e)return this;var o=!0===e.retainPath?e.$path:"",t=this.find("li."+e.hoverClass).add(this).not(o).removeClass(e.hoverClass).children(e.popUpSelector),o=e.speedOut;if(s&&(t.show(),o=0),(e.retainPath=!1)===e.onBeforeHide.call(t))return this;t.stop(!0,!0).animate(e.animationOut,o,function(){var s=i(this);e.onHide.call(s)})}return this},show:function(){var s=n(this);if(!s)return this;var e=this.addClass(s.hoverClass).children(s.popUpSelector);return!1===s.onBeforeShow.call(e)||e.stop(!0,!0).animate(s.animation,s.speed,function(){s.onShow.call(e)}),this},destroy:function(){return this.each(function(){var s,e=i(this),o=e.data("sfOptions");if(!o)return!1;s=e.find(o.popUpSelector).parent("li"),clearTimeout(o.sfTimer),u(e,o),c(s),f(e),e.off(".superfish").off(".hoverIntent"),s.children(o.popUpSelector).attr("style",function(s,e){if(void 0!==e)return e.replace(/display[^;]+;?/g,"")}),o.$path.removeClass(o.hoverClass+" "+r.bcClass).addClass(o.pathClass),e.find("."+o.hoverClass).removeClass(o.hoverClass),o.onDestroy.call(e),e.removeData("sfOptions")})},init:function(n){return this.each(function(){var s=i(this);if(s.data("sfOptions"))return!1;var e,o=i.extend({},i.fn.superfish.defaults,n),t=s.find(o.popUpSelector).parent("li");o.$path=(e=o,s.find("li."+e.pathClass).slice(0,e.pathLevels).addClass(e.hoverClass+" "+r.bcClass).filter(function(){return i(this).children(e.popUpSelector).hide().show().length}).removeClass(e.pathClass)),s.data("sfOptions",o),u(s,o,!0),c(t,!0),f(s),function(s,e){var o="li:has("+e.popUpSelector+")";i.fn.hoverIntent&&!e.disableHI?s.hoverIntent(p,v,o):s.on("mouseenter.superfish",o,p).on("mouseleave.superfish",o,v);o=h?"pointerdown.superfish":"MSPointerDown.superfish";a||(o+=" touchend.superfish"),l&&(o+=" mousedown.superfish"),s.on("focusin.superfish","li",p).on("focusout.superfish","li",v).on(o,"a",e,m)}(s,o),t.not("."+r.bcClass).superfish("hide",!0),o.onInit.call(this)})}});function u(s,e,o){var t=r.menuClass;e.cssArrows&&(t+=" "+r.menuArrowClass),s[o?"addClass":"removeClass"](t)}function c(s,e){e=e?"addClass":"removeClass",s.children("a")[e](r.anchorClass)}function f(s){var e=s.css("ms-touch-action"),o=s.css("touch-action");s.css({"ms-touch-action":o="pan-y"===(o=o||e)?"auto":"pan-y","touch-action":o})}function d(s){return s.closest("."+r.menuClass)}function v(){var s=i(this),e=n(s);a?i.proxy(o,s,e)():(clearTimeout(e.sfTimer),e.sfTimer=setTimeout(i.proxy(o,s,e),e.delay))}function m(s){var e=i(this),o=n(e),t=e.siblings(s.data.popUpSelector);if(!1===o.onHandleTouch.call(t))return this;0<t.length&&t.is(":hidden")&&(e.one("click.superfish",!1),"MSPointerDown"===s.type||"pointerdown"===s.type?e.trigger("focus"):i.proxy(p,e.parent("li"))())}i.fn.superfish=function(s,e){return t[s]?t[s].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof s&&s?i.error("Method "+s+" does not exist on jQuery.fn.superfish"):t.init.apply(this,arguments)},i.fn.superfish.defaults={popUpSelector:"ul,.sf-mega",hoverClass:"sfHover",pathClass:"overrideThisToUse",pathLevels:1,delay:800,animation:{opacity:"show"},animationOut:{opacity:"hide"},speed:"normal",speedOut:"fast",cssArrows:!0,disableHI:!1,onInit:i.noop,onBeforeShow:i.noop,onShow:i.noop,onBeforeHide:i.noop,onHide:i.noop,onIdle:i.noop,onDestroy:i.noop,onHandleTouch:i.noop}}(jQuery,window);