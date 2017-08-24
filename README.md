# miniJS
MiniJS - minified/lazy vanilla javascript functions

#### Live Demo at <http://minijs.acolab.it/>

### Example
```javascript
mini.getID("id") // document.getElementById()

mini.getTag("tag") // document.getElementsByTagName()

mini.getClass("class") //document.getElementsByClassName()

mini.hide("class/id"); //Hide element

mini.show("class/id"); //Show element

mini.toggle("class/id");  //Toggle element

mini.click("target","callback"); // onClick

mini.html("class/id","new content"); //Edit target html

mini.ajax("type","URI","callback"); // XMLHttpRequest() - *headers inactive

mini.timer("ms","callback","boolean"); // SetInterval(), true = loop, false = stop

mini.addEvent("type","target","callback"); // addEventListener() - click, mouseover, keyup etc.
```

