﻿//Comment
function toggleVisibility(e){visibleDivId=visibleDivId===e?null:e,hideNonVisibleDivs()}function hideNonVisibleDivs(){var e,n,i;for(e=0;e<divs.length;e++)n=divs[e],i=document.getElementById(n),visibleDivId===n?i.style.display="block":i.style.display="none"}var disqus_shortname="trtcocuk",disqus_url=disqus_blogger_current_url;!function(){"use strict";var e=function(){var e=document.getElementById("comments");return e||(e=document.getElementById("disqus-blogger-comment-block")),e},n=e();if(n){var i=document.createElement("div");i.id="disqus_thread",n.innerHTML="",n.appendChild(i),n.style.display="block";var s=document.createElement("script");s.async=!0,s.src="//"+disqus_shortname+".disqus.com/embed.js",(document.getElementsByTagName("head")[0]||document.body).appendChild(s)}}(),!function(e,n,i){var s,t=e.getElementsByTagName(n)[0];e.getElementById(i)||(s=e.createElement(n),s.id=i,s.src="",t.parentNode.insertBefore(s,t))}(document,"script","facebook-jssdk");var divs=["disqus-box","blogger-box"],visibleDivId=null;$(".commentbtn").click(function(e){$(this).addClass("btncurrent").siblings().removeClass("btncurrent")});
//Related Panel
CizgiFilmHikayeleri("SWP DOMSelect Slider Utils BeLazy Tooltip".split(" "),function(a,c,l,m,f,n){a.init("segmentation_recommendations");var b=window.document.getElementById("cfh_segmentation_recommendations"),d=a.getProperty("ui_format")||"slider",p=a.getProperty("async")||!1,q=a.getProperty("pagesize")||4,r=a.getProperty("enable_tooltip"),t=a.getProperty("parent"),g=function(){},e=g,h=g;"slider"===d&&new l({slide:c.get(".slider-slide",b),prev:c.get(".slider-prev",b),next:c.get(".slider-next",b),duration:.4,
easing:"ease"});p&&(e=m.once(function(){a.Widget.refresh({async:!1,pagesize:q,lazyload_images:!0,ui_format:d,parent:t},{callback:function(){f.handleImagesIn(b)}})}),f.until("visible",b,e));r&&n.create(".cfh_segmentation_recommendations .game-thumb");"grid"===d&&(h=function(){var k=c.get("ul.grid-row",b);a.Utils.removeClass(b,["full-row","col-m","col-l"]);a.Utils.addClass(k,["col-m-2","col-l-4"]);a.Utils.removeClass(k,["col-m-4","col-l-6"])});a.System.init(function(a){"game.sidepanel.open"===a.name&&
a.data&&"segmentation_recommendations"===a.data.item&&e();"recent.played.filled"===a.name&&h()})});