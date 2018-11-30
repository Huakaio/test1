function addLoadEvent(func) {
    var oldonload=window.onload;
    if(typeof window.onload!="function"){
        window.onload=func()
    }else{
        window.onload=function(){
            oldonload();
            func();
        }
    }
}
function insertAfter(newElment,targetElement) {
    var parent=targetElement.parentNode;
    if(targetElement==parent.lastChild){
        parent.appendChild(newElment);
    }else {
        parent.insertBefore(newElment,targetElement.nextSibling);
    }
}
function addClass(element,value) {
    if(!element.className){
        element.className=value;
    }else {
        newClassName=element.className;
        newClassName+=" ";
        newClassName+=value;
        element.className=newClassName;
    }
}
function highlightPage() {
    if (!document.getElementsByTagName) return false;
    if (!document.getElementById) return false;
    var headers = document.getElementsByTagName("header");
    if (headers.length == 0) return false;
    var navs = headers[0].getElementsByTagName("nav");
    if (navs.length == 0) return false;
    var links = navs[0].getElementsByTagName("a");
        var linkurl;
        for (var i = 0; i < links.length; i++) {
            linkurl = links[i].getAttribute("href");
            if (window.location.href.indexOf(linkurl) != -1) {
                links[i].className = "here";
                var linktext=links[i].lastChild.nodeValue.toLowerCase();
                document.body.setAttribute("id",linktext);
            }
        }
    }
addLoadEvent(highlightPage);
function moveElement(elementID,final_x,final_y,interval) {
    if(!document.getElementById) return false;
    if(!document.getElementsById(elementID)) return false;
    var elem=document.getElementById(elementID);
    if(elem.movement){
        clearTimeout(elem.movement);
    }
    if(!elem.style.left){
        elem.style.left="0px";
    }
    if(!elem.style.top){
         ele.style.top="0px";
    }
    var xpos=parseInt(elem.style.left);
    var ypos=parseInt(elem.style.top);
    if(xpos==final_x&&ypos==final_y){
        return ture;
    }
    if(xpos<final_x){
        var dist=Math.ceil((final-xpos)/10);
        xpos=xpos+dist;
    }
    if (ypos<final_y){
        var dist=Math.ceil((final_y-ypos)/10);
        ypos+=dist;
    }
    if(xpos>final_x){
        var dist=Math.ceil((xpos-final_x)/10);
        xpos-=dist;
    }
    if(ypos>final_y){
        var dist=Math.ceil((ypos-final_y)/10);
        ypos-=dist;
    }
    elem.style.left=xpos+"px";
    elem.style.top=ypos+"px";
    var repeat="moveElement('"+elementID+"',"+final_x+","+final_y+","+interval+")";
    elem.movement=setTimeout(repeat,interval);
}
function Slideshow() {
    if(!document.getElementById) return false;
    if(!document.getElementsByTagName) return false;
    if(!document.getElementById("intro")) return false;
    var intro=document.getElementById("intro");
    var slideshow=document.createElement("div");
    slideshow.setAttribute("id","slideshow");
    var preview=document.createElement("img");
    preview.setAttribute("id","preview");
    preview.setAttribute("src","images/slideshow.gif");
    preview.setAttribute("alt","a glimpse of what awaits you");
    slideshow.appendChild(preview);
    insertAfter(slideshow,intro);
}


















