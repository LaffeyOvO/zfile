System.register(["./request-legacy.d578b778.js","./index-legacy.5c2a5b9a.js"],(function(t){"use strict";var e,n;return{setters:[function(t){e=t.j},function(t){n=t.c}],execute:function(){t("u",(function(){var t=n((function(){return i.value<768})),e=n((function(){return i.value>=768})),r=function(t){return null==t||""===t};return{isMobile:t,isNotMobile:e,height:u,encodeAllIgnoreSlashes:function(t){if(r(t))return"";for(var e="",n=-1,i=0;i<t.length;i++){var u=t.charAt(i);if("/"===u){if(n<i){var o=t.substring(n+1,i);e+=encodeURIComponent(o),n=i}e+=u}if(i===t.length-1&&n<i){var c=t.substring(n+1,i+1);e+=encodeURIComponent(c)}}return e},strIsEmpty:r,strIsNotEmpty:function(t){return!r(t)},removeDuplicateSeparator:function(t){var e="";0===t.indexOf("http://")?e="http://":0===t.indexOf("https://")&&(e="https://");for(var n=e.length;n<t.length-1;n++){var r=t.charAt(n),i=t.charAt(n+1);"/"===r&&"/"===i||(e+=r)}return e+=t.charAt(t.length-1)}}}));var r=e(),i=r.width,u=r.height}}}));