# miniJS
MiniJS - minified/lazy javascript functions


Works in IE 6,7,8,9 :)
#### Live Demo at <http://minijs.acolab.it/>


### Example


document.getElementById() -> mini.getID("id");

document.getElementsByTagName() -> mini.getTag("tag");

document.getElementsByClassName() -> mini.getClass("class");

document.addEventListener() -> mini.addEvent("type","target",callback);



mini.hide("class/id"); //Hide element

mini.show("class/id"); //Show element

mini.toggle("class/id");  //Toggle element

mini.html("class/id","new content"); //Edit target html

mini.timer("ms","callback","boolean"); // SetInterval(), true = loop, false = stop

mini.click("target","callback"); // onClick

mini.ajax("type","URI","callback"); // XMLHttpRequest() - *headers inactive

mini.addEvent("type","target","callback"); // addEventListener() - click, mouseover, keyup etc.


