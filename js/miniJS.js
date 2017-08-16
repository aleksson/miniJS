//
// miniJS by a.Cincarevic 2017
//
// EN superfierad DOM modul baserad på vanilla JS 
// för lata/effektiva javascript utvecklare.
//
//$(()=> console.log("miniJS init"));


var mini =
{
	$$make:{
		date: "2017",
		name: "miniJS",
		author : "a.Cincarevic"
	},
	$$help:{
		$ : $
	},
	last:{}
};

mini.getID = function (ID) { 
	return document.getElementById(ID);
}

mini.getTag = function (TAG) {
	return document.getElementsByTagName(TAG);
}

mini.getClass = function (CLASS) {
	return document.getElementsByClassName(CLASS);
}

mini.addEvent = function (type,target,callback) {

	if(type && target && callback){
		if(mini && mini.getID(target) != null){
			mini.getID(target).addEventListener(type, callback, false);
			return console.warn("New Event added on: " + target);
		}else return console.error("New Event: " + target + " don't exist in DOM");
	}else return console.error("New Event: Missing one or more parameters (Type, Element, Callback)")
	
}


mini.show = function (target) {
	if(target[0] == "."){
		//console.log("Show Class: " + target.split('.').pop());
		return mini.getClass(target.split('.').pop())[0].style.display = "block";
	}
	if(target[0] == "#"){
		//console.log("Show ID: " + target.split('.').pop());
		return mini.getID(target.split('.').pop())[0].style.display = "block";	
	}else return console.error("Show Element: Expected ID or Class, but got: " + target[0]);
	


}

mini.hide = function (target) {
	if(target[0] == "."){
		return mini.getClass(target.split('.').pop())[0].style.display = "none";
	}
	if(target[0] == "#"){
		return mini.getID(target.split('.').pop())[0].style.display = "none";	
	}else return console.error("Hide Element: Expected ID or Class, but got: " + target[0]);
}
