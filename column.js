window.onload=function col(){
	var chart={
		width:800,
		height:400,
		data:[{
			names:"MATHS",
			value:300
		  },
		  {
			names:"Computer",
			value:450
		  },
		  {
			names:"physics",
			value:1000
		  },
		   {
			names:"chemistry",
			value:700
		  },
		  {
			names:"chemistry",
			value:700
		  },
		{
			names:"chemistry",
			value:700
		  },
		  {
			names:"Computer",
			value:450
		  },
		 {
			names:"Computer",
			value:450
		  },
		{
			names:"Computer",
			value:450
		  },					
		  {
			names:"biology",
			value:400
		  }]
	};
	var x,y,inp=[],px,py,pz,r,rx,ry,w,h,ht;
	var width = window.innerWidth;
	var height = window.innerHeight;
	var paper;
	console.log("length"+chart.data.length);
	for(i in chart){
		if(i==="data"){
			for(j=0;j<(chart.data.length);j++){
				inp[j]=chart.data[j].value;
			}
		}
	}
	console.log("widthscr"+width);
	viewport();
	input_scaling();
	r=w/(inp.length)-20;
	x=px-r;
	rec();
	function rec(){
	var  nam;
		for(var j=0;j<inp.length;j++){
			ht=inp[j];
			nam=chart.data[j].names;
			console.log(nam);
	
			draw_column(ht,nam);
			console.log("rec");
		}
	}
	function draw_column(ht,nam){
		var colr=getRandomColor(); 		
		x=x+r+10;
		console.log("x"+x+" "+(py-ht)+" "+r+" "+ht);
		paper.rect(x,(py-ht),r,ht).attr("fill", colr);
		paper.text(x+(r/2),py+30,nam).rotate(90,x+(r/2),py+30);
	}
	//canvas defination
	function viewport(){
		
		for( i in chart){
			if(i==="width")
				w=chart[i];	
			else if(i==="height")
				h=chart[i];
		}
		rx=w/(width);
		ry=h/(height);
		px=((width)/2)-(w/2);
		py=((height)/2)+(h/2);
//veiw screen
		paper=Raphael(0,0,width,height);	
//	axis
		paper.path("M"+px+" "+py+"V"+" "+(py-h));
		paper.path("M"+px+" "+py+"H"+" "+(px+w));
	
	}
	function input_scaling(){
		var max1=0;
		//scaling inputs according to user specified screen width and height		
		for(j=0;j<inp.length;j++){
			if(inp[j]>max1){
				max1=inp[j];
			}
		} 
		console.log("MAX"+max1);
		if(max1>h){
			for(j=0;j<inp.length;j++){
				inp[j]=inp[j]/((max1/h)+0.5);
			}
		}
		
		
	}
	function getRandomColor() {
    		var letters = '0123456789ABCDEF'.split('');
   		 var color = '#';
   		 for (var i = 0; i < 6; i++ ) {
      			  color += letters[Math.floor(Math.random() * 16)];
   	 	}
    	return color;
	}
}
		


	
