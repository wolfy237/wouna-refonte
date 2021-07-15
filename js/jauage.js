
var root = document.documentElement;
var percent = 50;
setTimeout(function(){
    var DOMStyle = getComputedStyle(root);
    root.style.setProperty('--nb-percent', percent);
    root.style.setProperty('--nb-percent-str', '"'+percent+'%"');
}, 1000);



var root = document.documentElement;
var percent = 78;
setTimeout(function(){
    var DOMStyle = getComputedStyle(root);
    root.style.setProperty('--nb-percent', percent);
    root.style.setProperty('--nb-percent-str', '"'+percent+'%"');
}, 1000);


var root = document.documentElement;
var percent = 72;
setTimeout(function(){
    var DOMStyle = getComputedStyle(root);
    root.style.setProperty('--nb-percent', percent);
    root.style.setProperty('--nb-percent-str', '"'+percent+'%"');
}, 1000);
