/*SHOW*/
mini.click("showText",function(){
	mini.show('.showThisText');
});

/*HIDE*/
mini.click("hideText",function(){
	mini.hide('.hideThisText'); // ID finns inte... class finns
});

/*TOGGLE*/
mini.click("toggleTest",function(){
	mini.toggle('.toggleMe');
});

/*ADD EVENT*/
mini.click("testButton",function(){
	mini.addEvent("click",'testBtnEvent',function(e){
		alert("Event is working!");
	});
});

/*ADD NEW EVENT ON KEYUP*/
mini.click("testInputBtn",function () {
	mini.addEvent("keyup","testInput",function(){
		testInputData.innerText = this.value;
	});
});

/*TIMER*/
mini.click("timerTestBtn",function(){
	mini.timer(2000,function() {
		return mini.hide(".timerTest");
	});
});

/*AJAX*/
mini.click("testAjax",function () {
	mini.ajax("GET","people.json",function(result){
		mini.html('#testAjaxResult', result);
	});
});

/*HTML*/
mini.click("testDate", function () {
	mini.html('#testGetDay',mini.getDay);
	mini.html('#testGetMonth', mini.getMonth);
	mini.html('#testGetYear', mini.getYear);
})
/*CLICK*/
mini.click("clickTestBtn",function () {
	alert("mini Click!");
});

