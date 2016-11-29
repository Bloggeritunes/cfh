﻿// Login
CizgiFilmHikayeleri({waiton:"cizgifilmhikayeleri.loaded"},"SWPUtils SWP SWPEvent DOMSelect DOMEvent Placeholder".split(" "),function(f,b,q,l,c,k){b.init("popup_login");l.get("#popup-login-username")&&(k.init("popup-login-username"),k.init("popup-login-password"));var m=!1,g=0,r=document.createElement("div"),a=function(a){return document.getElementById(a)||r},h=function(e,b){var d=a("popup-login-error-generic"),c=a("popup-login-error-banned");e?"banned"==b?f.addClass(c,"visible"):f.addClass(d,"visible"):(f.removeClass(d,
"visible"),f.removeClass(c,"visible"))},d=function(e,t){g!==e&&2!==g&&(l.get("#popup-login-close")?(g=e,h(!1),a("popup-login-username").value="",a("popup-login-password").value="",a("popup-login-remember").checked=!0,1===e?(b.System.emit("gi.game.hide"),b.System.emit("popup.header.open"),f.removeClass(a("cfh_popup_login"),"hidden"),u(),/Trident/g.test(window.navigator.userAgent)||(document.getElementById("popup-login-username_ph")?c.trigger("#popup-login-username_ph","keydown"):a("popup-login-username").focus())):
(t||(b.System.emit("gi.game.show"),b.System.emit("popup.header.close")),b.System.emit("popup.closed",{type:"login"}),f.addClass(a("cfh_popup_login"),"hidden"))):(g=2,b.Widget.refresh({show_popup_contents:!0},{callback:function(){setTimeout(function(){k.init("popup-login-username");k.init("popup-login-password");g=0;d(1)},0)}})))},u=function(){!0!==m&&(m=!0,c.add(a("popup-login-form"),"submit",function(a){c.preventDefault(a);v()}),c.add(a("popup-login-close"),"click",function(){d(0)}),c.add(a("popup-login-facebook"),
"click",function(){n("facebook")}),c.add(a("popup-login-google"),"click",function(){n("google")}),c.add(a("popup-login-register"),"click",function(){d(0);b.System.emit("popup.register.open",{})}))},p=function(e){a("popup-login-button").enabled=e;f[e?"removeClass":"addClass"](a("popup-login-button"),"processing")},v=function(){if("undefined"===typeof a("popup-login-button").enabled||a("popup-login-button").enabled)h(!1),""===a("popup-login-password").value||""===a("popup-login-username").value?h(!0):
(b.System.emit("auth.login.request",{rememberMe:a("popup-login-remember").checked,username:a("popup-login-username").value,password:a("popup-login-password").value,callback:function(a){a.isError&&(a.scope&&a.scope.data&&"banned"==a.scope.data.string?h(!0,"banned"):h(!0),p(!0))}}),p(!1))},n=function(e){var c=a("popup-login-remember").checked;b.System.emit("auth.login.remember",{rememberMe:c});d(0);b.System.emit("popup.oauth.open",{provider:e})};"onload"===b.getProperty("requires_auth")&&q.listen("onDisplayGame",
function(){d(1)});b.System.init(function(a){switch(a.name){case "popup.login.open":0===g?d(1):d(0);break;case "popup.register.open":d(0,!0)}},!0)});
// Login User
CizgiFilmHikayeleri(["SWP","DOMEvent"],function(c,f){c.init("user_status");var d=document.getElementById("cfh_user_status"),e=document.getElementById("logged-user-avatar"),b=d.querySelector(".unit-counter");f.add(d,"click",function(a){for(var b=a.target;!b.id;)b=b.parentNode;switch(b.id){case "login-button-nav":c.System.emit("popup.login.open",{});a.preventDefault();break;case "logout-button-nav":c.System.emit("auth.logout.request",{}),a.preventDefault()}});c.System.init(function(a){switch(a.name){case "avatar.update.current":e&&
(e.src=a.body.avatarUrl);break;case "system.notification.update.amount":a=a.data.notification_amount||0,0<a&&b?b.innerHTML=a:b&&(b.style.display="none")}})});
// Login User
CizgiFilmHikayeleri(["SWP","SWPUtils"],function(b,c){b.init("header");var a=document.querySelector(".cfh_header .authentication");b.System.init(function(b){switch(b.name){case "popup.header.open":window.setTimeout(function(){c.addClass(a,"is-open")},0);break;case "popup.header.close":c.removeClass(a,"is-open")}},!0)});CizgiFilmHikayeleri(["SWPUtils","DOMEvent","FeatureDetector"],function(b,c,a){function k(b,a){function c(){d=!1;b()}var d;return function(){d||(d=!0,e.setTimeout(c,a))}}if(a.transitions()){var e=window;a=e.document;var g=a.querySelector(".inner.container"),f=a.querySelector("#cfh_header > .inner"),d=!0,h;g&&f&&c.add(e,"scroll",k(function(){var a=e.pageYOffset,c=a-h||0;d&&0<c&&100<a?"left"!==g.getAttribute("data-offcanvas")&&(b.addClass(f,"sticky-hidden"),d=!1):!d&&0>c&&(b.removeClass(f,"sticky-hidden"),d=!0);
h=a},200))}});
// Accordion
CizgiFilmHikayeleri(["SWP","DOMEvent","DOMSelect","ThumbnailTracker"],function(c,f,b,m){function h(){d=!1;c.Utils.removeClass(g,"is-open");e&&e.removeAttribute("data-offcanvas")}var k=window;b=k.document;var d,e=b.querySelector(".inner.container"),g=b.getElementById("cfh_accordion_menu"),l=Array.prototype.slice.call(b.querySelectorAll(".accordion-item",g));f.add(b,"click",function(a){if(d){a=a||k.event;for(a=a.target||a.srcElement;a;){if(c.Utils.hasClass(a,"cfh_accordion_menu"))return;a=a.parentNode}h()}});
f.add(".browse-toggle","click",function(){d?h():(d=!0,c.Utils.addClass(g,"is-open"),e&&e.setAttribute("data-offcanvas","left"))});f.add(l,"click",function(a){function b(a){return a&&"BODY"!==a.tagName?-1<a.className.indexOf("accordion-item")?a:b(a.parentNode):!1}a=b(a.target);var d=c.Utils.hasClass(a,"accordion-open");l.forEach(function(a){c.Utils.removeClass(a,"accordion-open")});d||c.Utils.addClass(a,"accordion-open")})});