var util=function(e,t){"use strict";var n={makeArray:function(e){return Array.prototype.slice.call(e,0)},elementIsVisible:function(n){var i=n.getBoundingClientRect(),o=Math.max(e.documentElement.clientWidth,t.innerWidth||0),r=Math.max(e.documentElement.clientHeight,t.innerHeight||0);return i.right<0||i.bottom<0||i.left>o||i.top>r?!1:n.contains(e.elementFromPoint(i.left+1,i.top+1))&&n.contains(e.elementFromPoint(i.right-1,i.top+1))&&n.contains(e.elementFromPoint(i.right-1,i.bottom-1))&&n.contains(e.elementFromPoint(i.left+1,i.bottom-1))},forEach:function(e,t,n){if(Array.prototype.forEach)return Array.prototype.forEach.call(e,t,n);for(var i=0;i<e.length;i++)t.call(n,e[i],i,e)}};return n}(document,window);!function(e,t){"use strict";if(e.querySelector&&t.addEventListener){var n={city:e.querySelector("meta[name=city]").content,eventId:e.querySelector("meta[name=eventId]").content};!function(){var n=e.querySelectorAll(".js-waitlist-toggle"),i=e.querySelector(".js-waitlist-wrap"),o=e.querySelector(".js-modal-close");if(n.length&&i&&o){for(var r=0;r<n.length;r++)n[r].href="javascript:void(0);",n[r].addEventListener("click",function(){i.classList.toggle("visible")});t.addEventListener("keyup",function(e){27==e.keyCode&&i.classList.remove("visible")}),o.addEventListener("click",function(){i.classList.remove("visible")})}}(),function(){var i="data-visible-event",o=util.makeArray(e.querySelectorAll("["+i+"]"));o.length&&t.addEventListener("scroll",function(){var e;return function(){e=e||setTimeout(function(){util.forEach(o,function(e){if(util.elementIsVisible(e)&&e.hasAttribute(i)){var t=e.getAttribute(i),o={hitType:"event",eventCategory:t,eventAction:"visible",eventLabel:n.eventId};console.info("send element visible event",e,o),ga("send",o),e.removeAttribute(i)}}),e=null},250)}}())}(),function(){var t="data-click-event";util.forEach(e.querySelectorAll("["+t+"]"),function(e){e.addEventListener("click",function(){var i=e.getAttribute(t),o={hitType:"event",eventCategory:i,eventAction:"click",eventLabel:n.eventId};console.info("send element click event",e,o),ga("send",o),e.removeAttribute(t)})})}()}}(document,window);