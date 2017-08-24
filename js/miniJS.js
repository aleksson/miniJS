//
// miniJS by a.Cincarevic 2017
//
// EN superfierad DOM modul baserad på vanilla JS 
// för lata/effektiva javascript utvecklare.
//
//$(()=> console.log("miniJS init"));

var mini ={
	
	$$make:{
		date: "2017",
		name: "miniJS",
		author : "a.Cincarevic"
	},
	$$help:{
		jQuery : $,
		angular: "$$"
	},
	last:{},
	events:[],
	DOM: document.body.innerHTML,
	styles: document.styleSheets,
	getDay: new Date().getDay(),
	getMonth: new Date().getMonth(),
	getYear: new Date().getFullYear(),
	getID : function (ID) { 
		return document.getElementById(ID);
	},
	getTag : function (TAG) {
		return document.getElementsByTagName(TAG);
	},
	getClass : function (CLASS) {
		return document.getElementsByClassName(CLASS);
	},
	addEvent : function (type,target,callback) {

		if(type && target && callback){
			if(mini && mini.getID(target) != null){
				mini.getID(target).addEventListener(type, callback, false);
				mini.events.push(target);
				return console.warn("New Event("+type+") added on: "+ target);
			}else return console.error("New Event: " + target + " don't exist in DOM");
		}else return console.error("New Event: Missing one or more parameters (Type, Element, Callback)")
		
	},
	show : function (target) {

		if(target[0] == "."){
			return mini.getClass(target.split('.').pop())[0].style.display = "block";
		}
		if(target[0] == "#"){
			return mini.getID(target.split('#').pop()).style.display = "block";	
		}else return console.error("Show Element: Expected ID or Class, but got: " + target[0]);
		

	},
	hide : function (target) {

		if(target[0] == "."){
			return mini.getClass(target.split('.').pop())[0].style.display = "none";
		}
		if(target[0] == "#"){
			return mini.getID(target.split('#').pop()).style.display = "none";	
		}else return console.error("Hide Element: Expected ID or Class, but got: " + target[0]);
	},
	toggle : function (target) {

		if(!target || target[0] != "." && target[0] != "#") return console.error("mini.toggle: Missing ID or Class");
		if(target[0] == "."){
			var className = mini.getClass(target.split(".").pop())[0].style.display;
			if(className == "" || className == "block") return mini.hide(target);
			if(className == "none") return mini.show(target);
		}
		if(target[0] == "#"){
			var className = mini.getID(target.split("#").pop()).style.display;
			if(className == "" || className == "block") return mini.hide(target);
			if(className == "none") return mini.show(target);
		}else return console.error("Toggle Element: Expected ID or Class, but got: " + target[0]);
	},
	timer : function (ms,callback,proceed) {

		// Loop
		if(proceed && typeof(proceed) == "boolean" && proceed == true){ 
			return setInterval(callback,ms);
		}
		else{ // only run once
			if(typeof(ms) == "number" && typeof(callback) == "function"){

				timer = setInterval(callback ,ms-1000);
				setTimeout(function() { 
					clearInterval(timer); 
				}, ms);
			} 
			else return console.error("mini.timer : [error] Invalid args-datatypes..");
		}
		
	},
	ajax: function (type,uri,callback) {

		if(!type || !uri || !callback) return console.error("mini.ajax : [error] missing args..");
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
		    if (this.readyState == 4 && this.status == 200) {
		      return callback(xhttp.responseText);
		    }else return console.error("ajax response error: " + xhttp.responseText);
		};
		xhttp.open(type, uri, true);
		xhttp.send();
	},
	html: function (target,content) {
		var theTarget = document.querySelectorAll(target);
		//console.log("theTarget::" , theTarget[0])
		if(theTarget[0] == "" || theTarget[0] == null) return console.warn("Target: "+ target +" not found!");
		theTarget[0].innerHTML = content;
	},
	click:function (target,callback) {
		var theTarget = document.querySelectorAll(target);
		return mini.addEvent('click',target,callback);
	}
	
}
mini.scripts = mini.getTag('script');
