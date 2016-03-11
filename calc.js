
var p = 0; 
var memory = 0;
var f = 0; 
var calcTablo = $("#result");
function clicButton(num){ 
	if (p == 0) {
	if(calcTablo.val() == "0"){
		calcTablo.val(num);
			}else{
				calcTablo.val(calcTablo.val() + num);
	}
	}else {
			calcTablo.val("");
			calcTablo.val(num);
			p = 0;
		}
	}
function operations(fNum){ 
		if (f > 0){
			output();
		}
		f = fNum;
		p = 1;
		memory = parseFloat(calcTablo.val());
	}
var output = function() {	
	p = 1;
		if (f == 1){
			calcTablo.val(memory + parseFloat(calcTablo.val()));
		}else if (f == 2) {
			calcTablo.val(memory - parseFloat(calcTablo.val()));
		}else if (f == 3) {
			calcTablo.val(memory * parseFloat(calcTablo.val()));
		}else if (f == 4){ 
			if (parseFloat(calcTablo.val()) == 0){
				calcTablo.val("Ошибка!На ноль делить нельзя!");
			}else {
				calcTablo.val(memory / parseFloat(calcTablo.val()));
			}
		}
	f = 0;
}
var decimal = function(){ 
	 if(p!== 0){   
         calcTablo.val("0.");
			p = 0;
   }else {
			if (calcTablo.val().indexOf(".")==-1){
				calcTablo.val(calcTablo.val() + ".");
			}
		}
   }        
var res = function(){ 
		calcTablo.val("0");
		p = 0;  
		memory = 0;
		f = 0;
}
var invers = function() {
		calcTablo.val(parseFloat(calcTablo.val()) * -1);
	}
$("#point").click(decimal);
$("#output").click(output);
$("#inversion").click(invers);
$("#reset").click(res);
$(function() {
	$(".number").click(function() {
		clicButton($(this).val());
	});
});

$(function() {
	$(".functionalButton").click(function() {
		operations(Number($(this).attr("id")));
	});
});
