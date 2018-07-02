window.onload=function(){
	var oDiv=document.getElementById('main');
	var oMenu=document.getElementsByClassName('menu')[0];
	var oCn=oMenu.getElementsByTagName('div');

	var i=window.innerHeight;
	console.log(i);
	console.log(i*4);
	oDiv.style.height=i*4+'px';
	oMenu.style.top=i/2.5+'px';

	var canvas01=document.getElementById("canvas01");
	var clock=canvas01.getContext("2d");

	function timer(){
		clock.clearRect(0,0,600,400);

		var time=new Date();
		var hours=time.getHours();
		var mins=time.getMinutes();
		var sec = time.getSeconds();



		clock.lineWidth=5;
		clock.strockStyle="#000";
		clock.beginPath();
		clock.arc(300,200,150,0,360,false);
		clock.stroke();
		clock.closePath();

		for(var i=0;i<12;i++){
			clock.save();
			clock.translate(300,200);
			clock.lineWidth=5;
			clock.strockStyle="#000";
			clock.beginPath();
			clock.rotate(i*30*Math.PI/180);
			clock.moveTo(0,-130);
			clock.lineTo(0,-150);
			clock.stroke();
			clock.closePath();
			clock.restore();
		};

		for(var i=0;i<60;i++){
			clock.save();
			clock.translate(300,200);
			clock.lineWidth=3;
			clock.strockStyle="#000";
			clock.beginPath();
			clock.rotate(i*6*Math.PI/180);
			clock.moveTo(0,-140);
			clock.lineTo(0,-150);
			clock.stroke();
			clock.closePath();
			clock.restore();
		};

		clock.save();
		clock.translate(300,200);
		clock.lineWidth=5;
		clock.strockStyle="#000";
		clock.rotate(hours*30*Math.PI/180);
		clock.beginPath();
		clock.moveTo(0,0);
		clock.lineTo(0,-70);
		clock.stroke();
		clock.closePath();
		clock.restore();

		clock.save();
		clock.translate(300,200);
		clock.lineWidth=3;
		clock.strockStyle="#000";
		clock.rotate(mins*6*Math.PI/180);
		clock.beginPath();
		clock.moveTo(0,0);
		clock.lineTo(0,-100);
		clock.stroke();
		clock.closePath();
		clock.restore();

		clock.save();
		clock.translate(300,200);
		clock.lineWidth=3;
		clock.strockStyle="#000";
		clock.rotate(sec*6*Math.PI/180);
		clock.beginPath();
		clock.moveTo(0,0);
		clock.lineTo(0,-130);
		clock.stroke();
		clock.closePath();
		clock.restore();
	}
	timer();
	setInterval(timer,30);
};