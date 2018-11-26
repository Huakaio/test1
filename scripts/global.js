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