breakTime=5;
workTime=25;
$(document).ready(function(){
	$('button').click(function(){
		console.log($(this).attr('value'));
		if($(this).attr("value") === 'minusBreak'){
			breakTime=breakTime-1;
			$('#breakTime1').html(breakTime);
			console.log(breakTime);
		}else if($(this).attr("value")==='plusBreak'){
			breakTime=breakTime+1;
			$('#breakTime1').html(breakTime);
		}else if($(this).attr("value")==='minusWork'){
			workTime= workTime-1;
			$('#workTime1').html(workTime);
		}else if($(this).attr("value")==='plusWork'){
			workTime=workTime+1;
			$('#workTime1').html(workTime);
		}
	});
});