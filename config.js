window.onload=inicio;

var bt = 1 
  		
function inicio(){
	
	$("#bt1").click(function(){	
		bt=1
		color();
	});
  $("#bt2").click(function(){  
		bt=2
		color();
	});
  $("#bt3").click(function(){  
		bt=3
		color();
	});
  $("#bt1").click(function(){  
		bt=4
		color();
	});
				
	function color(){
		for (var i = 1; i < 5; i++){
			if( i == bt ){
				$('#bt'+i+'').removeClass("off");
				$('#bt'+i+'').addClass("on");
			}else{
				$('#bt'+i+'').removeClass("on");
				$('#bt'+i+'').addClass("off");
			}
		};			
	}
		
			
}//termina funcion INICIO
