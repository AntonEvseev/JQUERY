var checkTest = function(){
		var s = $("input");
		var sum = 0;
		var sumPercent = 0;
		var t1 = 0;
		var t2 = 0;
	s.each(function(i, elem){
		if($("input:radio").eq(i).prop("checked") == true){
				if(i==0 || i==6 || i==11){
					sum = sum + 1;                 
				}                   
			}
		if ($("input.table").eq(i).prop("checked") == true){
			if(i==1 || i==3){
				t1 = t1+0.5;
			}else {
				t1 = t1-0.5;
			}
		}
			
		if ($("input.form").eq(i).prop("checked") == true){
			if(i==0 || i==1){
				t2 = t2+0.5;
			}else {
				t2 = t2-0.5;
			}
		}		
		
	})
	
	sum = sum + Math.max(t1,0) + Math.max(t2,0);
     sumPercent = (sum / 5) * 100;
         switch (true){
            case sumPercent <= 100:
               alert("Ваш результат: " + sum + " балла(ов), " + "что составляет " + sumPercent + "% от правильных ответов");
            break;
            default:
               alert("Ты бог!");
		}
	}
$("#resbutton").click(checkTest);