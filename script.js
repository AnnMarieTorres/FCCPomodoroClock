var breakTime=5;
var workTime=25;
var timer;
$(document).ready(function(){
	$('button').click(function(){
		console.log($(this).attr('value'));
		if($(this).attr("value") === 'minusBreak'){
			breakTime=breakTime-1;
			$('#breakTime1').html(breakTime);
		}else if($(this).attr("value")==='plusBreak'){
			breakTime=breakTime+1;
			$('#breakTime1').html(breakTime);
		}else if($(this).attr("value")==='minusWork'){
			workTime= workTime-1;
			$('#workTime1').html(workTime);
			$('#countDown1').html(workTime);
			timer=workTime;
		}else if($(this).attr("value")==='plusWork'){
			workTime=workTime+1;
			$('#workTime1').html(workTime);
			$('#countDown1').html(workTime);
			timer=workTime;
		}
		else if($(this).attr('value')==='start'){

			function getTimeRemaining(endtime){
				var t = Date.parse(endtime) - Date.parse(new Date());

				var seconds = Math.floor((t/1000)%60);
				var minutes = Math.floor((t/1000/60)%60);
				return{
					'total':t,
					'minutes':minutes,
					'seconds':seconds
				};
			}


			function initializeClock(id,endtime){
				var clock = document.getElementById(id);
				var minutesSpan = clock.querySelector('#minutes');
				var secondsSpan = clock.querySelector('#seconds');

				function updateClock(){
				
					var t = getTimeRemaining(endtime);
				
					$('#countDown1').html(t.minutes+":"+t.seconds);

					if (t.total<=0){
						//switch to break time
						clearInterval(timeinterval);
					}
				}
				updateClock();
				var timeinterval = setInterval(updateClock, 1000);
			}

			//var timer= $('.minutes').html();
			var deadline = new Date(Date.parse(new Date())+ timer * 60 * 1000);
			initializeClock('countDown1',deadline);
		}
	});
});




















